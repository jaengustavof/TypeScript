import { ITask, Levels } from "./interfaces/ITask";

export class Develop implements ITask {
    title: string;
    description?: string | undefined;
    completed: boolean;
    urgency?: Levels | undefined;
    
    
    constructor(title:string, description:string, completed:boolean, urgency: Levels){
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.urgency = urgency;
    }

    status = ():string => {
        return `Development task: ${this.title} - ${this.completed}`
    }
}