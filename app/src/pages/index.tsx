import { TodoItem } from "../components/TodoItem";
import { TodoForm } from "../components/TodoForm";

const index = () => {
    return(
        <div>
            <TodoForm />
            <TodoItem id={1} body={'asd'} />
        </div>
    )
};

export default index;