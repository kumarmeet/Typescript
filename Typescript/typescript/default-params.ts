/**
 Note that if you use the expression if(c) to check if an argument is not initialized, 
 you would find that the empty string or zero would be treated as undefined.
 */

//The optional parameters must appear after the required parameters in the parameter list.
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

multiply(10, 20);
multiply(10, 20, 40);
