// let firstname = "John";
// let surname = "Doe";
// let age = 30;
// console.log(firstname);
// console.log(surname);
// console.log(age);

// age = 54;

// console.log(age);

// const pi = 3.14;

// console.log(pi)

// let a = 10;

// console.log(9 * a);

// let b = 7 * a;

// console.log(b)

// console.log(25+25);
// console.log((25*4)+24-(1*5)/2);

// max = 57;
// actual = max - 13;
// percentage = actual / max;
// console.log(percentage)

// 1) Function to add the int 7 to a number X in the output console.log(X)
function add7(number){
    return number + 7
}

console.log(add7(7))

// 2) Take the Variables a and b and multiply them in the function called multiply and return it back to define the answer itself
let a = 10;
let b = 5;
function multiply(a, b){
    return a * b
}
console.log(multiply(a, b))

// 3) Capitalize a string and return the first letter capitalized.

let text1 = "This is a string text"
let text2 = "this is another second text"
let text3 = "This is Another third text"

function capitalize(text1, text2, text3){

    return text1.toUpperCase(text1)

}
console.log(capitalize(text1))

// 4) Take the very last letter of a string and return it

let string1 = "abcdefghijklm"
let string2 = "abdjfoewojafjei"

function lastLetter(string1, string2){
    return string1.slice(-1)
}
console.log(lastLetter(string1))

// Any number given in the prompt will automatically count up from 0 to the answer
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i= 0; i<=answer; i++){
    
//     console.log(i);
// };

// FizzBuzz Game, 
// where every number divisibly by three == Fizz, 
// every number divisibly by five == Buzz, 
// and every number divisible by three and five == FizzBuzz

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i= 1; i<=answer; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if (i % 3 === 0 ) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
};
