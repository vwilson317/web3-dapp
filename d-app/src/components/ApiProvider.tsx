import React from 'react';
import { ThemeProviderCustom } from './ThemeProvider';
import UserService from '../services/UserService';
import LoginService from '../services/LoginService';
import GameService from '../services/GameService';

interface ServiceContextProps {
    userApi: UserService;
    loginApi: LoginService;
    gameApi: GameService;
}

export const ServicesContext = React.createContext<ServiceContextProps | undefined>(undefined);

//@ts-ignore
const ApiProvider: React.FC = ({ children }) => {
    const userApi = new UserService("http://localhost:3333/api");
    const loginApi = new LoginService("http://localhost:3333/api");
    const gameApi = new GameService("http://localhost:3333/api");
    
    const ContextValue: ServiceContextProps = {
        userApi,
        loginApi,
        gameApi
    };

    return <ServicesContext.Provider value={ContextValue}>{children}</ServicesContext.Provider>;
}

export default ApiProvider;
