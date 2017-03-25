---
layout: post
title: "Pros and cons of Test Driven Development"
date: 2013-06-07
comments: true
categories: [testing,'programming processes']
---

I won't tell you again that testing your app is important, you know that, right? I was asked this question recently and I think it's worth sharing it here.

<!-- more -->

# PROS: #
1. It is first a **safety net**. All the existing code is tested. As human programmers we make mistakes and when we change or improve a code, TDD will allow us to spot our bugs quicker.
2. It can serve as **documentation for new developers**, it helps understanding what is the purpose of each piece of code. but it's definitely not enough as documentation (see cons 1)!
3. It helps to improve and **debug legacy code**. You never remember what this piece of code you wrote a year ago (or even a month ago) was meant to do.
4. It seems paradoxical because you write more code at the end but the **overall cost of the app is reduced**. You will gain time on the long-term for debugging and finding what's wrong with your code. (see related cons 2)
5. By writing tests first, you need to focus and think first on the code you are going to implement. It allows for more decoupled, clean and simple code (KISS principle). It pushes to **write good code design**.


# CONS: #
1. Unit tests are a kind of documentation but there are **not a substitute for a documentation**, this will sure help understanding the code but it is not enough. It is neither a substitute for integration testing.
2. Even if the overall cost is reduced, you will have **more up front costs** because you will need to write more code and unit tests before getting something ready.
3. Writing good maintainable and reusable tests is **not easy and requires practice**. You have to know what to test, when not to test something. For example if you write unit test at a level too low, future small changes on your code will break your test and you will end up spending too much time on rewriting your tests.
4. It is a good practice and a first step for a reliable application but this is **not enough as an overall testing tool**. Unit testing (and also integration testing) are only test and cases that the programmer thought about when writing it. In real conditions, with users who have different support, versions, configurations, there will always be a bug that you didn't think about. So **beta testing is also important** to do to try minimise the amount of bugs on your app.