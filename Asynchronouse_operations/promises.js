//promises in js 
const cart =["item1","item2","item3"];

createOrder(cart,function(orderId){
    proceedToPayment(orderId);
})
// this is call back

// same thing using promises

const promises = createOrder(cart);

// this will return an object an empty object with data and a value is udefined or something empty{data:undefined}
// and whene ever this line is excuted it will return an promise with {data : undefined } and it take some time
// and when this function is complteley executed it will return the datas value {data : "order id"}


// then how to proceed to our program from after getting {data : "order id"}
promises.then(function(orderId){
    proceedToPayment(orderId);
})
