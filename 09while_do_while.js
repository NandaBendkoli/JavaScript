// while and do while loop
let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}
//while loop we used when we dont know how many times loop will run
// best example

let password = "";
let attempt = 0;

while (password !== "secrete_password") {
    // password = prompt("Enter the password");
    attempt++;
    if (attempt === 3) {
        password = "secrete_password" //assume user input
    } else {
        password = "wronged password";
    }
    password === "secrete_password" ? console.log("you are logged in") : console.log("password wrong please enter correct password!");

}

//do while loop we used when we know how many times loop will run

let b = 89;
do {
    console.log(b);
    b++;
} while (b === 20);
