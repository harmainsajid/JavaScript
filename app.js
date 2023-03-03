
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
// var age = 23;
// //    OR
// var age; //declaration
// age = 23; //initialization

// var nationality = "Pakistani";
// var isfeepaid = "true";
// var country = "Pakistan"; //old

// console.log(nationality);
// console.log(isfeepaid);
// console.log(country);

// country = "Canada" //new (var can be updated)
// console.log(country);

// // DATA TYPES (PREMITIVE)
// // STRING
// var name = "Mark";
// var message ="It's alright"; //can use single and double quotes

// console.log(name);
// console.log(message);

// name = "Jhon";
// console.log(name)

// // NUMBER
// var weight = 150.5;
// var newWeight = weight + 20;
// console.log(newWeight);

// var originalNumber = 12 + 5;
// console.log(originalNumber);

// var a = 9;
// var b = 6;
// var c = a + b;
// console.log(c); 

// // BOOLEAN
// var isFeePaid = true;
// console.log(isFeePaid);

// var examPassed = false;
// console.log(examPassed);

// // UNDEFINED
// //undefined is a type itself (undefined is default value assign by JS)
// var name; //variable is declared but value is not assigned
// var age; //undefined

// var name = "Mark"; //type is string
// name = undefined; //type changed to undefined
// console.log(name)

// // NULL
// //null is an object 
// var city = null; //it is not an empty string
// console.log(city);

// var nationality = "Canada";
// console.log(nationality);
// nationality = null; //value can assign later
// console.log(nationality);

// // JAVASCRIPT DATA TYPES ARE DYNAMIC
// var value = "Mark"; // It’s String
// value = 25; // Now changed to Number
// value = true; // Now changed to Boolean

// // TYPEOF OPERATOR
// var a = "Mark";
// var b = 25;
// var c = true;

// console.log(typeof a); //we can check type of variable through typeof operator
// console.log(typeof b);
// console.log(typeof c);

// // STATEMENTS
// var a = 4;// Statement 1
// var b = 2;// Statement 2
// var c = 0;// Statement 3
// c = a + b;// Statement 4
// alert(a);// Statement 4
// console.log(c);// Statement 4

// // END OF STAEMENT
// // WITH SEMICOLON
// var a = 4; //semicolon separate statement

// i = 3; j = 5; k = i + j;//semicolon separate statement
// alert(i);console.log(k);

// // WITHOUT SEMICOLON
// var a = 5// New line will end statement
// alert(a)
// console.log(a)

// // var a = 5 var b = 4// Error, Will Not work
// // alert(a)console.log(a)// Error, Will not work

// // EXPRESSIONS
// a + b;// expression (right side of =)
// 4 / 2;// expression
// var a = 5;
// a * 4;// expression
// "John" + " " + "Doe"; // expression

// // LEGAL AND ILLEGAL
// // LEGAL NAMES
// var hello = 56;
// var _xyz = 44;
// var $work = 90;
// var user2 = 56;
// var i_info = 99;
// var my$work = 77;

// // ILLEGAL NAMES
// // var 2user = 12;// Can't start with number
// // var my user = 23; // Can't contains space
// // var hello#world = 34;
// // var my-info = 44;
// // var my?info = 45;
// // var my*info = 45;Reserved Keywords


// // COMMENTS
// // SINGLE LINE COMMENT
// // Declare and initialize variable
// var a = 6; //This is comment
// //This below code will not execute
// //var b = 8;

// // MULTI LINE COMMENTS
// /*
// This code declared and initialize
// variable a and show on screen
// */
// var a = 6;
// alert(a);

// // RESERVED KEYWORDS
// // EX
// // var var = 2; (reserved keywords cannot be used as variable names)
// // var for =4;


// // CASE SENSATIVE
// var rose = "Hello";
// var Rose = "Hello";
// alert(rose);
// alert(Rose);
// // alert(ROSE); // Error

// // CAMEL CASE
// var userResponse
// var userResponseTime
// var userResponseTimeLimit
// var response

// // pascal notation
// var UserResponse; //pascal notation use in class

// // ARITHMETIC OPERATORS
// var a = 5;
// var b = 3;
// var c = a + b; // Addition, result 8
// var d = a - b; // Subtraction, result 2
// var e = a * b; // Multiplication, result 15
// var f = a / b; // Division, result 1.66
// var g = a % b; // Modulus, result 2
// var h = a ** b; // Exponentiation, result 125

// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);


// // ASSIGNMENT OPERATOR
// var a = 5; // equals = is assignment operator
// a = a + 2; // Assign 7 in variable a
// // OR
// var a = 5;
// a+=2; // Assign 7 in variable a
// console.log(a);

// // BODMAS
// var x = 5 + 2 * 3 - 2 / 2; // result 10
// console.log(x);

// var y = 5 + 2 * (3 - 2) / 2; // result 6
// console.log(y);

// var a = 3 + 5 * 2;// result 13
// var b = 8 / 2 - 1;// result 3
// var c = 3 % 2 + 4 - 1;// result 4
// var d = a + 5 * c - b / (3 + b);// result 32.5

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
// var age = 12;
// ++age;
// alert(age); //Result 13
// --age;
// alert(age); //Result 12

// //POST-INCREMENT AND DECREMENT
// // Postﬁx Increment and Decrement
// var age = 12;
// age++;
// alert(age); //Result 13, same as prefix
// age--;
// alert(age); //Result 12, same as postfix

// // Preﬁx Increment
// var age = 12;
// var newAge = ++age;
// console.log(age);//Result 13
// console.log(newAge);//Result 13

// // Postﬁx Increment
// var age = 12;
// var newAge = age++;
// console.log(age);//Result 13
// console.log(newAge);//Result 12 , see the difference

// // Preﬁx Decrement
// var age = 12;
// var newAge = --age;
// console.log(age);//Result 11
// console.log(newAge);//Result 11

// // Postﬁx Decrement
// var age = 12;
// var newAge = age--;
// console.log(age);//Result 11
// console.log(newAge);//Result 12 , see the difference


// // Example 1
// var a = 4;
// var b = 2;
// var c = a++ - b; // first value of a placed here
// // which is 4 then increase 1 in a so will become 5
// alert(a); // 5
// alert(b); // 2
// alert(c); // 2

// // Example 2
// var a = 4;
// var b = 2;
// var c = ++a + b; // first value of a increased so
// // will become 5 then value of a will be placed here, 5
// alert(a);// 5
// alert(b);// 2
// alert(c);// 7

// // Example 3
// var a = 4;
// var b = 3;
// var c = a++ + --b - --a;
// alert(a); // 4
// alert(b); // 2
// alert(c); // 2

// // Example 4
// var a = 4;
// var b = 3;
// var c = ++a + b++ - a + --b;
// alert(a); // 5
// alert(b); // 3
// alert(c); // 6


// // STRING CONCATENATION
// // Concatenating string
// var firstName = "Abraham";
// var lastName = "aLincoln";
// //concatenate firstName, space character and lastName
// var fullName = firstName + " " + lastName;
// alert(fullName);

// // Concatenating strings and numbers
// var a = "6" + 2; // "62"
// var b = 3 + "6"; // "36"
// var c = "Hello " + 2; // "Hello 2"
// var d = 2 + "Hello "; // "2 Hello"
// var e = "Hello "+ 3 + 4; // "Hello 34"
// var f = 3 + 4 + "Hello "; // "7Hello"
// var g = "Hello "+ (3 + 4); // "Hello 7"

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
