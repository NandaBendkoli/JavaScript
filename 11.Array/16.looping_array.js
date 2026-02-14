// 1 for loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}

// for of loop

let arr2 = [1, 2, 3, 4, 5, 5, 6];

for ( val of arr2) {
    console.log(val);
}

// for each --> it it is a built in array method that runs a callback
//  function on each element of the array in order 
// it does not return anything
let colors = ["red", "green", "blue"]; 

colors.forEach(function(color){
    console.log(color);
});

