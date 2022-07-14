/*
KeyPoints :
Node JS won't run in the browser , instead it runs as a standalone(like jvm).


//-----------------------------------------------------------------------------------
//                                 1. Home
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
//                                 2. Introduction
//-----------------------------------------------------------------------------------


1. Node is neither a programming language nor a framework.
2. Node is a runtime environment for executing Javascript code.

//-----------------------------------------------------------------------------------
//                                 3. Environment Setup
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
//                                 4. First Application
//-----------------------------------------------------------------------------------

In main.js

var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

Command : node main.js

//-----------------------------------------------------------------------------------
//                                 5. Callbacks Concept
//-----------------------------------------------------------------------------------

In NodeJS, require() is a built-in function to include external modules that exist in separate files.
require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object.

Blocking code example :

In Input.txt

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

-----------------------------------------------

In main.js

var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

cmd : node main.js

The above example shows that the program blocks until it reads
the file and then only it proceeds to end the program.
----------------------------------------------------------------

Non-blocking code example : 

In main.js

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");

The above example shows that the program does not wait for file reading and
proceeds to print "Program Ended" and at the same time, the program without 
blocking continues reading the file

//-----------------------------------------------------------------------------------
//                                 6. Event Loop
//-----------------------------------------------------------------------------------

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");



*/