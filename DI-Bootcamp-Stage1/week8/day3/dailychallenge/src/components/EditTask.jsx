import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/tasksSlice";

export default function EditTask({ selectedDay, task, onClose }) {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (!text.trim()) return;
    dispatch(editTask({ day: selectedDay, id: task.id, text: text.trim() }));
    onClose();
  };

  return (
    <div className="edit-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSave();
          if (e.key === "Escape") onClose();
        }}
        autoFocus
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
