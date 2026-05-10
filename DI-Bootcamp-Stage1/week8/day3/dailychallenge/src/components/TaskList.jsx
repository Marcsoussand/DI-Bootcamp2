import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasksSlice";
import EditTask from "./EditTask";

export default function TaskList({ selectedDay }) {
  const tasks = useSelector((state) => state.tasks[selectedDay]);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="task-list">
      {tasks.length === 0 && (
        <p className="empty">No tasks for {selectedDay}.</p>
      )}
      {tasks.map((task) =>
        editingId === task.id ? (
          <EditTask
            key={task.id}
            selectedDay={selectedDay}
            task={task}
            onClose={() => setEditingId(null)}
          />
        ) : (
          <div key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => setEditingId(task.id)}>Edit</button>
            <button
              onClick={() =>
                dispatch(deleteTask({ day: selectedDay, id: task.id }))
              }
            >
              Delete
            </button>
          </div>
        )
      )}
    </div>
  );
}
