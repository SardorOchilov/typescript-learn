class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Mosh", 0);
// console.log(typeof account);
// console.log(account instanceof Account);
// console.log(account.balance);

// Index signatures
class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "John";

// Static Members
class Ride {
  private static _activeRides = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

// console.log(Ride.activeRides)

// Inheritance

abstract class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  abstract walk(): void;
}

class Student extends Person {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log(this.firstName + " taking a test");
  }

  override walk(): void {
    console.log("walking");
  }
}

// Methods overriding
class Teacher extends Person {
  override get fullName() {
    return "Professor" + super.fullName;
  }

  override walk(): void {
    console.log("walking");
  }
}

// Polymorphism
printNames([new Student(1, "John", "Smith"), new Teacher("Bob", "Mary")]);

function printNames(persons: Person[]) {
  for (let person of persons) {
    console.log(person.fullName);
  }
}

// interface and implements
interface Shape {
  name: string;
  render(): void;
  paint(): void;
}

class Circle implements Shape{
    constructor(public name: string){}
    render(): void {
        throw new Error("Method not implemented.");
    }
    paint(): void {
        throw new Error("Method not implemented.");
    }
}
