//Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.

let counter = 0; // is equivalent to let counter: number = 0;

function setCounter(max = 100) {
  // ...
}

function increment(counter: number) {
  return counter++;
}

// is equivalent to
/*
  function increment(counter: number): number {
    return counter++;
  }
*/

let items = [1, 2, 3, null];

let items2 = [0, 1, null, "Hi"];

let arrw = [new Date(), new RegExp("d+")];

/**
  
Type inference vs. Type annotations
The following show the difference between type inference and type annotations:

    Type inference	                Type annotations
        |                                 |
        V                                 V
    TypeScript guesses the type	    You explicitly tell TypeScript the type

So, when do you use type inference and type annotations?

In practice, you should always use the type inference as much as possible. And you use the type annotation in the folowing cases:

When you declare a variable and assign it a value later.
When you want a variable that can’t be inferred.
When a function returns the any type and you need to clarify the value.
 */
