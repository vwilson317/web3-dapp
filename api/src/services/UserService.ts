const mysql = require('mysql');
import { User } from '../models/User';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Simple',
    port: 3306,
  });

export const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: '123', displayName: 'John Doe (Display Name)' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: '456', displayName: 'Jane Smith (Display Name)' }
  ];

export const fetchUsers = (): User[] => {
  // Logic to fetch users from the database or other data source
  return users;
};
