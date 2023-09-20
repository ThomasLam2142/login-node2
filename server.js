const express = require('express');
const app = express();

const { readDatabase } = require('./database.js'); // Import the readDatabase function

// Serve static files (e.g., HTML, CSS, JavaScript) from a public directory.
app.use(express.static('public'));

// Define a route to serve the HTML file.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    
    try {
      const data = await readDatabase();
      console.log('Data from the database:', data);
    } catch (error) {
      console.error('Error reading the database:', error);
    }
  });