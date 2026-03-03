//todo What is a Promise Combinator?
//? A Promise combinator is a built-in static method on the Promise object that lets you handle multiple promises
// ? together and produce a single resulting promise.

//todo Instead of handling promises one by one, combinators allow you to:
//* Run them in parallel
//* Control how results are collected
//* Decide when to fail or succeed

//! There are 4 main Promise combinators in JavaScript:
//! Promise.all()
//* Takes an array (or iterable) of promises
//* Runs them in parallel
//* Returns one new promise
//* Resolves when all promises resolve
//* Rejects immediately if any one promise rejects
//? Promise.all() runs multiple promises in parallel and resolves with an array of results
// ? when all succeed, but rejects immediately if any promise fails.

//! Promise.race()
//! Promise.allSettled()
//! Promise.any()

// todo ----------------------------------------------------------------------------

function orderFood() {
  return new Promise((resolve, reject) => {
    let orderId = false;
    setTimeout(() => {
      if (orderId) {
        resolve("Order Id Created!");
      } else {
        reject(new Error("Order Id Rejected!"));
      }
    }, 1000);
  });
}

function preparedFood() {
  return new Promise((resolve, reject) => {
    let prepapredFoodId = true;
    setTimeout(() => {
      if (prepapredFoodId) {
        resolve("prepapredFoodId Id Created!");
      } else {
        reject(new Error("prepapredFoodId Id Rejected!"));
      }
    }, 2000);
  });
}

function proceedToPayment() {
  return new Promise((resolve, reject) => {
    let proceedToPaymentId = true;
    setTimeout(() => {
      if (proceedToPaymentId) {
        resolve("proceedToPayment Id Created!");
      } else {
        reject(new Error("proceedToPayment Id Rejected!"));
      }
    }, 3000);
  });
}

// orderFood().then((data)=>{
//     console.log(data);
//     return preparedFood();//return to next step
// }).then((data)=>{
//     console.log(data);
//     return proceedToPayment();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
// todo-------promise.all
// const p = Promise.all([orderFood(), preparedFood(), proceedToPayment()])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   console.log(p);

//todo-------------promise.race
// const p = Promise.race([orderFood(), preparedFood(), proceedToPayment()])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//?   What is Promise.race()?
//* Promise.race():
//* Takes an array of promises
//* Returns a new promise
//* Settles (resolve or reject) as soon as the first promise settles
//* Does NOT wait for the others
//* "Race" means: whoever finishes first wins.

/*
todo -->You are absolutely correct:

?If prepareFood() depends on orderFood(),and proceedToPayment() depends on prepareFood(),
?then ❌ Promise.race() is NOT correct for this situation.
*🔥 Why Promise.race() is Wrong Here

!This:
Promise.race([
  orderFood(),
  preparedFood(),
  proceedToPayment()
])

!Means:
*Start all 3 immediately Whichever finishes first wins Others are ignored
?But your logic is:
!Order must be created first Then food prepared Then payment That is sequential dependency.
?So race makes no logical sense here.

?So When Do We Actually Use Promise.race()?

!Race is used when: Tasks are independent You only care about the fastest result Or you want to implement a timeout

? Real Use Case 1: Timeout (Very Common)

?Example: API call with timeout protection.

!function fetchData() {
  return new Promise(res =>
    setTimeout(() => res("Data loaded"), 5000)
  );
}

!function timeout() {
  return new Promise((_, reject) =>
    setTimeout(() => reject("Request timed out"), 2000)
  );
}

!Promise.race([fetchData(), timeout()])
  .then(console.log)
  .catch(console.log);

?Here:
*If API is slow → timeout wins
*If API is fast → data wins
*This is a real production pattern.

todo-> Real Use Case 2: Multiple Servers
?Imagine:
?You have 3 mirror servers You request data from all You use the fastest response

!Promise.race([
  fetch(server1),
  fetch(server2),
  fetch(server3)
])
*First server to respond → used.
!!Important Concept
todo --? There are 2 types of async flows:

!1️⃣ Dependent (Sequential)
*Use:.then() chaining , async/await
?Example:
?Order → Prepare → Pay

!2️⃣ Independent (Parallel)
*Use:Promise.all()
*Promise.race()
*Promise.any()
!Example:
!Load profile, posts, notifications together.
 */

// todo- Prmoise.any()--------------------------------------------------
// const p = Promise.any([orderFood(), preparedFood(), proceedToPayment()])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/*
!✅ What is Promise.any()?
?Takes an array of promises
?Returns a new promise
?Resolves as soon as the first promise resolves
?Ignores rejected promises
?Rejects only if all promises reject
?It cares only about the first success. 
*/

// todo---> Promise.allSettled()-------------------------------------------------------------------

const p = Promise.allSettled([orderFood(), preparedFood(), proceedToPayment()])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*
!What is Promise.allSettled()?

?Promise.allSettled():
*Takes an array of promises
*Waits for all promises to finish
*Does NOT fail if one rejects
*Always resolves
*Returns the result of each promise with its status
*It cares about the result of every promise, whether success or failure.
*/


