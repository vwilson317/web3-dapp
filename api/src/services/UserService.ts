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

export const fetchUsers = async (query?: string): Promise<User[]> => {
  // Logic to fetch users from the database or other data source
  pool.query('SELECT * FROM users', (err: any, rows: User[]) => {
    if (err) throw err;
    return rows;
    //res.json(rows);
    // res.json(users);
  });
  return users;
};

export const fetchUserById = async (id: number): Promise<User> => {

};

export const createUser = async (user: User): Promise<User> => {

};

export const updateUser = async (id: number, user: User): Promise<User> => {

};

export const deleteUser = async (id: number): Promise<boolean> => {

};