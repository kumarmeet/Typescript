"use strict";
//A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts
let coordinates;
function coords(t, p) {
    return t + p;
}
coordinates = coords;
let sum = function (x, y) {
    return x + y;
};
