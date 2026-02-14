// slice and splice method
// slice method -- it return the shallow copy of part of array
//does not modify the aaray and the last index not included

let nums = [10,20,30,40];
let sliced = nums.slice(1,3);
console.log(sliced);
console.log(nums);  


// splice method--> it modify the array and return the removed element 
// splice(startIndex,deleteCount,element1,element2,element3)
let nums2 = [10,20,30,40];
let spliced = nums2.splice(1,2,90,91);
console.log(spliced);
console.log(nums2);


// [ 20, 30 ]
// [ 10, 20, 30, 40 ]
// [ 20, 30 ]
// [ 10, 90, 91, 40 ] 