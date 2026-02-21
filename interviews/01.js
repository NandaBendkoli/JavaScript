console.log([] == ![]); //true

// bind() apply() and call()

function greet(age) {
  console.log(this.name + " is " + age + " years OLd");
}
const user = { name: "Nanda" };
greet.call(user, 23);

greet.apply(user, [23]);

// bind
const newFunc = greet.bind(user, 23);
newFunc();

function add (a,b){
  return a+b;
}
function add (a){
 return function add2(b){
    return a+b;
  }
}
console.log(add(2)(3));

setTimeout(()=>{
  console.log("Hello")
},2000);

// setInterval(()=>{
//   console.log("runs every 2 ms")
// },2000);


const intervalID = setInterval(()=>{
  console.log("repaear")
},1000);

setTimeout(()=>{
  clearInterval(intervalID);
  console.log("Stpped")
},5000);

const myPromise = new Promise((res,rej)=>{
  
})