// create web server
const express = require('express');
const app = express();
const port = 3000;  

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// Create web server
// using Express.js to handle requests and responses
// and listen on port 3000 for incoming connections
// This server responds with "Hello World!" when accessed at the root URL
// The server is set up to log a message when it starts successfully    
// This function is used to demonstrate a member function in the context of skills
// It returns a string indicating that it is a member function for skills
function skillsMember() {
    return "This is a member function for skills.";
}
// This function is used to perform a simple calculation
// It takes two variables as input and returns their sum
function calculateNumbers(var1, var2) {
    return var1 + var2;
}
// This function is used to perform a simple calculation
// It takes two variables as input and returns their sum
// It is a basic example of how to handle numbers in JavaScript