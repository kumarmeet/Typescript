// JavaScript uses prototypal inheritance, not classical inheritance like Java or C#.
// ES6 introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance.
// TypeScript supports inheritance like ES6.

class User {
  constructor(protected firstName: string, protected lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Auth extends User {
  private jobTitle: string;

  constructor(firstName: string, lastname: string, jobTitle: string) {
    super(firstName, lastname);

    this.jobTitle = jobTitle;
  }

  describe(): string {
    return super.describe() + `I am a ${this.jobTitle}`;
  }
}

let auth = new Auth("John", "Doe", "Web Developer");
console.log(auth.describe());

// Use the extends keyword to allow a class to inherit from another class.
// Use super() in the constructor of the child class to call the constructor of the parent class.
// Also, use the super.methodInParentClass() syntax to invoke the methodInParentClass() in the method of the child class.
