---
title: Introduction to Node.js Streams
date: 2015-01-29
tags: Node.js, Javascript, Unix, Pipes, Sockets, Streams, Data
---

This is a light-hearted introduction to using Streams in Node.js. I will walk
you though building a stream capable of piping your terminal output to a
browser. It is meant to be fun, and hopefully you can learn a few things along
the way.

Streams are a powerful abstraction in computing. They offer a way of easily
directing the I/O of one process to another. By using multiple processes, you
gain parallelism managed by the operating system's scheduler without having
worry about protecting shared memory. As a result, you can utilize multiple CPU
cores quite easily.

## Example of using pipes

_Feel free to skip this section if you are comfortable with the underlying
mechanism of Unix pipes_

One common example of a stream is piping the output (`STDOUT`) of one process
into the input (`STDIN`) of another:

```bash
$ while sleep 1; do echo 'Hi world!'; done | sed s/Hi/Hello/g
#=> Hello world!
#=> Hello world!
#=> Hello world!
...
```

You can think of this as a stream of data coming from the left side of the pipe
( | ) to the right side. The way this works under the hood in Linux is the
`pipe` system call. A 'pseudofile' is created, and file descriptors are returned
for both writing to and reading from said 'pseudofile.' In the above example,
`echo` writes to the shared file, and `sed` reads from it. The beauty of this
setup is that `sed` is not blocking `echo`, and this mechanism becomes a simple
method for parallel processing of data.

## Creating a stream in Node.js

Node.js offers an [API](http://nodejs.org/api/stream.html) for dealing with
streams. I am going to go over a simple example of creating a stream which will
allow us to pipe the output of a terminal (`STDOUT`) into the browser. What we
need to create is a 'Writable' stream. The reason for this is that we are
expecting to receive input from `STDIN`, meaning that we will be needing the
input will need to be actually _written_ to our stream.

The way to do this is to create a `Writable()` object and implement the
`_write()` function. In doing so, we gain all of the behavior of the built-in
streams in Node.js, such as as `process.stdout`, with our own custom write
behavior.

```javascript
var Writable = require("stream").Writable;
var BrowserStream = new Writable();

BrowserStream._write = function(chunk, enc, next) {
  // This just logs the output to our console for now, we change this later.
  console.log(chunk.toString(enc || 'utf8'));
  next();
};
```

## Piping STDOUT to a browser

Now, instead of simply logging the output to the console, let's actually send
the data to the browser. Sockets are very similar to pipes in the sense that
they allow for interprocess-communication (IPC) by creating byte streams. The
main difference is that sockets will turn the data into packets, and send the
packets over the network, while pipes can just use shared files over the local
file-system.

To do this, we will use [socket.io](http://socket.io) to set up a socket between
out Node app and the client.

#### On the server we now have this:

```javascript
// server.js

"use strict";

var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var Writable = require("stream").Writable;
var BrowserStream = new Writable();

// Create a server for the client to connect to
server.listen(7777);

BrowserStream._write = function(chunk, enc, next) {
  var string = chunk.toString("utf8");

  // Instead of logging to the console, write the data to a socket
  io.sockets.emit("news", string);
  next();
};

// We now can pipe stdin into BrowserStream
process.stdin.pipe(BrowserStream);

// We also pipe stdin to stdout so we can see it in the terminal
process.stdin.pipe(process.stdout);
```

#### On the client side, we have this:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <script src="https://cdn.socket.io/socket.io-1.3.2.js"></script>

    <script>
      var socket = io.connect("http://localhost:7777");

      socket.on("news", function(data) {
        console.log(data);
      });
    </script>

  </head>
</html>
```

Now we can reap the fruits of our labor. In your terminal, run these commands:
1. `npm install -g socket.io express`
2. Open `index.html` in a browser, and open up Developer Tools in the browser
3. Now, we can pipe all of our bash output to the browser:
  - `bash | node server.js`

All of your `STDOUT` should now be showing up in your browser console. For a
more complete example, have a look at the one I made. It's essentially the same,
[but it styles all of the output to make it look more
terminal-like.](https://github.com/sikuli/domout/tree/ianks/examples/console)

## Conclusion

Although this example is a bit contrived, there are better uses for this type of
concept. For example, you can create a simple command line tool which pipes in
JSON, and the filters it however you see fit. Pipelines simple, parallel, and
robust mechanism for manipulating data.

## More Resources

1. [Stream Handbook](https://github.com/substack/stream-handbook)
2. [Stream API](http://nodejs.org/api/stream.html)
