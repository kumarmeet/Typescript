/**
Introduction to TypeScript intersection types
An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.

To combine types, you use the & operator as follows:

type typeAB = typeA & typeB;
The typeAB will have all properties from both typeA and typeB.

Note that the union type uses the | operator that defines a variable which can hold a value of either typeA or typeB
let varName = typeA | typeB; // union type
 */

interface IBusinessPartner {
  name: string;
  credit: number;
}

interface IIdentity {
  id: number;
  name: string;
}

interface IContact {
  email: string;
  phone: string;
}

type emp = IIdentity & IContact;
type customer = IBusinessPartner & IContact;

let e: emp = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
};

let cus: customer = {
  name: "ABC Inc.",
  credit: 1000000,
  email: "sales@abcinc.com",
  phone: "(408)-897-5735",
};

type TEmp = IIdentity & IBusinessPartner & IContact;

let em: TEmp = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
  credit: 1000,
};

type optional = IIdentity | IBusinessPartner;

let op: optional = {
  id: 41414,
  name: "Test",
};

console.log(op);

/**
Type Order
When you intersect types, the order of the types doesn’t matter. For example:

type typeAB = typeA & typeB;
type typeBA = typeB & typeA;







An intersection type combines two or more types to create a new type that has all properties of the existing types.
The type order is not important when you combine types.
 */
