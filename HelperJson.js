import fs from 'fs';
export default class HelperJson {
    constructor(variable){
    this.variable=variable;
    }
    parseJson(path) {
        return this.variable = JSON.parse(fs.readFileSync(path, 'utf-8'));
    }
    print(){
        this.variable.forEach(function(item, index) {
            if (index >3) {
                console.log (Object.values(item).join('\t'));
            } else console.log( item);
        });
    }
}