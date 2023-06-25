import { users } from  './UserService';
//@ts-ignore
import _ from 'lodash';

const loginAsync = (password: string, email?: string, displayName?: string) => {
    let loginUser = users.filter(
        (u) =>
          (u.email === email || u.displayName === displayName) &&
          u.password === password
      )[0];
    
      if (!_.isEmpty(loginUser)) {
        //@ts-ignore
        loginUser.lastSearchDt = new Date(Date.now() + 1 * 60000);
        //@ts-ignore
        loginUser.assets = [];
        return loginUser;
      } else {
        return {};
      }
}

export default loginAsync;