// Q1

const user = "Muzammil";
let age = 27;
let occupation = "Web Developer";
let email = "abc@xyz.com";
const phoneNumber = "0900123456";
let instituteName = "Jawan Pakistan";
let education = "Bachlors";

document.write(`
  <h1>BioData</h1>
    <b>Name:</b> ${user} <br><br>
    <b>Age:</b> ${age} <br><br>
    <b>Occupation:</b> ${occupation} <br><br>
    <b>Email:</b> ${email} <br><br>
    <b>Phone Number:</b> ${phoneNumber} <br><br>
    <b>Institute Name:</b> ${instituteName} <br><br>
    <b>Education:</b> ${education}<br>
`);

// Q2

// using var

var a = "Mohammad"; 
var abc;
var a = "Faraz";  
console.log(a);
var a = "Muhammad";

// Function scope with var
function abc() {
    var a = "Faraz";  
    console.log(a);
}
abc();


// LET

// let not store in global scope

let letScope = 5;

console.log(letScope);


function letGlobal() {
  let letScope = 25;
  console.log(letScope);
  
}

// inside
letGlobal()

// outside
console.log(letScope)


let assignLet = 111

// reassign with let
assignLet = 222 

// cant redeclare

// let assignLet = 222

// console.log(letHoisted); //showing error Cannot access 'letHoisted' before initialization


let letHoisted= 222;
console.log(letHoisted);



// CONST

// const not stored in global scope
const constScope = 111;

console.log(constScope);

function constGlobal() {
  const constScope = 222;
  console.log(constScope);
}

// inside
constGlobal();

// outside
console.log(constScope);

// Cannot reassign a const variable
const constAssign = 333;
// constAssign = 444; // Error: Assignment to constant variable

// Can't redeclare
// const constAssign = 444; // Error: Identifier 'constAssign' has already been declared

// Hoisting behavior
// console.log(constHoisted); // Error: Cannot access 'constHoisted' before initialization

const constHoisted = 555;
console.log(constHoisted);
