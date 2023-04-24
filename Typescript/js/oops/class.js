"use strict";
class Person {
    ssn;
    firstName;
    lastName;
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person(171280926, "John", "Doe");
