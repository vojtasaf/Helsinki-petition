"use strict";
console.log("JavaScript running");

let totalSignatures = 1;
console.log(totalSignatures);

const person = {
  name: "John",
  surname: "Doe",
  public_signature: true,
};

function fullName(p) {
  return p.name + " " + p.surname;
}

if (person.public_signature == true) {
  console.log(fullName(person) + " signed this petition.");
}
