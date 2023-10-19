"use strict";
// TypeScript types  1.any 2.unknown 3.never 4.enum 5.tuple
// 1. any
let a;
a = 1;
a = "a";
function render(document) {
    console.log(document);
}
// Arrays
let arr1 = [];
arr1[0] = 3;
arr1.forEach((n) => n + 1);
// Tuples
let arr2 = [1, "1"];
let mySize = 2 /* Size.Medium */;
// Functions
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
// Objects
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
