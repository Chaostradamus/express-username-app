const db = require("../db/queries");

exports.listUsernames = async (req, res) => {
  try {
    const usernames = await db.getAllUsernames();
    res.send(`
      <h1>Current Usernames</h1>
      <ul>
        ${usernames.map((u) => `<li>${u.username}</li>`).join("")}
      </ul>
      <a href="/new">Add New User</a>
    `);
  } catch (err) {
    res.status(500).send("Database error");
  }
};

exports.showForm = (req, res) => {
  res.send(`
    <form method="POST" action="/new">
      <input type="text" name="username" required>
      <button type="submit">Add User</button>
    </form>
  `);
};

exports.addUsername = async (req, res) => {
  try {
    await db.insertUsername(req.body.username);
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error saving username");
  }
};

exports.listUsernames = async (req, res) => {
  try {
    const usernames = req.query.search
      ? await db.searchUsernames(req.query.search)
      : await db.getAllUsernames();

    res.send(`
      <h1>Current Usernames</h1>
      <form action="/" method="GET">
        <input type="text" name="search" placeholder="Search usernames...">
        <button type="submit">Search</button>
      </form>
      <ul>
        ${usernames.map((u) => `<li>${u.username}</li>`).join("")}
      </ul>
      <a href="/new">Add new username</a>
    `);
  } catch (err) {
    res.status(500).send("Database error");
  }

  exports.deleteUsernames = async (req, res) => {
    try {
      await db.deleteAllUsernames();
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting usernames");
    }
  };
};
