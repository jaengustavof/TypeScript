import { Course } from "./Courses"; // if Course.ts file has a export default, then we import it without {} else we need to enter the class between {};

export class Student {
    // class properties
    name:string;
    lastName?:string;//lastName is optional
    courses: Course[];

    private ID: string = '12321'; //This property is not accessible

    // constructor
    constructor(name:string, courses: Course[], lastName?:string){ //lastName is optional
        //initialize properties
        this.name = name;
        if(lastName){
            this.lastName = lastName;
        }     
        this.courses = courses;
    }

    get totalHours ():number{
        let totalHours = 0;
        this.courses.forEach((course: Course)=>{
            totalHours += course.hours;
        })
        return totalHours;
    }


    get student_ID ():string{
        return this.ID;
    }

    set change_ID (id: string){
        this.ID = id;
    }

    
}
