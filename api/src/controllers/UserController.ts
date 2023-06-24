import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  // Logic to fetch users from the database or other data source
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  res.json(users);
};

// // Get all users
// app.get('/users', (req, res) => {
//   const result = pool.query('SELECT * FROM users', (err, rows) => {
//     if (err) throw err;
//     //res.json(rows);
//     res.json(users);

//   });
// });

// // Get a user by ID
// app.get('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = users.find((u) => u.id === id);

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// // Create a new user
// app.post('/users', (req, res) => {
//   const user = req.body;
//   user.id = users.length + 1;
//   users.push(user);

//   res.status(201).json(user);
// });

// // Update a user
// app.put('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const userIndex = users.findIndex((u) => u.id === id);

//   if (userIndex !== -1) {
//     users[userIndex] = { ...users[userIndex], ...req.body };
//     res.json(users[userIndex]);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// // Delete a user
// app.delete('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const userIndex = users.findIndex((u) => u.id === id);

//   if (userIndex !== -1) {
//     const deletedUser = users[userIndex];
//     users.splice(userIndex, 1);
//     res.json(deletedUser);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });