//todo  deep and shallow copy

const orginal = { name: "nanda" };
const copy = orginal;
console.log(orginal);
console.log(copy);
const copy2 = { ...orginal };
console.log(copy2);

// ? this is shalow copy
//* it copy the only the top level properties but if object contain an nested object then it will copy
// * refrence of that object

const user = {
  name: "nanda",
  age: 24,
  add: {
    city: "nashik",
    state: "mh",
  },
};

const user2 = { ...user };

console.log(user);
console.log(user2);

//* now if i change the user2

user2.add.city = "Mumbai";
user2.name = "neha";// this change happend in only user2 
console.log(user2);
console.log(user);


// todo --> Deep Copy

const cloneuser_obj = structuredClone(user);

console.log("___________________________________________________________________");
