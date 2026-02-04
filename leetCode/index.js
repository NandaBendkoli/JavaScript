//  1. Create two variables: one storing your full name and another storing your favorite hobby. Print a sentence in the format:
//    "My name is <your name> and <your hobby>".

let fullName="Nanda Bendkoli";
let hobby = "nothing life hi zand h!";

console.log(`My name is ${fullName} and hooby is ${hobby} `);

//  2. Perform the arithmetic calculation `45 * 2 - 10` and print the final result.

console.log((45*2)-10);

//  3. Write a program that retrieves and prints the current year using JavaScript’s `Date` object.

console.log(new Date().getFullYear());

//  4. Store your first name and last name in two different variables, then print your full name in a single output.

let firtsName = "Nanda";
let lastName = "Bendkoli";
console.log(`${firtsName} ${lastName}`);

//  5. Create a variable with an initial value. Print its value, update the value, and print the updated value again.
let initial = 0;
console.log("Initial",initial);
initial = 10;
console.log("updated",initial);

//  6. Print a custom error message using `console.error()`.
console.error("This is a custom error messages");

// 7. Store a number in a variable and print the square of that number.
let a = 2;
console.log(2**2);

//  8. Create a boolean variable and print its value.
let b = true;
console.log(b);

//  9. Store your age in a variable and print whether your age is greater than 18.

let age = 24;
// let age2 =10;
if(age > 18){
    console.log(`your age is gretter than 18 congrats!`)
} else{
    console.log("Nahh you are not")
}

// 10. Divide `100` by `0` and print the result. Observe what JavaScript returns.
console.log(100/0); //infinity yrr

// 11. Create a variable using `let` and print its value.
let something = "go to hell";
console.log(something);

// 12. Declare a constant named `PI` with the value `3.14` and print it.
let pi = 3.14;
console.log(pi);

// 13. Create a variable, print its value, update the value, and print the updated value again.
let c = 0;
console.log(c);
c = 10;
console.log(c);

// 14. Print the output of `typeof null` and observe what type JavaScript reports.
console.log(typeof null) //ists object and its cinsider as a bug

// 15.15. Create a variable containing a numeric value as a string (e.g., `"25"`) and print its type.
let num ="16";
console.log( typeof num); //string

// 16. Create a boolean variable and print its type using `typeof`.
let bool = true;
console.log(typeof bool);//boolean

// 17. Create three variables: a string, a number, and a boolean. Print all of them together in a formatted output.

const numb = 12;
const str = "string";
const bool1 = false;

// formatted output
console.log(`String: ${str}, Number: ${numb}, Boolean: ${bool1}`);

// 18. Declare a variable without assigning a value and print its type using `typeof`.
let varaiable;
console.log(varaiable);//undefined

// 19. Create a variable with the value `undefined` and print its type.
let x = undefined;
console.log(typeof x);//undefined

// 20.20. Create an array using `const`, print it, attempt to reassign the entire array (and handle the error),
//  then modify the existing array by adding a new element and print the updated array
//

const arr = [1,2,3,4,5];
console.log(arr);
try{
    arr =[12,13,14,15];
    console.log(arr);

}catch(error){
    console.error("error bhai");
}

