import HelperJson from "./HelperJson.js";
import Todo from './Todo.js';
export default class Args {
    myArg = null;

    setArg() {
        let argTemp=process.argv.slice(2);
        return (this.myArg=argTemp.toString());
    }
    selectAction() {
        switch (this.myArg) {
            case '-l': case '--listTodo':
                    let todoList = new Todo;
                    todoList.parseJson('./database/list_data.json');
                    return todoList.print();
                break;

            case '':
                let helper = new HelperJson();
                helper.parseJson('./database/app_helper.json');
                return helper.print();
                break;
        }
    }
}