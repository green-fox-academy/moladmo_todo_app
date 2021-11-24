import fs from 'fs';
export default class Todo {
    path = './database/list_data.json';
    valueArvg = process.argv.slice(3);
    constructor(variable) {
        this.variable = variable;
    }
    parseJson() {
        return this.variable = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
    }
    addTodo() {
        if (!this.valueArvg.length) {
            console.log('Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!');
        } else {
            this.variable.push(this.valueArvg.toString());
            let json = JSON.stringify(this.variable);
            return fs.writeFileSync(this.path, json);
        }
    }
    removeTodo() {
        if (!this.valueArvg.length) {
            console.log('Nem lehetséges az eltávolítás: nem adott meg indexet!');
        } else if (this.valueArvg > this.variable.length) {
            console.log('Nem lehetséges az eltávolítás: túlindexelési probléma adódott!');
        } else if (!parseInt(this.valueArvg)) {
            console.log('Nem lehetséges az eltávolítás: a megadott index nem szám!');
        } else {
            this.variable.splice(this.valueArvg - 1, 1);
            let json = JSON.stringify(this.variable);
            return fs.writeFileSync(this.path, json);
        }
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