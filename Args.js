import HelperJson from "./HelperJson.js";
import Todo from './Todo.js';
export default class Args {
    myArg = null;

    setArg() {
        let argTemp=process.argv.slice(2,3);
        return (this.myArg=argTemp.toString());
    }
    selectAction() {
        let todoList = new Todo;
        todoList.parseJson('./database/list_data.json');
        switch (this.myArg) {
            case '-l': case '--listTodo':
                    return todoList.print();
                break;
             case '-a': case '--addTodo':
                    return todoList.addTodo();
                break;
                case '-r': case '--remove':
                    return todoList.removeTodo();
                break;
            default:
                let helper = new HelperJson();
                helper.parseJson('./database/app_helper.json');
                return helper.print();
                break;
        }
    }
}