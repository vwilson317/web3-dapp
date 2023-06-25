import { Request, Response } from 'express';
import { fetchUsers } from '../services/UserService';
import { users } from '../services/UserService'; // remove when db is working

// only db call currrently
export const getUsers = async (req: Request, res: Response) => {
  // Logic to fetch users from the database or other data source
  // const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  // const query = req.query.q;
  const users = await fetchUsers();
  res.json(users);
};

// // Get a user by ID
export const getUserById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

// // Create a new user
export const create = async (req: Request, res: Response) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);

  res.status(201).json(user);
};

// // Update a user
export const update = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

// // Delete a user
export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex !== -1) {
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};