class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName) {
        this.tasks.push({ name: taskName, completed: false });
    }

    markComplete(taskName) {
        const task = this.tasks.find(t => t.name === taskName);
        if (task) {
            task.completed = true;
        } else {
            console.log(`Task "${taskName}" not found.`);
        }
    }

    listTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks.");
            return;
        }
        this.tasks.forEach(t => {
            const status = t.completed ? "[x]" : "[ ]";
            console.log(`${status} ${t.name}`);
        });
    }
}

module.exports = TodoList;
