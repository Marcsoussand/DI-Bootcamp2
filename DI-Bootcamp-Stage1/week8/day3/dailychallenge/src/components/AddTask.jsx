import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";

export default function AddTask({ selectedDay }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(
      addTask({
        day: selectedDay,
        task: { id: Date.now(), text: text.trim() },
      })
    );
    setText("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder={`Add a task for ${selectedDay}...`}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
