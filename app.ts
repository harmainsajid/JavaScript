"use strict";
// // JAVASCRIPT BY ZEESHAN HANIF

// // DISPLAYING OUTPUT
// // ALERT
// alert("Hello World");

// // CONSOLE.LOG
// console.log("Hello World");
// console.log(23+4);

// // DOCUMENT.WRITE
// document.write("Hello World" + "</br>");
// document.write(2+8);

// // VARIABLES
// let age: number = 23;
// //    OR
// let age1: undefined; //declaration
// age = 23; //initialization

// let nationality: string = "Pakistani";
// let isfeepaid: string = "true";
// let country: string = "Pakistan"; //old

// console.log(nationality);
// console.log(isfeepaid);
// console.log(country);

// country = "Canada"; //new (let can be updated)
// console.log(country);

// // DATA TYPES (PREMITIVE)
// STRING
// var name1: string = "Mark";
// var message: string = "It's alright"; //can use single and double quotes

// console.log(name);
// console.log(message);

// name1 = "Jhon";
// console.log(name1);

// // NUMBER
// let weight = 150.5;
// let newWeight = weight + 20;
// console.log(newWeight);

// let originalNumber = 12 + 5;
// console.log(originalNumber);

// let a = 9;
// let b = 6;
// let c = a + b;
// console.log(c);

// // BOOLEAN
// let isFeePaid = true;
// console.log(isFeePaid);

// let examPassed = false;
// console.log(examPassed);

// // UNDEFINED
// //undefined is a type itself (undefined is default value assign by JS)
// let name; //letiable is declared but value is not assigned
// let age; //undefined

// let name = "Mark"; //type is string
// name = undefined; //type changed to undefined
// console.log(name)

// // NULL
// //null is an object
// let city = null; //it is not an empty string
// console.log(city);

// let nationality = "Canada";
// console.log(nationality);
// nationality = null; //value can assign later
// console.log(nationality);

// // JAVASCRIPT DATA TYPES ARE DYNAMIC
// let value = "Mark"; // It’s String
// value = 25; // Now changed to Number
// value = true; // Now changed to Boolean

// // TYPEOF OPERATOR
// let a = "Mark";
// let b = 25;
// let c = true;

// console.log(typeof a); //we can check type of letiable through typeof operator
// console.log(typeof b);
// console.log(typeof c);

// // STATEMENTS
// let a = 4;// Statement 1
// let b = 2;// Statement 2
// let c = 0;// Statement 3
// c = a + b;// Statement 4
// alert(a);// Statement 4
// console.log(c);// Statement 4

// // END OF STAEMENT
// // WITH SEMICOLON
// let a = 4; //semicolon separate statement

// i = 3; j = 5; k = i + j;//semicolon separate statement
// alert(i);console.log(k);

// // WITHOUT SEMICOLON
// let a = 5// New line will end statement
// alert(a)
// console.log(a)

// // let a = 5 let b = 4// Error, Will Not work
// // alert(a)console.log(a)// Error, Will not work

// // EXPRESSIONS
// a + b;// expression (right side of =)
// 4 / 2;// expression
// let a = 5;
// a * 4;// expression
// "John" + " " + "Doe"; // expression

// // LEGAL AND ILLEGAL
// // LEGAL NAMES
// let hello = 56;
// let _xyz = 44;
// let $work = 90;
// let user2 = 56;
// let i_info = 99;
// let my$work = 77;

// // ILLEGAL NAMES
// // let 2user = 12;// Can't start with number
// // let my user = 23; // Can't contains space
// // let hello#world = 34;
// // let my-info = 44;
// // let my?info = 45;
// // let my*info = 45;Reserved Keywords

// // COMMENTS
// // SINGLE LINE COMMENT
// // Declare and initialize letiable
// let a = 6; //This is comment
// //This below code will not execute
// //let b = 8;

// // MULTI LINE COMMENTS
// /*
// This code declared and initialize
// letiable a and show on screen
// */
// let a = 6;
// alert(a);

// // RESERVED KEYWORDS
// // EX
// // let let = 2; (reserved keywords cannot be used as letiable names)
// // let for =4;

// // CASE SENSATIVE
// let rose = "Hello";
// let Rose = "Hello";
// alert(rose);
// alert(Rose);
// // alert(ROSE); // Error

