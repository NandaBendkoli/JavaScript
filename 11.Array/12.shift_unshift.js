// shift and unshift
const fruits = ["apple","banana","mango","orange","grapes"];
for(let i = 0;i<fruits.length;i++){
    console.log(i,":",fruits[i]);
}
console.log("length is ",fruits.length);
fruits.unshift("kiwi");

console.log("after unshift");
for(let i = 0;i<fruits.length;i++){
    console.log(i,":",fruits[i]);
}

// shift
console.log("shift");
const fruits1 = ["apple","banana","mango","orange","grapes"];
for(let i = 0;i<fruits1.length;i++){
    console.log(i,":",fruits1[i]);
}
console.log("length is ",fruits1.length);
fruits1.shift("apple")

console.log("after unshift");
for(let i = 0;i<fruits1.length;i++){
    console.log(i,":",fruits1[i]);
}

