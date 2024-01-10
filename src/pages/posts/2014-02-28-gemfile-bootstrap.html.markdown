---
layout: ../../layouts/BlogLayout.astro
title: "Gemfile bootstrap"
date: 2014-02-28
description: 'test test'
tags: ["rails"]
published: true
lang: "en"
---


I will just keep here a list of gems I like to use in my Ruby on Rails projects.

There are so many good gems out there I usually forget some of them when starting a project. These are only here as a reminder for myself. All the configuration needs to be done and versions need adjustment if necessary.
I won't use all of them in all project but more picking the one I need from this list.
So here it is with quick commenet explaining each of them:

``` ruby
source 'https://rubygems.org'

# change it to your current version
#ruby '1.9.3'
#gem 'rails', '3.2.16'

#authentification system
gem 'authlogic'

# OAuth 2.0 Provider, for secruing your API
gem 'doorkeeper'

# SMS
gem 'twilio-ruby'

# Authorization Gem
gem "cancan"

# API views
gem 'rabl'

# Rails 4 strong parameters
gem 'strong_parameters'

# your controllers inherit all restful actions so you just have to focus on what is important.
inherited_resources

# Oauth2 client
gem 'omniauth'
# facebook API client
gem 'fb_graph'
# Oauth2 facebook client
gem 'omniauth-facebook'
# Oauth2 twitter client
gem 'omniauth-twitter'

# static pages
gem "high_voltage"

#file management
gem "paperclip", "~> 3.1.3"

# file storage amazon s3
gem 'aws-s3'
gem 'aws-sdk'

# easy rest request
gem "rest-client"

#pagination
gem 'will_paginate', '~> 3.0'

#passing rails variable to js
gem 'gon'

# synh assets to S3
gem "asset_sync"

# admin panel
gem 'activeadmin'

# transaltion gem
gem 'phrase'

#better sql logging
gem "hirb"

# better active record print
gem "awesome_print"

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer'

  gem 'uglifier', '>= 1.0.3'

  # Speeds up your Rails 3 assets:precompile
  gem 'turbo-sprockets-rails3'
end

group :development do
  # get the chrome DevTool RailsPanem
  gem 'meta_request'
  # guard to automate background tasks on file changes
  # see railscast episode 264
  # gem 'rb-fsevent', :require => false if RUBY_PLATFORM =~ /darwin/i
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-livereload'
end

group :test, :darwin do
  gem 'rb-fsevent'
end

group :development, :test do
  gem 'zeus'
end

group :test do
  # Acceptance test framework
  gem 'capybara', :git =>  "git://github.com/jnicklas/capybara.git"
  # Behaviour driven developement
  gem 'cucumber-rails', :require => false
  # ensure a clean state for testing
  gem 'database_cleaner'
  # easy factories
  gem 'factory_girl_rails'
  gem 'shoulda'
  # helper for creating lorem ipsum
  gem "lorem-ipsum"

end


group :production, :staging do
  # postgresql
  gem 'pg'
  # Use unicorn as the app server
  gem 'unicorn'
end

group :production, :staging, :development do


  # scheduled cron jobs
  gem 'whenever', :require => false

  # Application Performance Monitoring
  gem 'newrelic_rpm'

  # memcache
  gem 'dalli'

  # better fragment caching
  gem 'cache_digests'
end

```

I will edit this post if I feel the need in the future.