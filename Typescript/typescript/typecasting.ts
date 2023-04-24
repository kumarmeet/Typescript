/**
 JavaScript doesn’t have a concept of type casting because variables have dynamic types. 
 However, every variable in TypeScript has a type. Type castings allow you to convert a variable from one type to another.

 In TypeScript, you can use the as keyword or <> operator for type castings.
 */

/**
//with (as)
let a: typeA;
let b = a as typeB;

with (<>)
let a: typeA;
let b = <typeB>a;

 */

type o = {
  u: string;
};

type l = {
  m: number;
};

// let a: o;
// let b = <l>a;

// Type casting allows you to convert a variable from one type to another.
// Use the as keyword or <> operator for type castings.
