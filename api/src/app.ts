import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import _ from 'lodash';
import { Request, Response } from 'express';
import { users } from './services/UserService';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3333;

app.use(express.json());

app.use('/api', userRoutes);

app.post('/login', (req: Request, res: Response) => {
  const loginRequest = req.body;
  let loginUser = users.filter(
    (u) =>
      (u.email === loginRequest.email || u.displayName === loginRequest.displayName) &&
      u.password === loginRequest.password
  )[0];

  if (!_.isEmpty(loginUser)) {
    loginUser.lastSearchDt = new Date(Date.now() + 1 * 60000);
    loginUser.assets = [];
    res.json(loginUser);
  } else {
    res.status(204).json({ error: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});