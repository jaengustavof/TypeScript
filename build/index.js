"use strict";
// Comment
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Documentation
 * Multi-line
 */
console.log('Hello Gustavo');
console.log('New Message');
/////////////////////////////////////////////////////////////////////////////////////////////
//TODO:
// Variables:
var userName = 'Pete'; //Global
let email = 'pete@email.com'; //Local
const PI = 3.1416;
let contenido = 'Test'; //any allows to change the type of data. We can assign now a string and change it later for a number, boolean, etc;
var error = false;
console.log('Hello, ' + userName);
console.log('How are you,', userName, '?');
console.log(`New message , ${userName}`);
console.log(`Name: ${userName} - Email: ${email}`);
console.log(`There is an error: ${error}`);
// Multiple initialization
// BuiltIn types: numbre, string, boolean, void, null, undefined.
let a, b, c; //Instance 3 variables without a value.
a = "Typescript";
b = true;
c = 8.9;
//complex data types
let taskList = ['task 1', 'task 2'];
//Combines types
let values = [false, 'hello', true, 123]; //this array accepts string, number and booleans only.
//Enumerated
var Status;
(function (Status) {
    Status["Completed"] = "C";
    Status["Pending"] = "P";
    Status["Incompleted"] = "I";
})(Status || (Status = {}));
let taskState = Status.Completed;
console.log(`taskState: ${taskState}`);
var RacePosition;
(function (RacePosition) {
    RacePosition[RacePosition["First"] = 1] = "First";
    RacePosition[RacePosition["Second"] = 2] = "Second";
    RacePosition[RacePosition["Third"] = 3] = "Third";
})(RacePosition || (RacePosition = {})); // Will automatically assign 2 to 'Second' and 3 to 'Third'.
let raceResult = RacePosition.Second; // 2
console.log(`Race Result: ${raceResult}`);
console.log(`************************************************************`);
console.log(`************************************************************`);
// Create variables according to Task interface
let task1 = {
    name: 'Task 1',
    status: Status.Pending,
    priority: 10
};
let task2 = {
    name: 'Task 2',
    status: Status.Completed,
    priority: 1
};
let { name, status, priority } = task2;
console.log(`Task Name: ${task1.name}`);
console.log(`Task Status: ${task1.status}`);
console.log(`Task Priority: ${task1.priority}`);
console.log(`Task Name: ${name}`);
console.log(`Task Status: ${status}`);
console.log(`Task Priority: ${priority}`);
//Lists
let mondayShoppingList = ["item 1", "item 2"];
let tuesdayShoppingList = [...mondayShoppingList, "item 3", "item 4", "item 5"];
let wednesdayShoppingList = ["item 6", "item 7"];
let weeklyShoppingList = [...tuesdayShoppingList, ...wednesdayShoppingList];
//Objects
let statusApp = {
    user: "Admin",
    session: 4,
    jwt: "Bearer123456798"
};
let newStatus = Object.assign(Object.assign({}, statusApp), { session: 5 });
console.log(`************************************************************`);
console.log(`************************************************************`);
//Types are more complex data groups than interfaces. With this we create our own type of data.
let car = {
    name: 'Audi',
    price: 45000,
    year: 2020
};
console.log(`Car name: ${car.name}`);
console.log(`Car price: ${car.price}`);
console.log(`************************************************************`);
console.log(`************************************************************`);
//CONDITIONS//
//ternary operator
console.log(car.year <= 2014 ? `Car: ${car.name} is over 10 years` : `Car: ${car.name} is less than 10 years`);
//if - else
if (error) {
    console.log(`There is an error`);
}
else {
    console.log(`There is no error`);
}
//if - else if - else
if (car.year < 2010) {
    console.log(`Car: ${car.name} is older than 2010`);
}
else if (car.year === 2010) {
    console.log(`Car: ${car.name} is from 2010`);
}
else {
    console.log(`Car: ${car.name} is newer than 2010`);
}
console.log(`************************************************************`);
console.log(`************************************************************`);
//Switch
switch (task1.status) {
    case Status.Completed:
        console.log(`Task ${task1.name} is Completed`);
        break;
    case Status.Incompleted:
        console.log(`Task ${task1.name} is Incompleted`);
        break;
    case Status.Pending:
        console.log(`Task ${task1.name} is Pending`);
        break;
    default:
        break;
}
console.log(`************************************************************`);
console.log(`************************************************************`);
// LOOPS //
let newTaskList = [
    {
        name: 'task 1',
        status: Status.Completed,
        priority: 1
    },
    {
        name: 'task 2',
        status: Status.Pending,
        priority: 2
    },
    {
        name: 'task 3',
        status: Status.Incompleted,
        priority: 3
    }
];
//forEach
newTaskList.forEach((task, index) => {
    console.log(`${index} - ${task.name}`);
});
console.log(`************************************************************`);
//While
while (task1.status != Status.Completed) {
    if (task1.priority == 20) {
        task1.status = Status.Completed;
        console.log('Task Completed!');
    }
    else {
        task1.priority++;
        console.log('priority + 1');
    }
}
console.log(`************************************************************`);
// do while 
do {
    task1.priority++;
    task1.status = Status.Completed;
} while (task1.status != Status.Completed);
console.log(`************************************************************`);
console.log(`************************************************************`);
console.log(`************************************************************`);
/////////////////////////////////////////////////////////////////////////////////////////////
//TODO:
// FUNCTIONS //
/**
 *  Functions are declared:
 *
 *  function name(params:type) {
 * }
 * */
