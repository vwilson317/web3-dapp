const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from a .env file
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Example in-memory user database
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: '123', displayName : 'John Doe (Display Name)' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: '456', displayName : 'Jane Smith (Display Name)' }
];

// Login
app.post('/login', (req, res) => {
  const loginRequest = req.body;
  // todo: implement db logic
  let loginUser = users.filter((u) => (u.email === loginRequest.email || u.displayName === loginRequest.displayName)
    && u.password === loginRequest.password);

  if (loginUser.length === 1) {
    loginUser.lastSearchDt = new Date(Date.now() + 1 * 60000);
    loginUser.assets = [];
    res.json(loginUser);
  } else{
    res.status(204).json({ error: 'User not found' });
  }
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Create a new user
app.post('/users', (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);

  res.status(201).json(user);
});

// Update a user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex !== -1) {
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
