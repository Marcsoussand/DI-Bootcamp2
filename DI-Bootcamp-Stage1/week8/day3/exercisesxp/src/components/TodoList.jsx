import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const todos = useSelector((state) => state.todo.arrayofTodos);

    return (
        <>
            <h2>To Do List</h2>
            <AddTodo />
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </>
    );
}

