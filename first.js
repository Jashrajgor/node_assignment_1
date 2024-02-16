const add=10+2;
console.log("The added value is :",add);
const sub=10-2;
console.log("The subtraction value is :",sub);
console.log("\n \n")

// importing the file module that is in-built module of node.js which provide some functionality of reading a file content and writing into the file;
const fs=require("fs");
fs.readFile('something.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

// To Write the any text file with help of the node there is to method 1-> fs.weriteFile("file_name","content_to_written int the file",()=>{})=>it accepts three arguments and another is fs.createWriteStream("file_name").

fs.writeFile("created_file.txt","file is create with the help of writeFile mehtod of fs object",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File created successfully");
    }
})

