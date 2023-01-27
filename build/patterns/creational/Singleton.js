"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor() { }
    /**
    * The static method that controls the access to the singleton instance.
    *
    * This implementation let you subclass the Singleton class while keeping
    * just one instance of each subclass around.
    */
    static getInstance() {
        if (!Singleton.instance) { //if the instance is not created, it will create one. In this case we have it on line 5.
            Singleton.instance = new Singleton(); //instance is created
        }
        return Singleton.instance;
    }
    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    showInConsole() {
        console.log('Singleton Method');
    }
}
exports.Singleton = Singleton;
