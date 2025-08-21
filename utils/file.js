const fs = require('fs');
const filepath = './database.json';

async function readData(){
    try{
        const data = await fs.readFile(filepath, "utf-8");
        return JSON.parse(data);

    }catch (error){
        console.error("Error reading file", error);
    }
}

async function writeData(){
    try{
        await fs.writeFile(filepath, JSON.srtingify(data, ));
        
    }catch (error){
        console.error("Error reading file", error);
    }
}

module.exports = {
    readData,
    writeData
}