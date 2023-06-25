const mysql = require('mysql');
import { User } from '../models/User';
import { Sequelize } from 'sequelize';

export const Auth = async () => {
  try {
    const sequelize = new Sequelize('SimpleDb', 'sa', 'kE#uU&3NNBz9wqGN', {
      host: 'localhost',
      dialect: 'mssql',
      port: 1433,
    });

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const pool = mysql.createPool({
  host: 'localhost',
  user: 'sa',
  password: 'kE#uU&3NNBz9wqGN',
  database: 'SimpleDB',
  port: 1433,
});

export const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: '123', displayName: 'John Doe (Display Name)' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: '456', displayName: 'Jane Smith (Display Name)' }
];

export const fetchUsers = async (query?: string): Promise<User[]> => {
  // Logic to fetch users from the database or other data source
  pool.query('SELECT * FROM Users', (err: any, rows: User[]) => {
    if (err) throw err;
    return rows;
    //res.json(rows);
    // res.json(users);
  });
  return users;
};

//@ts-ignore
export const fetchUserById = async (id: number): Promise<User> => {

};
//@ts-ignore
export const createUser = async (user: User): Promise<User> => {

};
//@ts-ignore
export const updateUser = async (id: number, user: User): Promise<User> => {

};
//@ts-ignore
export const deleteUser = async (id: number): Promise<boolean> => {

};