// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.

//As you can see clearly from the code, the type annotation of the function argument makes the code difficult to read.

interface IPerson {
  firstName: string;
  lastName: string;
}

const fullName = (person: IPerson) => {
  return `${person.firstName} ${person.lastName}`;
};

let jane6 = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};

fullName(jane6);

/** 
Optional properties
  An interface may have optional properties. To declare an optional property, 
  you use the question mark (?) at the end of the property name in the declaration,
 */

interface IUser {
  firstName: string;
  middleName?: string;
  lastName: string;
}

function getFullName(person: IUser) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

//Readonly properties
// If properties should be modifiable only when the object first created.

interface IHuman {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let human: IHuman = {
  ssn: "171-28-0926",
  firstName: "John",
  lastName: "Doe",
};

// human.ssn = "45454"

/**
Function types
  In addition to describing an object with properties, interfaces also allow you to describe function types.

  To describe a function type, you assign the interface to the function signature that contains the parameter list with types and returned types.
 */

interface IStringFormat {
  (str: string, isUpper: boolean): string;
}

let format: IStringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format("hi", true));

/**
 The StringFormat interface ensures that all the callers of the function that implements it pass in the required arguments: a string and a boolean.

The following code also works perfectly fine even though the lowerCase is assigned to a function that doesn’t have the second argument:

Notice that the second argument is passed when the lowerCase() function is called.
 */

let lowerCase: IStringFormat;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase("Hi", false));

//class types

interface IJson {
  toJSON(): string;
}

class Insaan implements IJson {
  constructor(private firstName: string, private lastName: string) {}

  toJSON(): string {
    return JSON.stringify(this);
  }
}

/**
TypeScript interfaces define contracts in your code and provide explicit names for type checking.
Interfaces may have optional properties or readonly properties.
Interfaces can be used as function types.
Interfaces are typically used as class types that make a contract between unrelated classes.
 */
