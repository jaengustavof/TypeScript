"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Develop = void 0;
class Develop {
    constructor(title, description, completed, urgency) {
        this.status = () => {
            return `Development task: ${this.title} - ${this.completed}`;
        };
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.urgency = urgency;
    }
}
exports.Develop = Develop;
