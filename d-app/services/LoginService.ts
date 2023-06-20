import ApiService from './ApiService';

interface LoginRequest {
  email: string;
  displayName: string;
  password: string;
}

export default class LoginService extends ApiService {
  login(lookupStr: string, password: string): Promise<LoginUser> {
    let loginRequest = {} as LoginRequest;
    // no @ in disaplyName allowed, assume email
    if (lookupStr.includes('@')) {
      loginRequest.email = lookupStr;
    } else {
      loginRequest.displayName = lookupStr;
    }
    loginRequest.password = password;

    return this.post<LoginUser>('/login', loginRequest);
  }
}