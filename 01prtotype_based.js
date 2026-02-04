// Prtotype based inheritance

// javascript is prototype based language everything in javascript is an object almost 
// when we create an object the prototyr [[prtotype]] automatically points to that object

// __proto__ is a property of an object that points to the prototype of the object

// JS checks the object itself
// If not found → checks its prototype
// Keeps going up the chain
// This is called the Prototype Chain

const person1 = {

    goodMorning : function(){
        console.log("Hello Good Morning!");
    }
}

const person2 = {
    goodNight : function(){
        console.log("Good Night")
    }
}

// linkned this two object
person2.__proto__ = person1;

person2.goodMorning();
person1.goodNight();


