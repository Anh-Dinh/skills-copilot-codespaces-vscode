// Create web server
// Load express module
const express = require('express');
// Load body-parser module
const bodyParser = require('body-parser');
// Create express object
const app = express();

// Load data from comments.json
const comments = require('./comments.json');

// Create a function to get comments
app.get('/comments', (req, res) => {
  // Send comments data to the client
  res.json(comments);
});

// Create a function to add comments
app.post('/comments', bodyParser.json(), (req, res) => {
  // Get the comment data from the request
  const comment = req.body;
  // Add the comment to the data
  comments.push(comment);
  // Send the response to the client
  res.json(comment);
});

// Create a function to delete comments
app.delete('/comments/:id', (req, res) => {
  // Get the comment id from the request
  const id = Number(req.params.id);
  // Find the comment by id
  const comment = comments.find(comment => comment.id === id);
  // Delete the comment from the data
  comments.splice(comments.indexOf(comment), 1);
  // Send the response to the client
  res.json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// End of Path: comment.js