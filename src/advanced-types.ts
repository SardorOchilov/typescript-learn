// You'll be learn
// 1. Type aliases
// 2. Unions and intersections
// 3. Type narrowing
// 4. Nullable types
// 5. The unknown type
// 6. The never type

// 1.Type Aliases
// --PascalCase
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let worker: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// 2.Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10");

// 3.Intersection type
type Drawable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Drawable & Resizable;

const shape: UIWidget = {
  resize: () => {},
  drag: () => {},
};

// 4.Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 50;
let amount: Quantity = 100;

// 5.Nullable types
function word(word: string | undefined | null) {
  if (word) console.log(word.toUpperCase());
  console.log("Hola!");
}

// 6.Optional calling
function factory(pen: string | null) {
  // --Optional property access operator
  console.log(pen?.toUpperCase());
}

// --Optional element access operator
// arr?.[0]
// --Optional call
// func?.('a')

// 7.Nullish coalescing operator
let num: number | null = null;
let num2 = num ?? 30;

// 8.Type assertions
let input1 = document.querySelector(".input") as HTMLInputElement;
let input2 = <HTMLInputElement>document.querySelector(".input");

// 9.unknown 
// never it  unreachable code. That means codes after never type you can not see them.