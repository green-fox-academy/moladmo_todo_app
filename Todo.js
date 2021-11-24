import fs from 'fs';
export default class Todo {
    constructor(variable) {
        this.variable = variable;
    }
    parseJson(path) {
        return this.variable = JSON.parse(fs.readFileSync(path, 'utf-8'));
    }
    addTodo(todoText) {

    }
    print() {
        if (this.variable.length == 0) {
            console.log('Nincs mára tennivalód! :)');
        } else {
            this.variable.forEach(function (item, index) {
                index++;
                console.log(`${index} - ${item}`);
            })
        }
    }
}