// // CAMEL CASE
// let userResponse
// let userResponseTime
// let userResponseTimeLimit
// let response

// // pascal notation
// let UserResponse; //pascal notation use in class

// // ARITHMETIC OPERATORS
// let a = 5;
// let b = 3;
// let c = a + b; // Addition, result 8
// let d = a - b; // Subtraction, result 2
// let e = a * b; // Multiplication, result 15
// let f = a / b; // Division, result 1.66
// let g = a % b; // Modulus, result 2
// let h = a ** b; // Exponentiation, result 125

// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

// // ASSIGNMENT OPERATOR
// let a = 5; // equals = is assignment operator
// a = a + 2; // Assign 7 in letiable a
// // OR
// let a = 5;
// a+=2; // Assign 7 in letiable a
// console.log(a);

// // BODMAS
// let x = 5 + 2 * 3 - 2 / 2; // result 10
// console.log(x);

// let y = 5 + 2 * (3 - 2) / 2; // result 6
// console.log(y);

// let a = 3 + 5 * 2;// result 13
// let b = 8 / 2 - 1;// result 3
// let c = 3 % 2 + 4 - 1;// result 4
// let d = a + 5 * c - b / (3 + b);// result 32.5

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// // INCREMENT AND DECREMENT OPERATOR
// // ++ increment
// // -- decrement
// // ++ pre-increment (++a)
// // post-increment ++ (a++)
// // -- pre-decrement  (--a)
// // post-decrement -- (a--)

// //PRE-INCREMENT AND DECREMENT
// // Preﬁx Increment and Decrement
// let age = 12;
// ++age;
// alert(age); //Result 13
// --age;
// alert(age); //Result 12

// //POST-INCREMENT AND DECREMENT
// // Postﬁx Increment and Decrement
// let age = 12;
// age++;
// alert(age); //Result 13, same as prefix
// age--;
// alert(age); //Result 12, same as postfix

// // Preﬁx Increment
// let age = 12;
// let newAge = ++age;
// console.log(age);//Result 13
// console.log(newAge);//Result 13

// // Postﬁx Increment
// let age = 12;
// let newAge = age++;
// console.log(age);//Result 13
// console.log(newAge);//Result 12 , see the difference

// // Preﬁx Decrement
// let age = 12;
// let newAge = --age;
// console.log(age);//Result 11
// console.log(newAge);//Result 11

// // Postﬁx Decrement
// let age = 12;
// let newAge = age--;
// console.log(age);//Result 11
// console.log(newAge);//Result 12 , see the difference

// // Example 1
// let a = 4;
// let b = 2;
// let c = a++ - b; // first value of a placed here
// // which is 4 then increase 1 in a so will become 5
// alert(a); // 5
// alert(b); // 2
// alert(c); // 2

// // Example 2
// let a = 4;
// let b = 2;
// let c = ++a + b; // first value of a increased so
// // will become 5 then value of a will be placed here, 5
// alert(a);// 5
// alert(b);// 2
// alert(c);// 7

// // Example 3
// let a = 4;
// let b = 3;
// let c = a++ + --b - --a;
// alert(a); // 4
// alert(b); // 2
// alert(c); // 2

// // Example 4
// let a = 4;
// let b = 3;
// let c = ++a + b++ - a + --b;
// alert(a); // 5
// alert(b); // 3
// alert(c); // 6

// // STRING CONCATENATION
// // Concatenating string
// let firstName = "Abraham";
// let lastName = "aLincoln";
// //concatenate firstName, space character and lastName
// let fullName = firstName + " " + lastName;
// alert(fullName);

// // Concatenating strings and numbers
// let a = "6" + 2; // "62"
// let b = 3 + "6"; // "36"
// let c = "Hello " + 2; // "Hello 2"
// let d = 2 + "Hello "; // "2 Hello"
// let e = "Hello "+ 3 + 4; // "Hello 34"
// let f = 3 + 4 + "Hello "; // "7Hello"
// let g = "Hello "+ (3 + 4); // "Hello 7"

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// //PROMPT AND PARSING STRING
// // Prompt() / window.prompt()
// let question = "What is your name?";
// let defaultAnswer = "John";
// let name = prompt(question, defaultAnswer);
// console.log("Name = "+ name);

