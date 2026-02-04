//type coercions in js 
// there are two types of type coercions
// 1. implicit type coercions --> this happend automataically behind the scene 
// 2. explicit type coercions --> this is done by developer

console.log(1 + "hello");// concatinate always 

console.log(1 - "1")//0
// same for - / *

// undefined --> nan

console.log( undefined  + 1); // nan

console.log( null + 1); //1 null 0 

let a= null;//0
let b ;//nan
console.log("a is ",a);
console.log("b is ",b);
console.log(a + 2);
console.log( b + 2);


// ** Falsy values (ONLY THESE 6):
// false
// 0
// -0
// "" 
// null
// undefined
// NaN

console.log(undefined - 1);

// loose equality operator == it try to convert the value only

console.log(5 == "5"); //true
console.log(0 == false); //true
console.log(0 == ""); //true
console.log(0 == null); //false


// strict equality operator ===

console.log(5 === "5"); //false
console.log(0 === false); //false
console.log(0 === ""); //false
console.log(0 === null); //false




