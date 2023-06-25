import express from 'express';
import dotenv from 'dotenv';
//@ts-ignore
import cors from 'cors';
import userRoutes from './routes/userRoutes'; // might need to import login routes
// import loginRoutes from './routes/loginRoutes';
import { Auth } from './services/UserService'; // move this

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3333;

app.use(express.json());

Auth();

app.use('/api', userRoutes);
// app.use('/api', loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});