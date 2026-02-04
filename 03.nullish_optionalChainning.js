
// optional channing if left side is undefined or null so instead of giveing an error it give an undefined

const user = {
    name : "Nanda",
    age : 24
}    

// console.log(user.profile.name); //TypeError: Cannot read properties of undefined (reading 'name')

console.log(user?.profile?.name); //undefined


// Nullish coalescing ??
// if value is null or undefined then only use the default value

// const count = 0;
// console.log(count || 10); // give an 10 but 0 is valid count 

const count = 0;
console.log(count ?? 10);


