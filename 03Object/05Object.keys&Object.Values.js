// todo Object.keys() --> return array of key

const user = {
  id: 1,
  name: "Amit Sharma",
  email: "amit.sharma@example.com",
  age: 24,
  role: "Frontend Developer",
};

const keyArr = Object.keys(user);

console.log(keyArr); //? [ 'id', 'name', 'email', 'age', 'role' ]

for (let key of keyArr) {
  // console.log(key);
  console.log(key);
}//? this always stored the keys not the value

// todo object.values are alwasy store the value not the key of obj

const valArr = Object.values(user);
console.log(valArr);
/* 
[
  1,
  'Amit Sharma',
  'amit.sharma@example.com',
  24,
  'Frontend Developer'
]
*/

for( let val of valArr){
    console.log(val);
}

// todo object.entries this is best for both value and key

const entries = Object.entries(user);

for(let [key,val] of entries){
    console.log(key  , ":" , val);
}




