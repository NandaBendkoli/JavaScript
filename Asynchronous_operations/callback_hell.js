// callBack Function

const cart = ["item1", "item2", "item3"];

api.createOrder(cart,function(){
    api.proceedToPayment();
});
// this is example of callback

console.log("HELLO1");//EXECUTE fast

setTimeout(()=>{
    console.log("Hello2")

},2000);//excecute after 2 sec

console.log("HELLO3");//excute fast

// op is hello1 hello3 hello2


// callBack Hell--> callback hell is when multiple callbacks are nested inside each other

api.createOrder(cart,function(){
    api.proceedToPayment(function(){
        api.collectSummary();
    });
});

// this is example of callBack Hell also called pyramid of doom

// inversion of control
//loosing control when you write an code
// here proceedToPayment is dependent on createOrder and we dont know whats actualy going to happen in createOrder
// we compltey and blindly trust on createOrder function

