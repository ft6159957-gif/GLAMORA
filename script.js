function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
}
// 1. JavaScript Basics
console.log("Hello! This is my JavaScript Project.");


// 2. Variables & Data Types
let studentName = "Fatima";
let age = 15;
let isStudent = true;

console.log(studentName);
console.log(age);
console.log(isStudent);


// 3. Operators
let number1 = 10;
let number2 = 5;

console.log("Addition:", number1 + number2);
console.log("Subtraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);


// 4. if / else
let marks = 75;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 5. Loops
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}