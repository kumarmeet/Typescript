//!Capturing Properties Types

/**
 * Tekeyof operator can be used to capture all the keys of a type.
 * You can use thisoperator in many places especially when you want to declare as a union type out ofan existing variable or type.
 */
interface SignupFormState {
  email: string;
  name: string;
  userId: number;
}

interface ActionPayload {
  key: keyof SignupFormState;
  value: string;
}

const update1: ActionPayload = {
  key: "email",
  value: "hello@gmail.com",
};

const update2: ActionPayload = {
  key: "name",
  value: "meet",
};

/**
 * When you have an existing variable and you want to use keyof,
 * you want to use the typeof operator to get its type first and then apply it:
 */
type actionPayloadKeys = keyof typeof update1;

const key1: actionPayloadKeys = "key";
const key2: actionPayloadKeys = "value";

/**
 * Here,typeof will query the type of the update1 variable, which is ActionPayload,and thekeyof operator will retrieve the type keys.
 * Te benfit here is that you won't haveto retype anything if you change the type signature of SignupFormState
 */

const update3: ActionPayload = {
  [key1]: "userId",
  [key2]: "New Data",
};

console.log(update1, update2, update3);

//!Union Branded Types
/**
 * We have mentioned before that TypeScript has a structural type system.
 * This meanspractically that if two types contain the same structure (the same property names),
 * thenthey are considered to be compatible in TypeScript.
 * Every so ofen, you want to overcomethis behavior and make sure that you allow only speciﬁc kinds of types.
 * This is what anominal type system does, and it works in other typed programming languages such asJava or Go
 */
type Point2d = { x: number; y: number };

type NominalTyped<Type, Brand> = Type & { __type: Brand };

type Point3d = NominalTyped<Point2d & { z: number }, Point2d>;

function distance1(first: Point2d, second: Point2d) {
  return Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2));
}

distance1({ x: 1, y: 2 }, { x: 3, y: 4 });

/**
 * You can call this function by providing an object with the same structure even if its type is not Point2d:
 */
type _Point2d = { x: number; y: number };
const p: _Point2d = { x: 1, y: 2 };
const r: _Point2d = { x: 3, y: 4 };

console.log(distance1(p, r));

/**
 * If you want to only allow Point2d types, you need to change the signature of the function like this:
 */
function distance2(first: NominalTyped<Point2d, "Point2d">, second: NominalTyped<Point2d, "Point2d">) {
  return Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2));
}

console.log(distance2({ x: 1, y: 2, __type: "Point2d" }, { x: 3, y: 4, __type: "Point2d" }));

class User {
  private static readonly __type: unique symbol = Symbol();
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

type Account = {
  name: string;
};
function printAccountName(o: User) {
  console.log(o.name);
}

printAccountName(new User("Theo"));
printAccountName({ name: "Alex" }); // Fail to typecheck

//!Conditional Types
type PPSNumber = {
  number: string;
};

type PPSString = {
  string: string;
};

type NameOrPPSNumber<T extends string | number> = T extends number ? PPSNumber : PPSString;

const loginInfoNumber: NameOrPPSNumber<1> = {
  number: "123",
};

const loginInfoString: NameOrPPSNumber<""> = {
  string: "Meet",
};

console.log(loginInfoNumber, loginInfoString);

/**
 * Conditional types are utilized collectively with theinfer keyword.
 * You can give a nameto a type or generic parameter so that you can subsequently perform conditional checks:
 */

interface Box<T> {
  value: T;
}

type UnpackBox<A> = A extends Box<infer E> ? E : A;

/**
 * Te use of infer works like this: Whatever the type we dfined in A, we check whether itextends aBox type.
 * If this is true, then we infer this as the type of the Box <T>, parameterisE and return its type.
 * Otherwise, we return type A as it is.
 * The next three examples showhow this works
 */

type intStash = UnpackBox<{ value: 10 }>; // intStash is now just the number 10
type stringStash = UnpackBox<{ value: "123" }>; // stringStash is now just the string "123"
type booleanStash = UnpackBox<true>; // booleanStash is now just the boolean true

const boxObject: Box<number> = { value: 42 };
const Infer1: UnpackBox<typeof boxObject> = 42; // Infer1 is inferred as number

console.log(boxObject, Infer1);
