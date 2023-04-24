// An abstract class is typically used to define common behaviors for derived classes to extend.
// Unlike a regular class, an abstract class cannot be instantiated directly.

abstract class Emp {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class FullTimeEmployee extends Emp {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Emp {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
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
