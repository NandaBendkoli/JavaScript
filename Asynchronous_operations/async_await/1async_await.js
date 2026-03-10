// todo -->Async await
// * async  -> it will always return an promise
// * await it can only be used in async function thats it
//? even if u dont return a promise it will wrap that return value into the
// ?promise and excenute it

// !When you write:

async function example() {
  return "Hello";
}
//? It automatically returns a Promise.
//? So this: example();
//! Is actually: Promise.resolve("Hello");
// Every async function ALWAYS returns a promise.

/*
!2️⃣ What does await do?
*await:
?Pauses execution inside an async function
?Waits for a promise to resolve
?Returns the resolved value
?If promise rejects → throws error
*/

/*
!Important: It does NOT block the thread
?It pauses only inside that async function.
?JavaScript event loop still runs normally.
*/
// todo--------------------------------------------------------------------------------------
// const p = new Promise((resolve, reject) => {
//   return resolve("promise is resolved!");
// });

// async function getData() {
//   //   return "Namste";
//   return p;
// }

// const data = getData();
// console.log(data);

// data.then((res) => console.log(res));

/*
?o/p-->
!Promise {<fulfilled>: 'Namste'}[[Prototype]]:
!Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "Namste"
*/

// todo--------------- Async and await are use to handle the promises

//! before async await how we handle promises.
// const p1 = new Promise((resolve, reject) => {
//  return resolve("promise resolved!");
// });

// function  executePromise(){
//     p1.then((data)=>{
//         console.log(data);
//     })
// }
// // executePromise();

// ! after async await

// async function executePromise2(){
//     const data = await p1;
//     console.log(data);
// }
// console.log(executePromise2())

// todo--------------------------------------------------------------------------------------
//output based question..
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise is resolved!");
//   }, 1000);
// });

// function getData() {
//   p.then((data) => {
//     console.log(data);
//   });
//   console.log("Hello Nanda");
// }
// getData();

// // using async await
// async function getData2() {
//     const data = await p;
//     console.log(data);
//     console.log("Hello Nanda");
// }

// getData2();

// todo----------------------------------------------------------------------------------------
// !output based question
// ! how promise is resolved in async await and its order of execution

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 is resolved!");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 is resolved!");
  }, 1000);
});

// execute this
// async function handlePromise() {
//   console.log("Hello Nanda 01");//1 
//   const pr1 = await p1;
//   console.log(pr1);//2

//   const pr2 = await p2;
//   console.log(pr2);//2
//   console.log("Hello Nanda 02");//2
// }
// handlePromise();

//! op of this 

// Hello Nanda 01 //?this print 1st
// 1async_await.js:119 Promise 1 is resolved! //? this print 2nd after 2 sec
// 1async_await.js:122 Promise 2 is resolved! //? this print 2nd after 2 sec
// 1async_await.js:123 Hello Nanda 02 //? this print 2nd after 2 sec

// todo ----------------------------------------------------------------------------------------

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 is resolved!");
  }, 1000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 is resolved!");
  }, 1000);
});
async function handlePromise2() {
  console.log("Hello Nanda 01");//1 
  const pr1 = await p3;
  console.log(pr1);//2

  const pr2 = await p4;
  console.log(pr2);//2
  console.log("Hello Nanda 02");//2
}
handlePromise2();

//! and the op of this is
// Hello Nanda 01 //? this print 1st
// 1async_await.js:138 Promise 2 is resolved! //? this print 2nd after 1 sec
// 1async_await.js:137 Promise 1 is resolved! //? this print 3rd after 2 sec
// 1async_await.js:139 Hello Nanda 02 //? this print 4th after 2 sec 

//! now why this js engine is waiting to promise resolved
//! js engine is just appeare ans shown that its waiting for the promise to resolve but it is not blocking the thread or its not actauly wait
// !otherwise if this is caase then our page will be freeze 
// ? but of the program is not wait then what is the scene in behind the scene
//! when js engine see the await keyword it just register the callback function
// ! in the microtask queue and move to the next
// ! line of code and execute it and when promise is resolved then it will execute 
// !the callback function which is register in the microtask queue and then it 
// !will execute the next line of code which is after the await keyword


// * The async function is suspended, removed from the call stack, and the rest of the function is registered as a microtask callback.






