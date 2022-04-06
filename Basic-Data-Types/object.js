/**
 * *** TYPES ***
 * object
 * array
 */
//object types has key:type pairs
var person = {
    name: "Meet Kumar",
    id: 444
};
console.log(person);
//more specific object type , key and type must be same in the emp object
var emp = {
    id: 126,
    account: 2563441,
    mobile: "12365214",
    level: 33
};
/**************************************************************************************** */
var marks = [84, 64, 74, 94, 94]; //now marks contains only number array
var brands = ["Xiaomi", "Google", "Dell"];
var twoDArray = [
    [1, 2],
    [5, 6],
    [8, 7],
];
var objArray = [{ a: 10 }, { b: 14 }, { c: 78 }];
var flexibleArray = [10, "anything", true, { g: 31 }];
for (var _i = 0, _a = [
    marks,
    brands,
    twoDArray,
    objArray,
    flexibleArray,
]; _i < _a.length; _i++) {
    var _b = _a[_i], mark = _b[0], brand = _b[1], twoD = _b[2], obj = _b[3], flex = _b[4];
    [mark, brand, twoD, obj, flex].forEach(function (value) {
        console.log(value);
    });
}
