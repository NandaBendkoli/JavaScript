// typeof 
// used the check the type of the variable

let x;
console.log(typeof x);//undefined

let y = null;
console.log(typeof y);//object

let z = true;
console.log(typeof z);//boolean

let a = 10;
console.log(typeof a);//number

let b = "hello";
console.log(typeof b);//string

let c = [1,2,3];
console.log(typeof c);//object

let d = {name:"Nanda"};
console.log(typeof d);//object

let e = function(){};
console.log(typeof e);//function

let f = new Date();
console.log(typeof f);//object


console.log(typeof undefined);// undefined

//type of arraow function
const func = () => {};

console.log( typeof func ); // function

console.log(typeof new Object());//object

console.log(typeof notDeclaredVar)//undefined

console.log(typeof typeof 20);//string
// why this because operator precedence typeof operator evaluted from right to left

console.log(typeof NaN);//number

console.log(typeof Infinity);//number

console.log( typeof Symbol("id"));//symbol
console.log(typeof BigInt(10));//bigint

console.log(typeof (1+"1")); //"11" string

console.log(typeof (1 - "2")); //1-2 = -1 number 

console.log(typeof (true + false)); // 1 + 0 = 1 number

console.log(typeof (null + 1)); // 0 + 1 //number 

console.log( typeof (undefined + 1) ); // 0 + 1 = 1 number 

// -------------real trap ---------------

console.log(typeof class Test {});// function 
//why this Class is just syntactic sugar over constructor functions.
// js see this like class Test {} --> 
// function Test() {
  // constructor
// }
// so thats why babe..
console.log(typeof (() => ({}))); // function

console.log(typeof function () {} ); // function


// Not everything in JavaScript is an object. Primitive values like numbers,
//  strings, and booleans are not objects. Functions, however, 
//  are special objects that are callable, which is why typeof returns 'function'.”

// but functions are objects na
// “Yes, functions are objects, but they are a special kind of object that can be invoked.
//  That’s why JavaScript gives them a separate typeof result.”

// Why not just return object
// Because JavaScript distinguishes callable objects from normal objects,
// so typeof returns 'function' to identify them clearly.

// “Functions are callable objects, so JavaScript treats them differently.”