// let question = "What is your age?";
// let age = prompt(question);// Assuming input 12
// let newAge = age + 5; // It will concatenate
// console.log("New Age = "+ newAge); //result 125

// //Convert string to integer
// let value1 = "3";
// let value2 = "5";
// let value3 = value1+value2;
// console.log(value3);// result, 35

// //Assuming we will provide value 5 in input
// let age = prompt("What is your age");
// let num = 4;
// let sum = age + num;
// console.log(sum); // result, 54

// let age = prompt("What is your age?"); //input 5
// let num = 4;
// let sum = parseInt(age) + num;
// console.log(sum); //result 9

// let age = prompt("What is your age");//input abc
// let num = 4;
// let sum = parseInt(age) + num;
// console.log(sum); // result, NaN

// //Convert string to decimal
// let age = prompt("What is your age?"); //input 5.5
// let num =4;
// let sum =parseFloat(age) + num;
// console.log(sum); // result 9.5

// //Convert string to number
// let age = prompt("What is your age");//input 5.5
// let num = 4;
// let sum = Number(age) + num;
// console.log(sum); // result, 9.5

// let a = Number(true);//returns 1
// let b = Number(false);//returns 0
// let c = Number("999");//returns 999
// let d = Number("999 888");//returns NAN
// let e = Number("Hello");//returns NAN

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // COMPARISION OPERATOR
// let a = 3;
// console.log(a == 6); //false
// console.log(a === 6); //false
// console.log(a != 6); //true
// console.log(a !== 6); //true
// console.log(a > 6); //false
// console.log(a < 6); //true
// console.log(a >= 6); //false
// console.log(a <= 6); //true

// let a = 3;
// console.log(a == 3); //return true
// console.log(a == "3"); //return true
// console.log(a == 6); //return false
// console.log(a === 3); //return true
// console.log(a === "3"); //return false
// console.log(a === 6); //return false

// // LOGICAL OPERATORS
// // Short-circuit Logical Operators
// // && (AND)
// // || (OR)
// // ! (NOT)

// // && Logical Operator
// alert( true && true ); // true
// alert( false && true ); // false
// alert( true && false ); // false
// alert( false && false ); // false

// let a = 60;
// let b = a > 50 && a < 70;
// alert(b); // return true
// let c = 80;
// let d = c > 50 && c < 70;
// alert(d); // return false

// // || Logical Operator
// alert(true || true); // true
// alert(false || true); // true
// alert(true || false); // true
// alert(false || false); // false

// let a = 60;
// let b = a < 50 || a > 70;
// alert(b); // return false
// let c = 80;
// let d = c < 50 || c > 70;
// alert(d); // return true

// // ! Logical Operator
// alert(!true); // false
// alert(!false); // true
// let a = 60;
// let b = !(a < 50);
// alert(b); // return true
// let c = 80;
// let d = !(c > 50);
// alert(d); // return false

// alert( !1 ); // false
// alert( !0); // true

// !! Double NOT
// alert( !!1 ); // true
// alert( !!0); // true

// // Why they are called short-circuit
// //returns false, evaluation stops at first value
// let a = false && true && false;
// //returns false, evaluation stops at last value
// let b = true && true && false;
// //returns false, evaluation stops at second value
// let c = true && false && true;

// // Why they are called short-circuit
// //returns true, evaluation stops at second value
// let d = false || true || false;
// //returns true, evaluation stops at first value
// let e = true || true || false;
// //returns true, evaluation stops at last value
// let f = false || false || true;

// CONDITIONS
// Conditions: if
// if (condition) {
//   //  block of code to be executed if the condition is true
// }

// let age = 12;
// if (age > 9) {
//   console.log("Age = " + age);
// }

// Condition: else
// if (condition) {
//     //block of code to be executed if the condition is true
// } else {
//     //block of code to be executed if the condition is false
// }

// let age = 15;
// if (age > 18) {
//   console.log("Qualifies for driving");
// } else {
//   console.log("Does not qualify for driving");
// }

// Conditions: else if
// if (condition1) {
// //block of code to be executed if condition1 is true
// } else if (condition2) {
// //block of code to be executed if the condition1 is false and condition2 is true
// } else {
// //block of code to be executed if the condition1 is false and condition2 is false
// }

