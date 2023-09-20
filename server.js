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

// Move the database operation to a separate function
async function startServer() {
  try {
    const data = await readDatabase();
    console.log('Data from the database:', data);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error reading the database:', error);
  }
}

// Start the server after the database operation is complete
startServer();
