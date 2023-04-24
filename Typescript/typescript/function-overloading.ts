//In TypeScript, function overloadings allow you to establish the relationship between the parameter types and result types of a function.

/**
 Note that TypeScript function overloadings are different from the function overloadings 
 supported by other statically-typed languages such as C# and Java.
 */

function addNumbers(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}

//It’s possible to use a union type to define a range of types for function parameters and results:

function addr(
  a: number | string,
  b: number | string
): number | string | undefined {
  if (typeof a === "number" && typeof b === "number") return a + b;

  if (typeof a === "string" && typeof b === "string") return a + b;
}

// To better describe the relationships between the types used by a function, TypeScript supports function overloadings.
function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: any, b: any): any {
  return a + b;
}

//Function overloading with optional parameters

/*
When you overload a function, the number of required parameters must be the same. 
If an overload has more parameters than the other, you have to make the additional parameters optional.
*/

function anotherSum(a: number, b: number): number;
function anotherSum(a: number, b: number, c: number): number;
function anotherSum(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}

//Method overloading
class Counter {
  private current: number = 0;

  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}

let c = new Counter();

console.log(c.count()); // return a number
console.log(c.count(20)); // return an array