// let score = 80;
// if (score > 80) {
//   console.log("Grade A");
// } else if (score > 70) {
//   console.log("Grade B");
// } else if (score > 60) {
//   console.log("Grade C");
// } else {
//   console.log("Failed");
// }

// // Conditions: nested if
// if (condition1) {
//   //Code to be executed if the condition1 is true
//   if (condition1) {
//     //Code to be executed if the condition2 is true
//   }
// }

// let score = 80;
// if (score > 80) {
//   console.log("Grade A");
//   if (score > 90) {
//     console.log("Reward $100");
//   }
// }

// // Set of Conditions
// let score:number = 70;
// if(score > 80 && score <= 100){
// console.log("Grade A");
// }
// else if (score > 70 && score <= 80){
// console.log("Grade B");
// }
// else if (score > 60 && score <= 70){
// console.log("Grade C");
// } else{
//     console.log("failed");
// }

// let input: string = "M";
// if (
//   input == "A" ||
//   input == "E" ||
//   input == "I" ||
//   input == "O" ||
//   input == "U"
// ) {
//   console.log("It's a Vowel");
// } else {
//   console.log("It's a consonants");
// }

//Value conversion to boolean
// 1. Following values will be converted to false
// a. null
// b. NaN
// c. 0  // Zero
// d. “” or ‘’ or `` Empty String single or double quotes
// e. undeﬁned
// 2. All else will be converted to true

// 1. Following values will be converted to true
// a. {} // Object
// b. “AnyText” // String with any text
// c. 1 // Any number other than zero

// // Number to Boolean
// let age: number = 45; // 45 will be converted to true, if will be executed
// if (age) {
//   console.log("In If Age = " + age);
// } else {
//   console.log("In else Age = " + age);
// }

// // null to Boolean
// let Name: null = null; //null will be converted to false, else will be executed
// if (Name) {
//   console.log("In If name = " + Name);
// } else {
//   console.log("In else name = " + Name);
// }

// // String to Boolean
// let greeting = "Hello"; //Hello will be converted to true, if will be executed
// if(greeting){
// console.log("In If name = "+greeting);
// }
// else{
// console.log("In else name = "+greeting);
// }

// let emptyString: string = ""; //it will be converted to false, else will be executed
// if (emptyString) {
//   console.log("In If name = " + emptyString);
// } else {
//   console.log("In else name = " + emptyString);
// }

// // undeﬁned to Boolean
// let Undefined: undefined; // Default value is undefined
// //it will be converted to false, else will be executed
// if (Undefined) {
//   console.log("In If name = " + Undefined);
// } else {
//   console.log("In else name = " + Undefined);
// }

// Value conversion to boolean &&
// let a1 = 'Cat' && 'Dog'; // t && t returns "Dog"
// let a2 = false && 'Cat'; // f && t returns false
// let a3 = 'Cat' && false; // t && f returns false
// let a4 =   '' && false; // f && f returns ""
// let a5 = false && ''; // f && f returns false
// let a6 = 0 && 1; // f && t returns 0
// let a7 = 1 && false; // t && f returns false
// let a8 = true && {}; // t && t returns {}
// let a9 = false && {}; // f && t returns false
// let a10 = 'Cat' && (3==4); // t && f returns false
// let a11 = 'Cat' && 0; // t && f returns 0
// let a12 = undefined && 'Cat'; // f && t returns undefined

// Value conversion to boolean ||
// let a1 = "Cat" || "Dog"; // t || t returns "Cat"
// let a2 = false || "Cat"; // f || t returns "Cat"
// let a3 = "Cat" || false; // t || f returns "Cat"
// let a4 = "" || false; // f || f returns false
// let a5 = false || ""; // f || f returns ""
// let a6 = 0 || 1; // f || t returns 1
// let a7 = 1 || false; // t || f returns 1
// let a8 = true || {}; // t || t returns true
// let a9 = false || {}; // f || t returns {}
// let a10 = "Cat" || (3 == 4); // t || f returns "Cat"
// let a11 = "Cat" || 0; // t || f returns "Cat"
// let a12 = undefined || "Cat"; // f || t returns "Cat"

