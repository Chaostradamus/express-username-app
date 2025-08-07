const db = require('../db/queries');

exports.listUsernames = async (req, res) => {
  try {
    const usernames = await db.getAllUsernames();
    res.send(`
      <h1>Current Usernames</h1>
      <ul>
        ${usernames.map(u => `<li>${u.username}</li>`).join('')}
      </ul>
      <a href="/new">Add New User</a>
    `);
  } catch (err) {
    res.status(500).send('Database error');
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
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error saving username');
  }
};