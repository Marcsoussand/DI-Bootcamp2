const Post = require('../models/post.model');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'id must be a number.' });

    const post = await Post.getById(id);
    if (!post) return res.status(404).json({ error: `Post with id ${id} not found.` });

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: 'title is required and must be a non-empty string.' });
    }
    if (!content || typeof content !== 'string' || content.trim() === '') {
      return res.status(400).json({ error: 'content is required and must be a non-empty string.' });
    }

    const post = await Post.create({ title: title.trim(), content: content.trim() });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'id must be a number.' });

    const { title, content } = req.body;
    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: 'title is required and must be a non-empty string.' });
    }
    if (!content || typeof content !== 'string' || content.trim() === '') {
      return res.status(400).json({ error: 'content is required and must be a non-empty string.' });
    }

    const post = await Post.update(id, { title: title.trim(), content: content.trim() });
    if (!post) return res.status(404).json({ error: `Post with id ${id} not found.` });

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'id must be a number.' });

    const deleted = await Post.remove(id);
    if (!deleted) return res.status(404).json({ error: `Post with id ${id} not found.` });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
