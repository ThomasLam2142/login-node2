
const{readFile} = require('fs').promises;

async function readDatabase() {
    try {
        const fileContent = await readFile('./database.json', 'utf-8');
        const data = JSON.parse(fileContent);
        console.log(data.password);
    } catch (error) {
        console.error('Error reading or parsing the JSON file:', error);
    }
}

readDatabase()

