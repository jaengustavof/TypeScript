export enum Levels{
    "Low",
    "Med",
    "High"
}

//Interface defines the signature and the necesary implementation
export interface ITask {
    title:string,
    description?:string, //optional
    completed:boolean,
    urgency?: Levels, //optional
    status: () => string
}