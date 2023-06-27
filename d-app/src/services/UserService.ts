import ApiService from './ApiService';
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

  login(lookupStr: string, password: string): Promise<User> {
    let loginRequest = {} as LoginRequest;
    // no @ in disaplyName allowed, assume email
    if (lookupStr.includes('@')) {
      loginRequest.email = lookupStr;
    } else {
      loginRequest.displayName = lookupStr;
    }
    loginRequest.password = password;

    return this.post<User>('/users/login', loginRequest);
  }

  create(user: User): Promise<User> {
    return this.post<User>('/users', user);
  }

  updateUser(user: User): Promise<User> {
    return this.put<User>(`/users/${user.id}`, user);
  }

  deleteUser(userId: string): Promise<void> {
    return this.delete<void>(`/users/${userId}`);
  }
}