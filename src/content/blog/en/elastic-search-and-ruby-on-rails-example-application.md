---
title: Elastic search and Ruby on Rails example application
pubDate: 2014-06-26
snippet: a small demo App to show how to use elastic search with Ruby on Rails
tags:
  - search
  - elastic-search
published: true
category: Code sharing
---
I realised I didn't have any project I could show when people where asking if I knew how to use elastic search. I have just done a really small application to show what this tool has to offer.


Elastic Search is a powerfull solution for full text search that will propbably the best fit if your application needs to have good search capabilities.

If you need to implement a search page, this is fast, scalable and really easy to use and integrate with a Rails application.

If you need advises or you want to implement this kind of solution, you can send me an email and we will discuss your needs.



the code is on github: https://github.com/loicginoux/example_elastic_search

the demo application is visible on heroku: http://es-example.herokuapp.com/

It includes the following features:

*  Full text search

*  when searching, ajax updates of the list of products and highlights of the search key.

*  faceted filtering

*  pagination


And here are 2 screenshots of the app:

the defaut view:

![screenshot 1](/images/blog/elastic-search-app/products_catalog.png)

View after searching for the word "camera":

![screenshot 2](/images/blog/elastic-search-app/products_catalog_2.png)


NB: This little application is just a demo, I didn't tested as I probably won't come back to it and don't need to maintain the code in the future.
