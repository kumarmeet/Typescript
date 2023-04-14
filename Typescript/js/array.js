"use strict";
const arr = ["new"];
const newArr = [1, "heelo"];
const anotherArray = [{ val1: 14, val2: 88 }];
const p = anotherArray.map((d) => {
    return d.val1 + d.val2;
});
//inferes (string | number)[]
let scores = ["Programming", 5, "Software Design", 4];
