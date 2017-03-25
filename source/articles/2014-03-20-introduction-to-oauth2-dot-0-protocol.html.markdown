---
layout: post
title: "Introduction to Oauth2.0 authorisation framework"
date: 2014-03-20
comments: true
tags: authentication, security
published: true
---


There are different protocols and frameworks for authorizing a third party application to access restricted content but the most recent and the one that most social websites use is the Oauth2.0 protocol.

This is a complete different protocol as Oauth v1 so be carefull when you are are reading about Oauth and know which version the article is talking about.
Authentication seems complicated when first approached and I just want to share here an easy summary to understand how this works.

## Use cases


You will find 2 main use cases as a developer:

\- A web application (an Oauth client) will add to its registration/login process a way to login via a more reliable service (a Oauth provider) like Facebook, Twitter, etc..

\- An application (a provider) wants to open its API so that other third party applications (clients) can make requests to its API in a secure and authenicated way and without having to store the user's credentials of the provider application.


## Roles


There are two main roles involved in this communication.

\- ** the client ** : a complete different application that need access to another external API.

\- ** the provider **: the application that provide the API or the one that you use to authenticate (think about Facebook authentication for example). It also manages which applications is allowed to access the different resources. The provider is usually the same server but it can be separated into 3 different servers: ** the resource owner ** that contains protected content or resource. This owner will allow access to resources (photos, pages, API, etc...) hosted on the ** resource server **, ** the authorisation server ** will issue the access to client applications with the approval of the resource owner.


## Protocol

![Oauth2.0 protocol](images/posts/oauth20.jpg)

(A)  The client requests authorisation from the resource owner. The authorisation request can be made directly to the resource owner (as shown), or preferably indirectly via the authorisation server as an intermediary. It is basically the process happening when an application redirects you to the Facebook site and ask you permission to do some actions with your Facebook account. The framework allows you to specify a ** scope ** which will restrict the client application acess. For example a basic facebook scope could be reading your name and getting your photo while a write scope could be the possibility to let the client publish posts on your facebook account.

 (B)  The client receives an authorisation grant, There are 4 types of grants ([described here](http://tools.ietf.org/html/rfc6749#section-1.3)). In this introduction, we see only the authorisation code. So the provider sends back to the app an authentication token representing the resource owner's authorisation.

 (C)  The client requests an access token by authenticating with the authorisation server and sending the authorisation code granted.

 (D)  The authorisation server authenticates the client and validates the authorisation grant, and if valid, issues an access token.

 (E)  The client requests the protected resource from the resource server and authenticates by presenting the access token. At this time you can access the provider API with the acess token only, there is no need to know the user's credentials.

 (F)  The resource server validates the access token, and if valid, serves the request.


## The acess token

This token is usually a hash string used to access restricted resources. It has a specific expiry period and access scope. It may be restricted to a specific user.

## The refresh token

Depending on the implementation of the provider, You will have two choices when the acess token has expired. If no refresh token has been provided, you need to restart the authentication process from the point (C). In the other hand, the provider can also send at the point (D) not only the acess token but also the refresh token. In this last case, this token is used to obtain a new access token when the current access token becomes invalid or expires.

![Oauth2.0 refreshing an acess token](images/posts/oauth_refresh_20.png)


## Oauth 2.0 is not for authentication

I just want to clarify one point which is sometimes misunderstood. This is an ** AUTHORISATION ** framework. It is not an authentication framework. It means that the provider allows you, as a client, to use some of its resources, in a controlled way. You will not be allowed to authenticate to the provider app using the acess token.

## Your job as a developer

As a developer, you will have 2 different jobs when dealing with this authorisation framework.

\- implementing the client app. You will have to register your application into the provider app. For example for the Facebook provider it's on [this page](https://developers.facebook.com/apps). It will gives you an app id and secret key. These are kept into yout application and will allow you to grant authorisation from the provider. You will probably also have to provide a callback URL, which is a the url the provider will redirect you when granted authorisation. As a RoR developers, the gem Omniauth is the best way to go.

\- implementing the provider. You will need to create the pages for managing the client applications and restrict your API to be used with acess token authenication. All this is quite easy to do in Rails with the well documented gem Doorkeeper.

I hope you see a bit more clearly into this authorisation process but you should refer to the spec for more details.

### sources
[Oauth2.0 specifications](http://tools.ietf.org/html/rfc6749)



