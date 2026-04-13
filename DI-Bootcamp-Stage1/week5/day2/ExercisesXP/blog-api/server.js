const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simulated database
let posts = [
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
    { id: 3, title: "Third Post", content: "This is the content of the third post." }
];

let nextId = 4;

// GET /posts - Return all blog posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id - Return a specific blog post
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ error: `Post with id ${req.params.id} not found.` });
    }
    res.json(post);
});

// POST /posts - Create a new blog post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "title and content are required." });
    }
    const newPost = { id: nextId++, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id - Update an existing blog post
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ error: `Post with id ${req.params.id} not found.` });
    }
    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;
    res.json(post);
});

// DELETE /posts/:id - Delete a blog post
app.delete('/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: `Post with id ${req.params.id} not found.` });
    }
    const deleted = posts.splice(index, 1)[0];
    res.json({ message: "Post deleted successfully.", post: deleted });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found." });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error." });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
