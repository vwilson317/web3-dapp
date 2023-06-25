import React from 'react';
import { ThemeProviderCustom } from './ThemeProvider';
import UserService from '../services/UserService';
import LoginService from '../services/LoginService';

interface ServiceContextProps {
    userApi: UserService;
    loginApi: LoginService;
}

export const ServicesContext = React.createContext<ServiceContextProps | undefined>(null);

const ApiProvider: React.FC = ({ children }) => {
    const userApi = new UserService("http://localhost:3333/api");
    const loginApi = new LoginService("http://localhost:3333/api");
    
    const ContextValue: ServiceContextProps = {
        userApi,
        loginApi
    };

    return <ServicesContext.Provider value={ContextValue}>{children}</ServicesContext.Provider>;
}

export default ApiProvider;
