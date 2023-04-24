// TypeScript provides the readonly modifier that allows you to mark the properties of a class immutable.
// The assignment to a readonly property can only occur in one of two places:

// In the property declaration.
// In the constructor of the same class.

class RealonlyPerson {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let readOnlyPerson = new RealonlyPerson(new Date(1990, 12, 25));
// readOnlyPerson.birthDate = new Date(1991, 12, 25); // Compile error

/**
Readonly vs. const
The following shows the differences between readonly and const:

readonly	                        const
Use for	Class properties	        Variables
Initialization	                  In the declaration or in the constructor of the same class	In the declaration

Summary
  Use the readonly access modifier to mark a class property as immutable.
  A readonly property must be initialized as a part of the declaration or in the constructor of the same class.
 */
