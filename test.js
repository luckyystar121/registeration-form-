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

//TC 07
if(student.mobile.length===10){
 console.log("TC-07: mobile Validation:Pass");
}
else{
    console.log("TC-07:mobile Validation:Fail");
    passed=false;
}

//TC-08
if(student.branch!==""){
 console.log("TC-08: branch Validation:Pass");
}
else{
    console.log("TC-08:branch Validation:Fail");
    passed=false;
}

//TC-09
if(student.password.length>=6){
 console.log("TC-09: Password Validation:Pass");
}
else{
    console.log("TC-09: Password Validation:Fail");
    passed=false;
}

//TC 10
if(student.mobile.length===10){
 console.log("TC-07: mobile Validation:Pass");
}
else{
    console.log("TC-07:mobile Validation:Fail");
    passed=false;
}
