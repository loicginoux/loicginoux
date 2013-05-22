<?php

require('sendgrid-php/SendGrid_loader.php');

if(isset($_POST['email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "lginoux.pro@gmail.com";
  $email_subject = "[loicginoux.com] New message";


  function died($error) {
      // your error code can go here
      echo "We are very sorry, but there were error(s) found with the form you submitted. ";
      echo "These errors appear below.<br /><br />";
      echo $error."<br /><br />";
      echo "Please go back and fix these errors.<br /><br />";
      die();
  }

  // validation expected data exists
  if(!isset($_POST['name']) ||
      !isset($_POST['email']) ||
      !isset($_POST['subject']) ||
      !isset($_POST['message'])) {
      died('We are sorry, but there appears to be a problem with the form you submitted.');
  }

  $name = $_POST['name']; // required
  $email_from = $_POST['email']; // required
  $subject = $_POST['subject']; // not required
  $message = $_POST['message']; // required

  $error_message = "";
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }

  if(strlen($message) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }

  if(strlen($error_message) > 0) {
    died($error_message);
  }

  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

  $email_message = "<p>Name: ".clean_string($name)."</p>";
  $email_message .= "<p>Email: ".clean_string($email_from)."</p>";
  $email_message .= "<p>Subject: ".clean_string($subject)."</p>";
  $email_message .= "<p>Message: ".clean_string($message)."</p>";


  $sendgrid = new SendGrid(getenv("SENDGRID_USERNAME"), getenv("SENDGRID_PASSWORD"));

  $mail = new SendGrid\Mail();
  $mail->
     addTo($email_to)->
     setFrom('app11445063@heroku.com')->
     setSubject($email_subject)->
     setHtml($email_message);

  $sendgrid->
    web->
      send($mail);

  // $url = "index.php#contact"
  // $p = "?sent=ok"
  // $anchor = "#contact-form"
  // header("location:".$url.$p.$anchor);
  // die();
}
?>