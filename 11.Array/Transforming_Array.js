/*******************************************************
 ARRAY METHODS NOTES: map(), filter(), reduce()
 These are functional array methods in JavaScript.
 They loop over arrays and return new results.
 They do NOT modify the original array.
********************************************************/


/* =====================================================
   1) MAP METHOD
   Definition:
   map() is used to transform each element of an array.
   It returns a NEW array with transformed values.
===================================================== */

const nums = [1, 2, 3, 4, 5];

// map loops over each element
// and returns a new array after transformation
const newNums = nums.map(function (num) {
    return num * 2; // multiply each number by 2
});

console.log("Map result:", newNums); // [2,4,6,8,10]

/*
Key Points:
- runs for every element
- returns new array
- original array remains unchanged
- array length stays same
*/


/* =====================================================
   Convert numbers into binary using map()
===================================================== */

const binary = nums.map(function (num) {
    return num.toString(2); // convert decimal to binary
});

console.log("Binary values:", binary); 
// ['1','10','11','100','101']


/* =====================================================
   2) FILTER METHOD
   Definition:
   filter() selects elements based on condition.
   It returns a NEW array containing only elements
   that pass the condition.
===================================================== */

const filterArr = [1, 2, 3, 4, 5, 10];

// filter even numbers
const filterEven = filterArr.filter(function (num) {
    return num % 2 === 0; // condition
});

console.log("Filtered even numbers:", filterEven); // [2,4,10]

/*
Key Points:
- returns new array
- removes unwanted elements
- length may be smaller
- original array unchanged
*/


/* =====================================================
   3) REDUCE METHOD
   Definition:
   reduce() reduces an array into a single value
   (sum, total, object, string, etc.)
===================================================== */

const reduce_Array = [1, 2, 3, 4, 5];

// acc = accumulator (stores result)
// curr = current element
// 0 = initial value of accumulator

const total = reduce_Array.reduce(function (acc, curr) {
    return acc + curr; // add each number
}, 0);

console.log("Total sum using reduce:", total); // 15

/*
Step-by-step reduce working:
acc = 0, curr = 1 → 1
acc = 1, curr = 2 → 3
acc = 3, curr = 3 → 6
acc = 6, curr = 4 → 10
acc = 10, curr = 5 → 15
*/


/* =====================================================
   DIFFERENCE BETWEEN map, filter, reduce
===================================================== */

/*
map():
- transforms data
- returns new array
- same length

filter():
- selects data based on condition
- returns new array
- length can be smaller

reduce():
- converts array into single value
- returns number/string/object
*/


/* =====================================================
   REAL WORLD EXAMPLE
===================================================== */

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 17 },
    { name: "C", age: 25 }
];

// 1. filter adults
const adults = users.filter(user => user.age >= 18);

// 2. get names
const names = adults.map(user => user.name);

// 3. calculate total age
const totalAge = users.reduce((acc, user) => acc + user.age, 0);

console.log("Adults:", adults);
console.log("Names:", names);
console.log("Total age:", totalAge);


/* =====================================================
   INTERVIEW ONE-LINE DEFINITIONS
===================================================== */

/*
map()    → transforms each element
filter() → selects elements based on condition
reduce() → converts array into a single value
*/
