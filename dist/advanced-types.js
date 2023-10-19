"use strict";
// You'll be learn
// 1. Type aliases
// 2. Unions and intersections
// 3. Type narrowing
// 4. Nullable types
// 5. The unknown type
// 6. The never type
let worker = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
// 2.Union Types
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
const shape = {
    resize: () => { },
    drag: () => { },
};
let quantity = 50;
let amount = 100;
// 5.Nullable types
function word(word) {
    if (word)
        console.log(word.toUpperCase());
    console.log("Hola!");
}
// 6.Optional calling
function factory(pen) {
    // --Optional property access operator
    console.log(pen === null || pen === void 0 ? void 0 : pen.toUpperCase());
}
// --Optional element access operator
// arr?.[0]
// --Optional call
// func?.('a')
// 7.Nullish coalescing operator
let num = null;
let num2 = num !== null && num !== void 0 ? num : 30;
// 8.Type assertions
let input1 = document.querySelector(".input");
let input2 = document.querySelector(".input");
// 9.unknown 
// never it  unreachable code. That means codes after never type you can not see them.
