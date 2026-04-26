const Task = require('../models/task.model');
const getAllTasks = (req, res) => {
  res.status(200).json(Task.getAll());
};

const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = Task.getById(id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'title and description are required.' });
  }
  const task = Task.create({ title, description });
  res.status(201).json(task);
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const fields = req.body;
  if (!fields || Object.keys(fields).length === 0) {
    return res.status(400).json({ message: 'No fields provided to update.' });
  }
  const task = Task.update(id, fields);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = Task.remove(id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };