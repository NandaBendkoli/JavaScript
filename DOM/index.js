/*
//TODO --> DOM Document Object Model
// ? DOM is a programming interface for HTML documents. It represents the HTML document as an object model.
// ? The DOM represents the HTML document as a tree structure of objects.

// * there is 4 pillars of dom
// ? Selction of an element
var a = document.querySelector("h1"); //*selecting h1
console.log(a);

// *2 chnage the element
a.innerHTML = "This is new Hello";

// *3 changing the css
a.style.backgroundColor = "red";
a.style.color = "white";

//*4 Event listner
a.addEventListener("click", function(){
    a.style.color = "blue";
    a.style.backgroundColor = "yellow";
    a.style.fontSize = "100px";
});
*/

const bulb = document.getElementById("bulb");
const button = document.getElementById("button-add");
let flag = 0;
button.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";

    flag = 1;
  } else {
    bulb.style.backgroundColor = "white";
    flag = 0;
  }
});