// For Loop
// for (initialization; condition; expression) {
//   // code to be executed
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// // Output: 0;
// // 1;
// // 2;

// for (let i = 5; i <= 8; i++) {
//   console.log(i);
// }
// // Output: 5;
// // 6;
// // 7;
// // 8;

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// // Inﬁnite Loop
// for (;;) {
//   console.log("Hello");
// }

// For Loop
// 1. Printing table of 3 will require hard coded statements
// console.log("3 x 1 = 3");
// console.log("3 x 2 = 6");
// console.log("3 x 3 = 9");
// console.log("3 x 4 = 12");
// console.log("3 x 5 = 15");

// // 1. With for loop it will be dynamic
// let num = 3;
// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + num * i);
// }
// // Output:
// // 3x1=3
// // …...
// // 3 x 10 = 30

// let num: number = Number(prompt("Please number here"));
// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + num * i);
// }

// // Break
// for (let i = 0; i < 8; i++) {
//   if (i == 4) {
//     break;
//   }
//   console.log("I = " + i);
// }
// Output: I = 0;
// I = 1;
// I = 2;
// I = 3;

// // Continue;
// for (let i = 0; i < 8; i++) {
//   if (i == 4) {
//     continue;
//   }
//   console.log("I = " + i);
// }
// Output: I = 0;
// I = 1;
// I = 2;
// I = 3;
// I = 5;
// I = 6;
// I = 7;

// Nested Loops
// 1. If a loop exists inside the body of another loop, it's called nested loop.
// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 2; j++) {
//     console.log("I = " + i + " J = " + j);
//   }
// }
// Output:
// I = 0 J = 0
// I = 0 J = 1
// I = 1 J = 0
// I = 1 J = 1
// I = 2 J = 0
// I = 2 J = 1

// // TASK # 1 (PRIME NUMBER DECTECTOR)
// METHOD 1
// let num: number = Number(prompt("Please number here"));
// var isPrime: boolean = true;
// for (var i: number = 2; i < num; i++) {
//   let result = num % i;
//   if (result == 0) {
//     console.log("Number is not prime = " + num + " I " + i);
//     isPrime = false;
//     break;
//   }
// }
// if(isPrime){

//     console.log("Number is prime = " + num + " I " + i)
// }

// METHOD 2
// var num: number = Number(prompt("Please number here"));
// for (var i = 2; i <= num; i++) {
//   let result = num % i;
//   if (result == 0) {
//     console.log("Number is not prime = " + num);
//     break;
//   } else {
//     console.log("Number is prime = " + num);
//   }
//   break;
// }

// TASK # 2 (TRIANGLE THROUGH LOOP)

// Arrays
// let mondayTemprature: number = 23; //it is difficult and confusing method to store each value in new variable
// let tuesdayTemprature: number = 12;
// let wednesdayTemprature: number = 35;
// let thursdayTemprature: number = 30;
// let fridayTemprature: number = 27;
// let saturdayTemprature: number = 19;
// let sundayTemprature: number = 22;

// let temperatures: number[] = [34, 12, 27, 65, 34, 28, 19];

// // Creating an Arrays

// // 1. Creating an Array using array literal
// let foods: string[] = ["Pizza", "Burger", "Snacks"];
// // 2. Creating an Array using new Keyword
// foods2:string[] = new Array("Pizza", "Burger", "Snacks");

// let arr1: string[] = ["Hello", "World", "Bye"];
// let arr2: number[] = [29, 38, 16, 22];
// let arr3: boolean[] = [true, false, true, false, false];
// let arr4: number[] = [23.2, 45.8, 98.12];
// let arr5: { name: string }[] = [{ name: "John" }, { name: "Jason" }];
// let arr6 = [74, "Hello", true, { name: "John" }];

// // Accessing Array Elements
// let foods: string[] = ["Pizza", "Burger", "Snacks"];
// foods[0]; // Pizza
// foods[1]; // Burger
// foods[2]; // Snacks

// let foods: string[] = ["Pizza", "Burger", "Snacks"];
// let a = foods[0]; // Pizza
// let b = foods[1]; // Burger
// let c = foods[2]; // Snacks
// alert(a); // Pizza
// alert(foods[2]); // Snacks

