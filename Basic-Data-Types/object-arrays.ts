/**
 * *** TYPES ***
 * object
 * array
 */

//object types has key:type pairs
const person: object = {
  name: "Meet Kumar",
  id: 444,
};
console.log(person);

//more specific object type , key and type must be same in the emp object
const emp: {
  id: number;
  account: number;
  mobile: string;
  level: 33; //if this key and value not have in emp obj then it will get error
} = {
  id: 126,
  account: 2563441,
  mobile: "12365214",
  level: 33,
};

/**************************************************************************************** */
let marks: number[] = [84, 64, 74, 94, 94]; //now marks contains only number array
let brands: string[] = ["Xiaomi", "Google", "Dell"];
let twoDArray: number[][] = [
  [1, 2],
  [5, 6],
  [8, 7],
];
let objArray: {}[] = [{ a: 10 }, { b: 14 }, { c: 78 }];
let flexibleArray: any[] = [10, "anything", true, { g: 31 }];

for (const [mark, brand, twoD, obj, flex] of [
  marks,
  brands,
  twoDArray,
  objArray,
  flexibleArray,
]) {
  [mark, brand, twoD, obj, flex].forEach((value) => {
    console.log(value);
  });
}
