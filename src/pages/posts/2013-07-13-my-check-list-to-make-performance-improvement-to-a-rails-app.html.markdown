---
layout: ../../layouts/BlogLayout.astro
title: "My check-list to make performance improvement to a Rails app"
date: 2013-07-13
description: 'test test'
tags: ["performance", rails"]
published: true
lang: "en"
---

In a recent project, I had to make the app faster. I could work on both the front end and the back-end. The is an unordered list but you should first know where is your bottleneck in your app with the help of tools like the webkit debug tool, pageSpeed or an app like New Relic. Learning how to find the bottleneck on an app is not the matter of this post. I just list here few things not to forget if you want your app to be a bit optimized.
Let’s see that.

<!-- more -->

## Back-end ##

* use of a **content delivery network** to serve your static files. I am confortable with the config Amazon S3 %2B Amazon Cloudfront. This will help relieving your server from serving this never changing css, image and js files. these gem will help:&nbsp;[asset_sync][1], [aws-s3][2], [aws-sdk][3]

* use of [cache][4]. Rails makes it really easy to **cache** things. The [Dalli][5] gem is really easy to use. Depending on your app, you can cache at different levels, Page caching, Action caching, fragment caching or request caching. Take a look at what page, action, request is used a lot and don’t change too often and cache it.

* use of **database indexes**. There are really important for your database complicated queries. [this][6] will explain everything.

* Add a **cache control header** or expires. This will help cache assets in your user’s browser.

* **avoid redirect**

* do you use &nbsp;[eager loading][7]? in Rails be careful with the **N+1 queries problem**. it’s a really easy one fix.

* when querying the db, only **select the attributes you need**. You don’t need to load the whole user table if you just display their username for example.

* **increase concurrency** on your app. I use the server [Unicorn][8] for that, and it integrates well with Heroku.

* Use of **background tasks** for things like sending emails, reporting, etc… This is also useful in the case where you delete an item that will automatically delete all his associated objects. If you have thousands or millions of them, you can’t let the user wait for the task to delete all objects. Delete the first object and delete associated objects in background. &nbsp;[sidekick][9] or [delayed_job][10] will work for that.

* **NoSQL database** and solutions like mongoDB will scale out more easily but have some downside. check out [this article][11]

* Create some [partition tables][12] when a db table can potentially contains a lot of rows.

* sometimes it’s better to create a redundant attribute or table. For example in a db with a Post table and a Comment table, if you have millions of comments and you need to count the number of comments for an article, you would better have a nb_comments column on the Article table rather that counting it every time. Another example with the same tables Posts/Comments. If you need to display a page for an article that list the number of &nbsp;comments grouped &nbsp;per day. You would better create a third table StatCommentsArticle that would contain a article_id, a date and a nb_comments. These techniques will increase speed but you need to be carefull with data consistency when creating/modifying/deleting a comment.

If you want to see some of these techniques in action, check the small application I made. You can find it [here][13] on my github account.

## Front-end ##

* **minify** javascript, css, and html to save some bandwidth.

* **minimize http requests**. To do that, first concatenate your js files and serve only one js file and do the same for css. Then for images used in css background, make them [base64][14]

* serve **gzip compressed** javascript and css files. You probably need to configure both Rails and your server.

* serve **right size images**. You don’t need to serve a 1280 * 960 image for a 340 * 260 img tag.

* specify the width and height attribute on the img tag so that the browser doesn’t resize it.

* keep your html code as simple as possible.

* make your css rules as simple as possible.

* use **Css sprites** when possible.

* don’t use css @import

* lazy load images. The images that are not in the viewport (directly visible) can be loaded when scrolled down. see [this plugin][15]

* stylesheet on top of html page and javascript at bottom.

* when using third-party javascript library, use a CDN.

* **defer** or load javascript files asynchronously. [more][16]

* use **ajax** when possible. if you just need to update a small part of the page, why reloading the whole page?

* iframes are bad! There are just blocking the page onload.

* **minimize DOM access** in javascript. try improving the way you manipulate the DOM and see if you can group your modification in fewer &nbsp;ones.

* **optimize your images**. I discovered recently a really good tool for that. [Adapter][17]. You can also include this in your automation tool like grunt with [imagemin][18]

If you’ve applied all of these points in your app, you should see quite an improvement. You will then be happy like when you were young and doing some tuning to your scooter to make it goes at what.. 100-110Km/h (in the down slope and with wind behind you). Where you not happy at this moment?!


   [1]: https://github.com/rumblelabs/asset_sync
   [2]: https://github.com/marcel/aws-s3
   [3]: https://github.com/aws
   [4]: http://guides.rubyonrails.org/caching_with_rails.html
   [5]: https://github.com/mperham/dalli
   [6]: http://www.percona.com/resources/technical-presentations/mysql-indexing-percona-mysql-university-buenos-aires-argentina
   [7]: http://railscasts.com/episodes/22-eager-loading
   [8]: https://devcenter.heroku.com/articles/rails-unicorn
   [9]: http://mperham.github.io/sidekiq/
   [10]: https://github.com/collectiveidea/delayed_job
   [11]: http://blog.sphereinc.com/2012/03/pros-and-cons-of-using-nosql-solutions/
   [12]: http://www.postgresql.org/docs/current/static/ddl-partitioning.html
   [13]: https://github.com/loicginoux/rails_performance_test
   [14]: http://www.base64-image.de/
   [15]: http://www.appelsiini.net/projects/lazyload
   [16]: http://www.sitepoint.com/non-blocking-async-defer/
   [17]: http://www.macroplant.com/adapter/
   [18]: https://github.com/gruntjs/grunt-contrib-imagemin
