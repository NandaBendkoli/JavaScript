const user = {
  id: 1,
  name: "Amit Sharma",
  email: "amit.sharma@example.com",
  age: 24,
  role: "Frontend Developer",
  add: {
    city: "Pune",
    state: "MH",
  },
  name: "neha",
};
// for (let key in user) {
//   console.log(key, ":", user[key]);
// }
// todo traversing in nested object

for (let key in user) {
  if (typeof user[key] === "object" && user[key] !== null) {
    for (let key2 in user[key]) {
      console.log(key2, ": ", user[key][key2]);
    }
  } else {
    console.log(key, ":", user[key]);
  }
}