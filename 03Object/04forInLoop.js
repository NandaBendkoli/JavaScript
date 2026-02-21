const user = {
  id: 1,
  name: "Amit Sharma",
  email: "amit.sharma@example.com",
  age: 24,
  role: "Frontend Developer",
};

// Todo For in loop ---> used to iterate over all enumerable properties of object include inherted properties also

for (let key in user) {
  console.log(key, ":", user[key]);
}
console.log("-----------------------------");
// ? inherited properties

const user2 = Object.create(user);

user2.newName="Nanda";
user2.newAge=25;

for (let key in user2) {
  console.log(key, ":", user2[key]);
}
