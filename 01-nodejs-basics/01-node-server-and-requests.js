//! CREATING NODE SERVER AND HANDLING REQUESTS

const http = require("http");
// We have imported http object from nodejs HTTP core module

// function requestListner(request, response) {
//   console.log(req);
// }

// const server = http.createServer((request, response) => {
//   console.log(request); //   process.exit();
// });
// server.listen(3000);

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});
//* This method will create and return a server for us
//* createServer() takes a callback function "requestListners"as an argument.
//* This callback function will be called whenever a request is made to the server.
//* Request Object: This object contains all the information about the request made to the server.
//* Response Object: This object contains all the information about the response that we are sending back to the client.
//* server.listen() method will start the server and listen to the incoming requests.
//* This method takes a port number as an argument.
//* This method will return a server object.
//* We can store this server object in a variable and use it to perform various operations on the server.
//* We can also chain the listen() method with createServer() method.

server.listen(3000);
