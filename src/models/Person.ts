export class Person {
    name: string;
    lastName: string;
    age: number;

    constructor(name:string, lastName:string, age:number){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    greet():void {
        console.log(`Hello, my name is ${this.name} ${this.lastName}, I am ${this.age} years old`);
    }
}

export class Employees extends Person{

    salary: number;

    constructor(name: string, lastName:string, age:number, salary:number){
        super(name,lastName, age);// super is a call to the class that inheritance (Person in this case)
        this.salary = salary;
    }

    greet(): void { //extending the method from Person
        super.greet();
        console.log(`My salary is ${this.salary} Euros`)
    }
}

export class Boss extends Person{

    employees: Employees[] = [];

    constructor(name:string, lastName:string, age: number){
        super(name, lastName, age);
    }
}