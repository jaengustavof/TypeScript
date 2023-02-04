"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boss = exports.Employees = exports.Person = void 0;
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} ${this.lastName}, I am ${this.age} years old`);
    }
}
exports.Person = Person;
class Employees extends Person {
    constructor(name, lastName, age, salary) {
        super(name, lastName, age); // super is a call to the class that inheritance (Person in this case)
        this.salary = salary;
    }
    greet() {
        super.greet();
        console.log(`My salary is ${this.salary} Euros`);
    }
}
exports.Employees = Employees;
class Boss extends Person {
    constructor(name, lastName, age) {
        super(name, lastName, age);
        this.employees = [];
    }
}
exports.Boss = Boss;
//# sourceMappingURL=Person.js.map