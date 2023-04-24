"use strict";
// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.
const fullName = (person) => {
    return `${person.firstName} ${person.lastName}`;
};
let jane6 = {
    firstName: "Jane",
    middleName: "K.",
    lastName: "Doe",
    age: 22,
};
fullName(jane6);
function getFullName(person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
let human = {
    ssn: "171-28-0926",
    firstName: "John",
    lastName: "Doe",
};
let format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("hi", true));
/**
 The StringFormat interface ensures that all the callers of the function that implements it pass in the required arguments: a string and a boolean.

The following code also works perfectly fine even though the lowerCase is assigned to a function that doesn’t have the second argument:

Notice that the second argument is passed when the lowerCase() function is called.
 */
let lowerCase;
lowerCase = function (str) {
    return str.toLowerCase();
};
console.log(lowerCase("Hi", false));
class Insaan {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toJSON() {
        return JSON.stringify(this);
    }
}
/**
TypeScript interfaces define contracts in your code and provide explicit names for type checking.
Interfaces may have optional properties or readonly properties.
Interfaces can be used as function types.
Interfaces are typically used as class types that make a contract between unrelated classes.
 */
