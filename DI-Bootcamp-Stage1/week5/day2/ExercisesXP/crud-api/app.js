const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/posts', async (req, res) => {
    const posts = await fetchPosts();
    console.log('Data successfully retrieved from JSONPlaceholder and sent as response.');
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
