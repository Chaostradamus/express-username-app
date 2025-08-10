require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
// Add near other route imports
const deleteRouter = require("./routes/delete");

// Add with other app.use() calls
app.use("/delete", deleteRouter);

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
