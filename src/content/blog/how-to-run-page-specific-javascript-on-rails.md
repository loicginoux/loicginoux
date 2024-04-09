---
title: How to run page specific javascript on Rails
snippet: How I manage to run and compartiment my javascript code based on models and actions
pubDate: 2013-05-18
published: true
tags:
  - javascript
  - rails
category: Tips
---
In Ruby on Rails, all your javascript is available everywhere, but we always want to run some javascript only on certain pages.  This is how I manage to run and compartiment my javascript code based on models and actions.

<!-- more -->

First you need to add to your html layout a way for javascript to detect which model and which action the page is rendering:

``` html app/views/layouts/application.html.erb
<body data-controller="<%= controller_name %>" data-action="<%= action_name %>">
```
Then in your main javascript file:

``` javascript app/assets/application.js
//= require jquery
//= require jquery_ujs
//= require ./init
//= require ./utils
// = require_tree ./ressources
```

We define the code that will be run on every page at initialisation:

``` javascript app/assets/init.js

// init your global app object

// you need to add your controllers here to not throw an error

// when calling the exec function from the utils.js file

window.YOUR_APP = {
  common: {},
  users: {},
  another_controller:{}
};

YOUR_APP.common.init = function() {

  console.log("this will run on every page");

}
```

I usually add a UTIL object where I put my utilities functions, for this example, there are two functions that interest us "init" and "exec":

``` javascript app/assets/utils.js
var window.UTIL = {
  // execute the corresponding function
  exec: function (controller, action) {
   var ns = window.YOUR_APP;
   if (!action){
     var action = "init";
   }
   if ( controller != "" && ns[controller] && typeof ns[controller][action] == "function" ){
     ns[controller][action]();
   }
  },

  // run on every page load to init the javascript calls
  init: function(){
    var body = document.body;
    var controller = body.getAttribute("data-controller");
    var action = body.getAttribute("data-action")
    UTIL.exec("common") //run common.init
    UTIL.exec(controller) //run controller.init
    UTIL.exec(controller, action) //run controller.action
  }
};

//run the init function
$( document ).ready(UTIL.init)

```
And then inside my directory app/assets/ressources I have one js file per model with for example for the user model something like that:

``` javascript app/assets/ressources/user.js
YOUR_APP.users = {
  init: function() { alert("this code run on all pages for user's action"); },
  index: function() { alert("this code run only on the user index page"); },
  view: function() { alert("this code run only on the user view page"); },
  edit: function() { alert("this code run only on the user edit page"); },
  show: function() { alert("this code run only on the user show page"); }
};
```
I hope this will be useful for those who are looking for a solution. It's not the best but it works and gets things separated.
