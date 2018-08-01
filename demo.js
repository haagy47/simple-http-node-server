const http = require('http');
const fs = require('fs');
const port = 3000;

// Handles HTTP requests.
const requestHandler = (request, response) => {
  //response.write('Hello World!');
  fs.writeFile('hello-world.txt', 'Hello to this great world.', 'utf8', (err) => {
    if (err) throw err;
    console.log('success')
  });
  response.end(`Handling a request on port ${port}`)
};

// Create a server and pass in the requestHandler function
const server = http.createServer(requestHandler);

// Start the server listening on part 3000
server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});
