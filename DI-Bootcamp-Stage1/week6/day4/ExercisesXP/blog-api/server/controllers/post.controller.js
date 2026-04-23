const Post = require('../models/post.model');

const getAllPosts = (req, res) => {
  res.json(Post.getAll());
};

const getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = Post.getById(id);
  if (!post) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }
  res.json(post);
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'title and content are required.' });
  }
  const post = Post.create({ title, content });
  res.status(201).json(post);
};

const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'title and content are required.' });
  }
  const post = Post.update(id, { title, content });
  if (!post) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }
  res.json(post);
};

const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = Post.remove(id);
  if (!post) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }
  res.json({ message: `Post with id ${id} deleted.`, post });
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
