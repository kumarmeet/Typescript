/**
Summary: in this tutorial, you will learn about the access modifiers in TypeScript.

Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:

  private
  protected
  public
Note that TypeScript controls the access logically during compilation time, not at runtime.
 */

// The private modifier
// The private modifier limits the visibility to the same-class only.
// When you add the private modifier to a property or method, you can access that property or method within the same class.
// Any attempt to access private properties or methods outside the class will result in an error at compile time.

class PrivatePerson {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let privatePerson = new PrivatePerson("153-07-3130", "John", "Doe");
// console.log(anotherPerson.ssn); // compile error

//The public modifier
// The public modifier allows class properties and methods to be accessible from all locations.
//If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.

class PublicPerson {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let publicPerson = new PublicPerson("153-07-3130", "John", "Doe");

// The protected modifier
// The protected modifier allows properties and methods of a class to be accessible within same class and within subclasses.

// When a class (child class) inherits from another class (parent class), it is a subclass of the parent class.

// The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else.

class ProtectedPerson {
  protected fullName: string;

  constructor(fullname: string) {
    this.fullName = fullname;
  }
}

class PrintClass extends ProtectedPerson {
  public getName() {
    return `My full name is ${super.fullName}`;
  }
}

// TypeScript provides three access modifiers to class properties and methods: private, protected, and public.

// The private modifier allows access within the same class.
// The protected modifier allows access within the same class and subclasses.
// The public modifier allows access from any location.