// Accessing full Array
// let foods: string[] = ["Pizza", "Burger", "Snacks"];
// console.log(foods); // Pizza, Burger, Snacks

// Accessing Index that does not exists
// let foods: string[] = ["Pizza", "Burger", "Snacks"];
// console.log(foods[2]); // Snacks
// console.log(foods[3]); // undefined
// console.log(foods[8]); // undefined

// Add/Update Element using index
// let foods: string[] = [];
// foods[0] = "Pizza";
// foods[1] = "Burger"
// foods[2] = "Snacks";
// console.log(foods[0]); //Pizza
// console.log(foods[2]); //Snacks

// let foods: string[] = ["Pizza", "Burger", "Snacks"];
// console.log(foods[1]);
// foods[1] = "Sandwich";
// console.log(foods[1]);
// foods[3] = "French Fries";
// console.log(foods[3]);

// Length property
// let foods: string[] = ["Pizza", "Burger", "Snacks"];
// console.log(foods.length); // 3
// let arr: string[] = [];
// console.log(arr.length); // 0

// Push function
// let foods: string[] = [];
// foods.push("Pizza");
// foods.push("Burger");
// foods.push("Snacks");

// let foods: string[] = [];
// foods.push("Pizza");
// foods.push("Burger");
// foods.push("Snacks");
// alert(foods[0]); // Pizza
// alert(foods[1]); // Burger
// alert(foods[2]); // Snacks

// Push function -- Multiple input
// let foods: string[] = [];
// foods.push("Pizza");
// foods.push("Burger", "Snacks"); // Will add in sequence
// foods.push("Sandwich");
// alert(foods[0]); // Pizza
// alert(foods[1]); // Burger
// alert(foods[2]); // Snacks
// alert(foods[3]); // Sandwich

// let foods = [];
// foods.push(prompt("Enter first food item"));
// foods.push(prompt("Enter second food item"));
// foods.push(prompt("Enter third food item"));
// console.log(foods);
// console.log(foods[1]);

// Random Access
// let foods: string[] = ["Pizza", "Burger", "Snacks"];
// console.log(foods[1]); // Burger
// foods[1] = "Sandwich"; // Updating existing element
// console.log(foods[1]); // Sandwich

// STACK (LIFO)
// Stack (Last in First out)
// let foods: string[] = [];
// foods.push("Pizza");
// foods.push("Burger");
// foods.push("Snacks");
// console.log(foods);
// console.log("Length " + foods.length); // Length 3
// let a1: string | undefined = foods.pop(); // Remove Snacks from array
// let a2: string | undefined = foods.pop(); // Remove Burger from array
// console.log(foods);
// console.log("Length " + foods.length); // Length 1

// QUEUE (FIFO)
// Queue (First in First out)
// let foods: string[] = [];
// foods.push("Pizza");
// foods.push("Burger");
// foods.push("Snacks");
// console.log("Length " + foods.length); // Length 3
// console.log(foods.shift()); // Remove Pizza from array
// console.log(foods.shift()); // Remove Burger from array
// console.log("Length " + foods.length); // Length 1

// Unshift function
// let foods: string[] = [];
// foods.push("Pizza");
// foods.push("Burger");
// foods.push("Snacks");
// console.log("Length " + foods.length);
// console.log(foods[0]);
// foods.unshift("Sandwhich");
// console.log(foods[0]);
// console.log(foods[1]);

// Iterating array with Loops
// let foods: string[] = ["Pizza", "Burger", "Juice"];
// for (let i = 0; i < foods.length; i++) {
//   console.log(foods[i]);
// }

// Through for loops array can be changed or update
// let arr: number[] = [2, 4, 6, 8, 10];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2;
// }

// for (let j = 0; j < arr.length; j++) {
//   console.log(arr[j]);
// }

// let arr: number[] = [];
// for (let i = 0; i < 5; i++) {
//   arr[i] = i * 6;
// }

// for (let j = 0; j < arr.length; j++) {
//   console.log(arr[j]);
// }

// TASK
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr[i] = prompt("Enter number here!");
// }
// console.log(arr);

// let myinputarr = [];
// let size = 5; // Array size

// for (let a = 0; a < size; a++) {
//   myinputarr[a] = prompt("Enter Array Element " + (a + 1));
// }

// //user enter array
// console.log(myinputarr);
