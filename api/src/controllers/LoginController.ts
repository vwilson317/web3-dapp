import { Request, Response } from 'express';
//@ts-ignore
import _ from 'lodash';
import loginAsync from '../services/AuthService';

export const login = async (req: Request, res: Response) => {
  const loginRequest = req.body;

  const loginUser = await loginAsync(loginRequest.password, loginRequest.email, loginRequest.displayName);
  if (!_.isEmpty(loginUser)) {
    res.json(loginUser);
  } else {
    res.status(204).json({ error: 'User not found' });
  }
};
