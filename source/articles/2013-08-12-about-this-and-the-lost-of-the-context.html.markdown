---
layout: post
title: "About this and the lost of the context "
date: 2013-08-12
comments: true
tags: javascript
---




As a javascript developer you will at one time or another find the common problem where you have something undefined because the _this_ refers to the global window object.

<!-- more -->

Let see an example:


``` javascript
    var MyObject = {
     name: "Loic",
     hello: function() {
     alert("Hello I'm " %2B this.name);
     },
     getName: function () {
      return this.name;
     }
    }

    MyObject.hello();       // alert "Hello I'm Loic"

    var hello = MyObject.hello;
    hello();   // alert "Hello I'm "

    setTimeout(MyObject.hello, 1000); // alert "Hello I'm "
```

So what we see is that the _this.name_ is not known in the last two run. Why that?
This is because _this_ refers to the context the function is run on, it is determined at the time the function is executed.

So when you call a function using _MyObject.hello()_, ‘this’ is the MyObject object.

``` javascript
MyObject.hello();       // this is directly the MyObject

```

But you loose the context of the original object if you take a reference to the function.


``` javascript
    var hello = MyObject.hello;
    hello();   // hello is a reference to the function so it will loose the original context

    setTimeout(MyObject.hello, 1000); // inside the setTimout function, the function is a reference variable too

```

The solution is to manually tell javascript that we want the _this_ to refer to a particular object.


``` javascript

    var hello = MyObject.hello;
    hello.apply(MyObject);   // "apply" run the function at his left with the this referring to his first argument.

    setTimeout(MyObject.hello.bind(MyObject), 1000); // "bind" returns the function but during execution, it will apply the context of the object passed in his first parameter.

```



I know about this and I usually correct the error directly when it occurs, but I had to write it down to be able to explain it and put it in words. Now that _this_ is explained, I shouldn’t wait for the error to come up and fix but see directly when I will loose the context and fix it straight away.


