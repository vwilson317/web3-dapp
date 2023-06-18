import ApiService from './ApiService';
import User from "../interfaces/User";
import _ from 'lodash';

export default class UserApiService extends ApiService {
  getUsers(userName?: string): Promise<User[]> {
    const users: User[] = [];

    // Fetch users from API
    //@ts-ignore
    const nameHack: string = _.isEmpty(userName) ? "John Doe" : userName;
    users.push({id: 1, name: nameHack, gender:'m'});
    //return new Promise<User[]>((resolve, _) =>{resolve(users)});

    return this.get<User[]>('/users');
  }

  createUser(user: User): Promise<User> {
    return this.post<User>('/users', user);
  }

  updateUser(user: User): Promise<User> {
    return this.put<User>(`/users/${user.id}`, user);
  }

  deleteUser(userId: string): Promise<void> {
    return this.delete<void>(`/users/${userId}`);
  }
}