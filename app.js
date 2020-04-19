"use strict";
console.log("JavaScript running");

let totalSignatures = 1;
console.log(totalSignatures);

const Signature = {
  //object in JSON notation
  name: null,
  surname: null,
  public_signature: false,
  fullName: function () {
    return this.name + " " + this.surname;
  },
};

function addRecord(name, surname, public_signature) {
  const Record = Object.create(Signature); //Signature serves as prototype for object Record (inherits from it)
  Record.name = name;
  Record.surname = surname;
  Record.public_signature = true;
  return Record;
}

const Signee = addRecord("John", "Doe", true);

if ("10" == 10) {
  console.log("This shows");
}

if ("10" === 10) {
  //identity equal: includes type check
  console.log("This doesn't show");
}

let number = 5.1 + 3.3;
console.log(number); // 8.399999...
console.log(number.toFixed(2)); //rounded to 8.4

let level = 5;
let nextLevel = level++; //incrementation happens after assignment
console.log(nextLevel);
console.log(level);

let a;
console.log(++a); //undefined in numeric context is NaN
let b = null;
console.log(++b); //null in numeric context is treated as 0
let c = -3;
c = -c; //flips to positive 3
console.log(c);

if ("B" < "a") {
  //we can compare the alphabetical order, lower comes first
  console.log("B comes before a"); //ASCII - uppercase comes before lowercase
}

let array = [3, 2, 1, 10];
array.sort(function (value1, value2) {
  //this function is needed because otherwise sort orders by string value (result would be [1, 10, 2, 3])
  return value1 - value2;
});
console.log(array);

let shallow = array; //only copies the pointer
let deep = array.slice(); //deep copy (if array has literal values: bools/numbers/strings)
array[0] = "one"; //arrays in JS are loosely typed (can contain different types)
console.log(shallow[0]); //one - arrays are reference types
console.log(deep[0]); //1 - slice created new array

console.log(array instanceof Array);
console.log("Array lenght: " + array.length);

const dt = new Date();
console.log(dt.getDate() + "." + dt.getMonth() + "." + dt.getFullYear()); //today's date

let email = "example@email.com";
let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression
if (pattern.test(email)) {
  console.log("This is a valid email address");
}

console.log(window.innerWidth + "x" + window.innerHeight); //dimensions of the window without toolbars etc.
console.log(location.href);

let user = prompt("What is your name?");
alert("Nice to meet you " + user + "!");

if (confirm("Should I take you to wikipedia page about Helsinki?")) {
  location.assign("https://en.wikipedia.org/wiki/Helsinki");
}

let form = document.getElementById("below_image");
try {
  console.log(form.childNodes);
} catch (e) {
  console.log("Only works on Home page - error: " + e.name);
}

let inputs = document.querySelectorAll("input");
console.log(inputs);

let sign_button = document.getElementById("sign_button");
let submitHandler = function formSubmitHandler(event) {
  event.preventDefault(); // prevents default behaviour of the submit button
  console.log(Signee.fullName() + " signed this petition.");
  if (Signee.public_signature == true) {
    console.log("The signature will show be shown publicly.");
  }
};
if (sign_button) {
  sign_button.addEventListener("click", submitHandler);
}

let numbers = [-42, 0, "88", 6];
console.log(Math.max(...numbers)); // Math is a built-in object in JS, the ... expand array into a list
