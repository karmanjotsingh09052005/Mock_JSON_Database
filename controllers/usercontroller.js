const fs = require('fs');
const filepath = './database.json';
const{ readData, writeData } = require('../utils/file.js');


async function createUser(req, res){
   try{

    //read the json data from the file
     const data = await readData(filepath);
   
   //logic to autoincrement id
   const lastUser = data.users[data.users.length - 1]

   //what happens if they are no users?
   //ternary operator to work out the logic
   const nextId =laetUser ? lastUser.id + 1 : 0;

   //create a new user object
   const userUser = {
    id: nextId,
    username:req.body.username,
    firstname:req.body.first_name,
    email: req.body.email,
}

//push the data to the memory object
data.users.push(userUser);

//write the updated data back to the file
await writeData(data);

res.status(201).json("User created successfully");
   
    }catch(error){


       res.status(500).json({error: "Internal Server Error" });
   }
}

module.exports = { createUser };