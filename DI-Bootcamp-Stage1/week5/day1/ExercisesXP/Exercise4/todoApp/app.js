const TodoList = require('./todo.js');

const myList = new TodoList();

myList.addTask("Buy groceries");
myList.addTask("Read a book");
myList.addTask("Go for a walk");

myList.markComplete("Buy groceries");
myList.markComplete("Go for a walk");

console.log("--- Todo List ---");
myList.listTasks();