/**
 * Hello World function
 */
function hello() {
    let name = 'Gus';
    console.log(`Hello World!  ${name}`);
}
// call to hello function
hello();
/**
 * Shows a message on console
 * @param name Name of the user
 */
function helloDude(name) {
    console.log(`Hello ${name}, How are you?`);
}
const dude = 'Paul';
helloDude(dude);
helloDude('Pete');
// helloDude(2); won't work, the param is st as string
function byeDude(name = 'Mike') {
    console.log(`Goodbye ${name}`);
}
byeDude(); // by default the name is 'Mike', if we don't send any params on function the result would be: Goodbye Mike
byeDude('Maria'); // Goodbye Maria
//Optional params
function byeOptional(name) {
    if (name) {
        console.log(`Goodbye ${name}`);
    }
    else {
        console.log(`Goodbye`);
    }
}
byeOptional('Louise'); // Goodbye Louise
byeOptional(); // Goodbye Louise
// several params (required name, optional lastname and default value for age)
function severalParams(name, lastName, age = 18) {
    if (lastName) {
        console.log(`${name}, ${lastName}, is ${age} years old`);
    }
    else {
        console.log(`${name} is ${age} years old`);
    }
}
severalParams('Angie', 'Lopez', 23); // Angie, Lopez, is 23 years old
severalParams('Luke', undefined, 52); // Luke is 52 years old
// Several types of params
function severaltypes(a) {
    if (typeof (a) === 'string') {
        console.log(`a is a string`);
    }
    else if (typeof (a) === 'number') {
        console.log(`a is a number`);
    }
    else {
        console.log(`a is not string nor a number`);
        throw Error("a is not string nor a number");
    }
}
severaltypes("Hello");
severaltypes(132455);
// Return example
/**
 *
 * @param name Name string type
 * @param lastNames Last Name string type
 * @returns (name:string, lastNames:string): string  --- returns full name string type
 */
function returnExample(name, lastNames) {
    return `${name} ${lastNames}`;
}
const fullName = returnExample('James', 'Dolberg');
console.log(fullName); // James Dolberg
// Spread
/**
 *
 * @param names is a list of strings
 */
function multiParam(...names) {
    names.forEach((name) => {
        console.log(`multiParam name ${name}`);
    });
}
multiParam('Luke', 'Maria', 'Alba', 'Pete');
console.log(`************************************************************`);
/**
 *
 * @param names list string
 * @void is the response of this function. In this case it won't return anythig
 */
function listParam(names) {
    names.forEach((name) => {
        console.log(`listParams name ${name}`);
    });
}
const nameList = ['Luke', 'Maria', 'Alba', 'Pete'];
listParam(nameList);
console.log(`************************************************************`);
console.log(`************************************************************`);
let employeeAndrew = {
    name: 'Andrew',
    lastName: 'Logis',
    age: 30
};
const showEmployee = (employee) => `${employee.name} ${employee.lastName} is ${employee.age} years old`;
console.log(showEmployee(employeeAndrew));
const employeeData = (employee) => {
    if (employee.age > 70) {
        return `Employee ${employee.name} is about to retire`;
    }
    else {
        return `Employee ${employee.name} is still available`;
    }
};
console.log(employeeData(employeeAndrew));
console.log(`************************************************************`);
/**
 *
 * @param employee
 * @param getSalary type function We are sending a new function inside params. This funtions return a string `Get Monthly Salary`
 * @returns
 */
const getSalary = (employee, getPayed) => {
    if (employee.age > 70) {
        return;
    }
    else {
        console.log(getPayed());
    }
};
const payEmployee = (employee) => {
    console.log(`${employee.name} gets payed`);
};
console.log(getSalary(employeeAndrew, () => 'test this'));
console.log(`************************************************************`);
console.log(`************************************************************`);
//Async functions
function asyncExample() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('task to complete before continuing');
        console.log('Task completed');
        return 'Completed!!!!';
    });
}
asyncExample().then((response) => {
    console.log("Response", response);
}).catch((error) => {
    console.log('There has been an error', error);
}).finally(() => 'Finished async function');
//Generators
/**
 * function* is reseverd for generator function
 */
function* generatorExample() {
    //yield
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
//saving generator function in a variable
let generator = generatorExample();
// accessing to values in variable
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(`************************************************************`);
console.log(`************************************************************`);
// Worker - Watcher
function* watcher(value) {
    yield value; // initial value
    yield* worker(value); // call to worker()
    yield value + 4; // final value
}
function* worker(value) {
    yield value + 1;
    yield value + 2;
    yield value + 3;
}
let genertorSaga = watcher(0);
console.log('done by watcher', genertorSaga.next().value); // 0 (done by watcher)
console.log('done by worker', genertorSaga.next().value); // 1 (done by worker)
console.log('done by worker', genertorSaga.next().value); // 2 (done by worker)
console.log('done by worker', genertorSaga.next().value); // 3 (done by worker)
console.log('done by watcher', genertorSaga.next().value); // 4 (done by watcher)
