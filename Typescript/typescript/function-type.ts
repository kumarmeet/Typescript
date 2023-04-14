//A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts

let coordinates: (x: number, y: number) => number;

function coords(t: number, p: number): number {
  return t + p;
}

coordinates = coords;

let sum: (a: number, b: number) => number = function (x: number, y: number) {
  return x + y;
};
