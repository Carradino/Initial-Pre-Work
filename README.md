# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser sends a request to find out the ip address of the techtonic website. Once the ip address of techtonic is returned it sends a request to the techtonic servers asking for the html, css and javascript files to render the website for the user.

## From start to finish, how does data reach you to be rendered in the browser?
A request is sent to the servers that host the files of the website. Those files
are returned from the servers and rendered in the requesters web browser. The
data is sent to and from the network of computers in bytes. HTML code is loaded
first, then the external links are loaded from top to bottom.

## What code is rendered in the browser?
HTML code is rendered in the browser.

## What is the server-side code’s main function?
The server-side code's main function is to "serve" or provide the information
that the client is requesting. Server-side code is backend development which
includes languages such as PHP and Python.

## What is the client-side code’s main function?
The client-side code's main function is to request information from the server.
Client-side coding is front-end development, it is basically what the user
sees. It includes languages like HTML, CSS and JavaScript.

## What is runtime?
Runtime is when a program is being executed.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
There are two instances of the client-side assets. The original files are on the
website servers but once a client requests HTML, CSS, JS and image files, the
browser creates a local copy in the cache.

## How many instances of the server-side code are available at any given time?
There can be two instances of server-side code, static and dynamic. Static
is what is returned once a client requests a website. If changes are made by
the client such as site preference settings, a dynamic site is created.

## How many instances of the databases connected to the server application are created?
There can be multiple instances of a database connected to a server.
Production is the live website. Pre-production is an instance
 used to test features before committing them to production.
Development is an instance used to create new features and functions. Also,
"logging in" as a member of a database creates an instance.
