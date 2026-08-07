const fs = require("fs");

let passed = true;
console.log("Registration Test\n");



// TC 01
if(fs.existsSync("index.html"))
{
    console.log("TC 01 : index.html exist : psss");
}
else{
    console.log("TC 01 : index.html exist :fail");
    passed = false;
}