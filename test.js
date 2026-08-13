const fs = require("fs");

let passed = true;
console.log("Registration Test\n");



// TC 01
if(fs.existsSync("index.html"))
{
    console.log("TC 01 : index.html exist : pass");
}
else{
    console.log("TC 01 : index.html exist :fail");
    passed = false;
}

//TC 02
if(fs.existsSync("style.css"))
{
    console.log("TC 02 : style.css exist : psss");
}
else{
    console.log("TC 02 : style.css exist :fail");
    passed = false;
}

//TC 03
if(fs.existsSync("script.js"))
{
    console.log("TC 03 : script.js exist : psss");
}
else{
    console.log("TC 03 : script.js exist :fail");
    passed = false;
}

//Tc 04
if(fs.existsSync("students.json"))
{
    console.log("TC 04 : students.json exist : psss");
}
else{
    console.log("TC 04 : students.json exist :fail");
    passed = false;
}
//READ JSON
const students = JSON.parse(fs.readFileSync("students.json"));
const student = students[0];

//TC 05
if(student.name.trim()!==""){
    console.log("TC-05:Name Validation : Pass");
}
else{
    console.log("TC-05:Name Validation : Fail");
    passed=false;
}

//TC 06
if(student.email.includes("@")){
    console.log("TC-06: Email Validation:Pass");
}
else{
    console.log("TC-06:Email Validation:Fail");
    passed=false;
}

