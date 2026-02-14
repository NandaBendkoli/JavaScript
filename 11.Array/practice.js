const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 34];

const result = arr.map(function (num) {
    return num * 2;

});
console.log(result);

// convert numbers in to binary 

const binarynum = arr.map(function (num) {
    return num.toString(2);
});
console.log(binarynum);

// get even number 
const even = arr.filter(function (num) {
    if (num % 2 === 0) {
        return num;
    }
})
console.log(even);

// get number greater than 10 

const greaterThan10 = arr.filter(function (num) {
    if (num > 10) {
        return num;
    }
});
console.log(greaterThan10);

// sum of array 

const sum = arr.reduce(function (acc, curr) {
    return acc = acc + curr;
}, 0);
console.log(sum);


// squre all numbers

const squre = arr.map(function (num) {
    return num ** 2;
});
console.log(squre);


// get names from objects
const obj = [
    { name: "A", age: 20 },
    { name: "B", age: 21 },
    { name: "C", age: 22 },
    { name: "D", age: 23 },
    { name: "E", age: 24 }
];
// console.log(obj);
// console.log(obj[0].name);

const names = obj.map(function (name) {
    return name.name;
});
console.log(names);

// filter adults more than 22
const adult = obj.filter(function (adult) {
    if (adult.age >= 22) {
        return adult;
    }
});
console.log(adult);
const item =
    [
        { item: "pen", price: 10 },
        { item: "book", price: 50 }
    ];

// calculate the total 

const totalPrice = item.reduce(function (acc, curr) {
    return acc = curr.price + acc;
}, 0)

console.log(totalPrice);
// ------------------------------------------------------------------------------------------------
// // [1,2,3,4,5,6]

// Step1: even numbers
// Step2: multiply by 10

// Result:
// [20,40,60]

const result2 = arr.filter(function (num) {
    if (num % 2 === 0) {
        return num;
    }

}).map(function (nums) {
    return nums * 10;
})
console.log("result is ", result2);

const fruits = ["apple", "banana", "apple", "orange", "banana"];

// count the fruits 

// appleCount = 0;
// bcount = 0;
// ocount = 0;

// for(let i =0;i<=fruits.length;i++){
//     if(fruits[i] === "apple"){
//         appleCount ++;
//     }
//     else if(fruits[i] === "banana"){
//         bcount ++;
//     }else if( fruits[i] === "orange"){
//         ocount ++;
//     }

// }
// console.log(appleCount);
// console.log(bcount);
// console.log(ocount);

const result3 = fruits.reduce(function (acc, curr) {

    if (curr === "apple") {
        acc.aCount++;
    }
    if (curr === "banana") {
        acc.aCount++;
    }
    if (curr === "orange") {
        acc.aCount++;
    }
    return acc;


}, aCount = 0, bCount = 0, oCount = 0)

console.log(aCount);
console.log(bCount);
console.log(oCount);


// same using reduce function

// find max number 
const max = [10, 25, 5, 40, 15];

for (let i = 0; i < max.length; i++) {
    let maxNum = max[i];
    if (max[i] > maxNum) {
        return maxNum;
    }
    
}







