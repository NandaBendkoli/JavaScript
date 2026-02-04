// BINDING IN JAVASCRIPT

// Using var
var a = 10;
// Here, `a` is bound to the value 10.
// JavaScript does not treat `a` as a box that stores 10.
// Instead, `a` is an identifier that is bound to the value 10.

a = 20;
// Here, we rebind `a` to a new value (20).
// This is allowed because `var` creates a mutable binding.


// Using let
let b = 10;
b = 20;
// `let` also creates a mutable binding, so rebinding is allowed.


// Using const
const c = 90;
// `const` creates an immutable binding.
// The identifier `c` is permanently bound to the value 90.
// Rebinding `c` to another value is not allowed.


// Important case: const with objects
const obj = { name: "Nanda" };

// This is allowed
obj.name = "Bendkoli";
// We are NOT changing the binding of `obj`.
// The identifier `obj` is still bound to the same object reference.
// Only the internal property of the object is being modified.


// This would NOT be allowed
// obj = {}; //  Error: Assignment to constant variable
// Because this would attempt to change the binding of `obj`.
