// varaibles are binding between identifier and a value

var a = 10;
// so here a is identifier and 10 is value so a is bound to value 10
//js does not think like this that a is box containing 10

//var keyword is redeclared in same scope and re initialize also
{ var a = 10;
console.log(a);//10
var a =20; 
a = 40;
console.log(a);//20
}
let y =10;
function abc(){
    const x = 10;
    console.log(x);
    console.log(y);
}
// console.log(x);//refrence error 
console.log(y);

// 2. let varaibale can reinitialize but can not redecalare

let c = 11;
 c = 23;
//  let c =12; we cant re declared it will give error
console.log(c);


// const cant redcaled and cant reinitialize also 
const a = 90; 
// used when we want to make sure that value is not changed
// const a = 10; we cant redeclare it will give error
// const a = 20; we cant reinitialize it will give error




