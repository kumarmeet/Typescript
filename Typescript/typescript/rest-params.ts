/**
 1. A function has only one rest parameter.
 2. The rest parameter appears last in the parameter list.
 3. The type of the rest parameter is an array type.
 */

function accu(...rest: number[]) {
  return rest.reduce((acc: number, val: number) => acc + val, 0);
}

accu(10, 20, 30, 40, 50, 60, 70);
accu(10, 20, 30);
accu(1.55, 845.66, 957.22, 0.55, 654.77);
