//promises in js 
/**
const cart =["item1","item2","item3"];

createOrder(cart,function(orderId){
    proceedToPayment(orderId);
})
*/
// this is call back

// same thing using promises

// const promises = createOrder(cart);

// this will return an object an empty object with data and a value is udefined or something empty{data:undefined}
// and whene ever this line is excuted it will return an promise with {data : undefined } and it take some time
// and when this function is complteley executed it will return the datas value {data : "order id"}


// then how to proceed to our program from after getting {data : "order id"}
/** 
promises.then(function(orderId){
    proceedToPayment(orderId);
});
*/

//and in callbacks we are passing an callback function as an argumnet means totaly dependent on the actual function
//but in promises we are attaching the function and when our promise get an {data:"order id"} it will automatically call the function
//promises gives us an guarantee that the function will be called after the promise get an value 



const githubUrl = "https://github.com/NandaBendkoli";

const user = fetch(githubUrl);
console.log(user);


// there is two thing in promises 
// 1.state of prmoises
/**
 1.pendiing
 2.resolved
 3.rejected
 */

// 2. result-->in result what is data that are stored in result like {data : "orderId"}
