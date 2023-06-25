import { Router } from 'express';
import { getUsers, getUserById, create, update, deleteUser } from '../controllers/UserController';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', create);
router.put('/users/:id', update);
router.delete('/users/:id', deleteUser);

export default router;