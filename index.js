//const {readFile,readFileSync} = require('fs');

//const txt = readFileSync('./hello.txt','utf-8');

/*
readFile('./hello.txt','utf-8',(err,txt)=>{
    console.log(txt);
});
*/

//console.log('do this ASAP');

const{readFile} = require('fs').promises;

async function hello(){
    const file = await readFile('./hello.txt','utf-8');
    console.log(file);
}

async function hello2(){
    const file = await readFile('./database.json','utf-8');
    console.log(file);
}

hello();
hello2();

