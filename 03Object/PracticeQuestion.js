
//  todo new concept  question 01
const a = {};
const b = { key: "b" };
const c = { key: "c" };
console.log(a);
console.log(b);
console.log(c);

a[b] = 123;
console.log(a[b]); //? whaT IS the op of this 
console.log(a);
a[c] = 456;
// a[b] == a = {b : 123}  //{ '[object Object]': 123 }
//? means u are using b object as key in a object so u get '[object object]' : 123;
//? 

//* Looks like you are using object b as a key.
//* But JavaScript cannot store object as key in a normal object.
//* So JS converts it to string.
//* It silently runs:
//* String(b)
//* For any normal object:
//* String(b) → "[object Object]"

console.log(a[c]);

console.log(a);
//? { '[object Object]': 456 } getting op just like this why because { '[object Object]' this
// ? this key is already exist so value just replaced with 123 to 456 thats it

// todo --> what is an object.stringfy() and json.parse(

const user2 = {
  name: "nanda",
  age: 24,
};
const strObj = JSON.stringify(user2);
console.log(strObj);
console.log(JSON.parse(strObj));

console.log("-------------------------------------");

console.log(..."nanda");



