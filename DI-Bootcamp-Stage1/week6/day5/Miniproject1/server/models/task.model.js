const fs = require ('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../tasks.json');

const readFile = () => {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (err) {
    throw new Error('Failed to read tasks file: ' + err.message);
  }
};
const writeFile = (data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error('Failed to write tasks file: ' + err.message);
  }
};

const getAll = () => readFile();
const getById = (id) => readFile().find((t) => t.id === id);
const create = ({ title, description }) => {
    const tasks = readFile();
    const task = { id: Date.now(), title, description, completed: false };
    tasks.push(task);
    writeFile(tasks);
    return task;
};
const update = (id, fields) => {
    const tasks = readFile();
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return null;
    tasks[index] = { ...tasks[index], ...fields };
    writeFile(tasks);
    return tasks[index];
};
const remove = (id) => {
    const tasks = readFile();
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return null;
    const [deleted] = tasks.splice(index, 1);
    writeFile(tasks);
    return deleted;
};

module.exports = { getAll, getById, create, update, remove };