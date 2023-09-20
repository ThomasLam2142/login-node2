console.log("database.js running")

const{readFile} = require('fs').promises;

async function readDatabase() {
    console.log("Attempt to read database");
    try {
        const fileContent = await readFile('./database.json', 'utf-8');
        const data = JSON.parse(fileContent);
        return data; // Return the data
    } catch (error) {
        console.error('Error reading or parsing the JSON file:', error);
        throw error; // Re-throw the error to handle it in the calling code
    }
}

module.exports = {
    readDatabase, // Export the function
};

