"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    // constructor
    constructor(name, courses, lastName) {
        this.ID = '12321'; //This property is not accessible
        //initialize properties
        this.name = name;
        if (lastName) {
            this.lastName = lastName;
        }
        this.courses = courses;
    }
    get totalHours() {
        let totalHours = 0;
        this.courses.forEach((course) => {
            totalHours += course.hours;
        });
        return totalHours;
    }
    get student_ID() {
        return this.ID;
    }
    set change_ID(id) {
        this.ID = id;
    }
}
exports.Student = Student;
