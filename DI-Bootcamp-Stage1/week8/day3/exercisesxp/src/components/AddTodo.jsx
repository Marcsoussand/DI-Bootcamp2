import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice";

export default function AddTodo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!text.trim()) return;
        dispatch(addTodo({ id: Date.now(), text, completed: false }));
        setText("");
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo..."
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
