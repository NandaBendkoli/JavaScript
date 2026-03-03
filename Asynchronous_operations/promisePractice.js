// create a prmoise that resolved after 2 sec and you have to print that data after 2 sec

// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("task resolved");
//   }, 2000);
// });

// myPromise.then((data) => {
//   console.log(data);
// });
//todo--------------------------------------------------------------------------------------------------
// orderFood
// preparedFood
// Deliverdfood

// using .then() chain them
// orderFood().then(preparedFood).then(deliverFood).catch(err=>{console.log(error)});

function orderFood() {
  return new Promise((resolve, reject) => {
    let orderId = true;
    setTimeout(() => {
      if (orderId) {
        resolve("Order Id Created!");
      } else {
        reject(new Error("Order Id Rejected!"));
      }
    },1000);
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
    },2000);
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
    },3000);
  });
}

orderFood().then((data)=>{
    console.log(data);
    return preparedFood();//return to next step
}).then((data)=>{
    console.log(data);
    return proceedToPayment();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})



//todo --------------------------------------------------------------------------------------------------
// console.log("Start");

// function printName(username, cb) {
//   setTimeout(() => {
//     cb(`hello i am ${username}`);
//   }, 2000);
// }

// function printLastName(lastName, cb) {
//   setTimeout(() => {
//     cb(`my last name is  ${lastName}`);
//   }, 2000);
// }

// const message = printName("NANDA", function (message) {
//   console.log(message);
//   printLastName("BENDKOLI", (lastName) => {
//     console.log(lastName);
//   });
// });

// console.log("End");
// todo --------------------------------------------------------------------------------------------------

// const subject = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) {
//       resolve("Promise resolved");
//     } else {
//       reject(new Error("Promise rejcted!"));
//     }
//   }, 2000);
// });

// // how to execute the promise
// subject
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(subject);

// todo--------------------------------------------------------------------------------------------------
