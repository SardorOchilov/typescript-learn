// TypeScript types  1.any 2.unknown 3.never 4.enum 5.tuple

// 1. any
let a;
a = 1;
a = "a";

function render(document: any) {
  console.log(document);
}

// Arrays
let arr1: number[] = [];
arr1[0] = 3;
arr1.forEach((n) => n + 1);

// Tuples
let arr2: [number, string] = [1, "1"];

// Enums
// --PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;

// Functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

// Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};