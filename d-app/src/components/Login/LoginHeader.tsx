import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginUser, getLoginUser } from '../../features/userSlice';
// import { FaUser } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
//@ts-ignore
import { View, StyleSheet, TouchableOpacity, TextInput, Button, Text } from 'react-native';
//@ts-ignore
import styles from './LoginHeader.scss';
//@ts-ignore
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { ServicesContext } from '../ApiProvider';
// import ToastContainerWebOnly, { showToast, ToastType } from '../../common/ToastUtil';
import SubMenu from '../SubMenu';
import { User } from '../../../types/global';

interface LoginProps {
    icon: IconType; // Replace with the actual icon component you want to use
}

const Login: React.FC<LoginProps> = ({ icon }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>('user7@example.com');//useState<string>('John Doe (Display Name)')
    const [password, setPassword] = useState<string>('password7');//useState('');
    const user = useSelector(getLoginUser);
    const [isOpen, setIsOpen] = useState(false);
    const userService = useContext(ServicesContext)?.userApi;

    // useEffect(() => {
    //     dispatch(setCurrentScreens(ScreenType.Login))
    // }, []);

    const handleLogin = async () => {
        const result: User = await userService?.login(username, password);
        if (_.isEmpty(result)) {
            showToast(ToastType.error, 'Invalid username or password');
        } else {
            // Assuming the login was successful, set the user in Redux
            // const user = { name: username } as LoginUser;
            dispatch(setLoginUser(result));
        }
        // Reset input fields
        // setUsername('');
        // setPassword('');
    };

    const handleLogout = () => {
        //@ts-ignore
        dispatch(setLoginUser(undefined));
        handleToggleSubMenu();
    };

    const handleToggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    const createPress = () => {
        //@ts-ignore
        navigation.navigate('CreateAccount');
    }

    const LoginComponents = () => {
        return (
            <View className="grid grid-cols-5 gap-1 items-center text-xs mr-11">
                <div className='col-span-4'>
                    <View className="flex flex-row">
                        <TextInput className="w-1/2 border-1 border-color-gray-400 pt-2 pb-2 "
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                            textContentType='username'
                        />
                        <TextInput
                            className="w-1/2"
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            textContentType='password'
                        />
                    </View>
                </div>
                <div className="col-span-1 text-center">
                    <Button title="Login" onPress={handleLogin} className={'bg-blue-500'} />
                    <Text onPress={createPress} className="text-blue-500 underline">
                        Create Account
                    </Text>
                </div>
            </View >
        );
    };

    const UserIdComponent = () => {
        return (
            <TouchableOpacity onPress={handleToggleSubMenu} >
                <div>
                    <div className="">
                        {/*@ts-ignore*/}
                        {icon}
                    </div>
                </div>
                <div>
                    <Text>{user?.displayName}</Text>
                </div>
                <SubMenu onLogout={handleLogout} isOpen={isOpen} />
            </TouchableOpacity>
        );
    };

    return (
        <div className="hidden md:flex">
            {!_.isEmpty(user) ? (
                <UserIdComponent />
            ) : (
                <LoginComponents />
            )}
        </div>
    );
};

export default Login;
