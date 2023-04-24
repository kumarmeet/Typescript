"use strict";
// JavaScript uses prototypal inheritance, not classical inheritance like Java or C#.
// ES6 introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance.
// TypeScript supports inheritance like ES6.
class User {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Auth extends User {
    jobTitle;
    constructor(firstName, lastname, jobTitle) {
        super(firstName, lastname);
        this.jobTitle = jobTitle;
    }
    describe() {
        return super.describe() + `I am a ${this.jobTitle}`;
    }
}
let auth = new Auth("John", "Doe", "Web Developer");
console.log(auth.describe());
// Use the extends keyword to allow a class to inherit from another class.
// Use super() in the constructor of the child class to call the constructor of the parent class.
// Also, use the super.methodInParentClass() syntax to invoke the methodInParentClass() in the method of the child class.
