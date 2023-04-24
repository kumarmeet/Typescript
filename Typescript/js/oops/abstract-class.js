"use strict";
// An abstract class is typically used to define common behaviors for derived classes to extend.
// Unlike a regular class, an abstract class cannot be instantiated directly.
class Emp {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
class FullTimeEmployee extends Emp {
    salary;
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Emp {
    rate;
    hours;
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
let john1 = new FullTimeEmployee("John", "Doe", 12000);
let jane1 = new Contractor("Jane", "Doe", 100, 160);
console.log(john1.compensationStatement());
console.log(jane1.compensationStatement());
/**
 
 Abstract classes cannot be instantiated.
 An Abstract class has at least one abstract method.
 To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.

 */
