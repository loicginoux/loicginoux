<!DOCTYPE HTML>
<!--
	Miniport 2.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
<head>
	<link rel="shortcut icon" href="~/favicon.ico" />
	<title>Loic Ginoux, Professional Freelance Web Application Engineer</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="description" content="Professional freelance web engineer specialized in web applications. Mainly working with Ruby on Rails and Javascript." />
	<meta name="keywords" content="Profesional Freelance web engineer, Ruby on Rails developer, Javascript Developer, web aplication developer, web project management, web contractor" />

	<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,600,700" rel="stylesheet" />
	<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
	<script src="js/5grid.js">{preset:'legacy',prefix:'css/style',breakpoints:{'desktop':{grid:{gutters:4}}}}</script>
	<noscript><link rel="stylesheet" href="css/5grid-noscript.css" /><link rel="stylesheet" href="css/style.css" /><link rel="stylesheet" href="css/style-desktop.css" /></noscript>

	<link rel="stylesheet" href="css/bootstrap-modal.css"></script>
	<link rel="stylesheet" href="css/jquery.fancybox.css" type="text/css" media="screen" />
	<!--[if lte IE 9]><link rel="stylesheet" href="css/ie9.css" /><![endif]-->
	<!--[if lte IE 8]><link rel="stylesheet" href="css/ie8.css" /><![endif]-->
	<!--[if lte IE 7]><link rel="stylesheet" href="css/ie7.css" /><![endif]-->
</head>
<body data-spy="scroll" data-target="#nav" data-offset="120">

	<!-- Nav -->
	<nav id="nav">

		<!-- <img src="images/logo_lgx.png" alt="logo Loic Ginoux"> -->

		<ul class="nav">
			<li class="active"><a href="#top">Top</a></li>
			<li><a href="#portfolio">Portfolio</a></li>
			<li><a href="#work">Work</a></li>
			<li><a href="#cv">CV</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>

	<?php include 'home.php' ?>
	<?php include 'portfolio.php' ?>
	<?php include 'work.php' ?>
	<?php include 'cv.php' ?>
	<?php include 'contact.php' ?>



	<script src="js/head.min.js"></script>
	<script type="text/javascript">
	head.js("js/jquery-1.9.1.min.js",
		"js/jquery.fancybox.js",
		"js/bootstrap-scrollspy.js",
		"js/init.js",
		"js/jquery.lazyload.min.js", function() {
						// all done
						init()
					});
	</script>
	<?php include_once("analyticstracking.php") ?>
</body>
</html>