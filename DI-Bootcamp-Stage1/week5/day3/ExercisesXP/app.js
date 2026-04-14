const express = require('express');
const app = express();

// Import the router
const indexRouter = require('./Exercise1/routes/index');

// Mount the router
app.use('/', indexRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
