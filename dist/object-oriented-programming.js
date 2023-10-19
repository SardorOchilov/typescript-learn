"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Mosh", 0);
// console.log(typeof account);
// console.log(account instanceof Account);
// console.log(account.balance);
// Index signatures
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "John";
// Static Members
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
// console.log(Ride.activeRides)
// Inheritance
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    takeTest() {
        console.log(this.firstName + " taking a test");
    }
    walk() {
        console.log("walking");
    }
}
// Methods overriding
class Teacher extends Person {
    get fullName() {
        return "Professor" + super.fullName;
    }
    walk() {
        console.log("walking");
    }
}
// Polymorphism
printNames([new Student(1, "John", "Smith"), new Teacher("Bob", "Mary")]);
function printNames(persons) {
    for (let person of persons) {
        console.log(person.fullName);
    }
}
class Circle {
    constructor(name) {
        this.name = name;
    }
    render() {
        throw new Error("Method not implemented.");
    }
    paint() {
        throw new Error("Method not implemented.");
    }
}
