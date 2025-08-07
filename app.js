require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');

app.use('/', indexRouter);
app.use('/new', newRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});