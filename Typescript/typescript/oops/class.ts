class Person {
  ssn: number;
  firstName: string;
  lastName: string;

  constructor(ssn: number, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person(171280926, "John", "Doe");
