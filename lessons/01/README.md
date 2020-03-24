# Lesson 1

## What is programming?

For the purposes of this course I think it's worth differentiating between Computer Science, Programming and Software Engineering. While these are all part of doing any of the jobs, they're three different but overlapping skillsets/disciplines.

#### Computer Science
Computer science is the academic study of computation. For the most part we won't need to worry about this. The advantage of doing programming in 2020 is that we have 50 years of wicked smart people doing the hard computer science that we get to build on top of without worrying too much about the stuff underneath. Computer science is super interesting but you don't really need much of it to build computer programs. (This is a slightly controversial opinion but hey I'm the teacher). I'll generally try to avoid anything that digs into deeper computer science knowledge but I'm happy to elaborate on stuff if it comes up.

#### Programming
Programming is the process of actually constructing a computer program. If computer science is the study of the material science that lets you make bricks, programming is the bricklaying. This is the bit where you sit down at a computer and think and type and come out with a program that does something.

 This will be the major focus of the course, because while you can learn about the other things in isolation you can't actually make a program and do stuff without doing any programming.

#### Software Engineering
Software engineering is about *how* you do the programming. It's concerned with the tools, skills, and techniques used to build well made programs, and work with other people. While programming's neccesary to do the work, software engineering is the bit you get paid for. (In fact there's whole jobs that are basically software engineering without doing any programming). We'll also cover a fair amount of this stuff along the way.

### What *is* programming?

The work of programming is a loop of:
* finding problems
* breaking down those problems into smaller problems
* working out how to solve those smaller problems
* solving the problems by feeding instructions to a "computer"
* repeat

It doesn't really matter what the "computer" here is, it's still the same process. 

For example, writing a knitting pattern is programming where the "computer" is a person with some needles and yarn.The problem you might be trying to solve is "how do you make a hat?", which can be broken down into "what sort of shapes make up a hat?", and then into "what stitches need to be made to make those shapes? in what order?". And when those questions are solved a list of instructions is written which are processed by a "computer", and the problem is solved.

## Intro to Javascript

For learning programming in this course we're going to be using Javascript.

### Why?
* Javascript is probably the most accessible programming language right now
* (by some measures) the most popular language at the moment
* runs on any web browser and computer you're likely to use.
* It's easy to get started running programs without fussing with installing anything new.
* has a lot of useful magic computer science under the hood that gets a lot of the annoying stuff out of the way so you can focus on just writing programs.
* Huge amount of free code out there in Javascript that you can use to get stuff done.
* I know it pretty well

### How do I run Javascript?

Most web browsers have an easy way to run javascript built in (because Javascript runs on almost all webpages).

In chrome you can go to the main menu -> more tools -> developer tools, and then click the tab marked "Console". There should be a little text box starting with a `>`. You can type in this to run javascript.

Give it a go!
Try typing `2 + 2` in there, it should look like this after you've pressed enter.

`> 2 + 2
<- 4`

Congratulations you just ran some Javascript.

### Data
