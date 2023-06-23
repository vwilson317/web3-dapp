import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { showToast, ToastType } from '../../common/ToastUtil';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../hooks';
import { setLoginUser } from '../../features/userSlice';
import { ServicesContext } from '../ApiProvider';
import { ScreenType } from '../Drawer';

const CreateAccountScreen: React.FC = () => {
    const [username, setUsername] = useState('test');
    const [password, setPassword] = useState('12345678');
    const [confirmPassword, setConfirmPassword] = useState('12345678');
    const [email, setEmail] = useState('1@dsfdsa.com');
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    //@ts-ignore
    const userApi = useContext(ServicesContext).userApi;

    // useEffect(() => {
    //     navigation.
    //     dispatch(setCurrentScreens(ScreenType.CreateAccount));
    // }, []);

    const handleCreateAccount = () => {
        // Password complexity validation
        if (password.length < 8) {
            showToast(ToastType.error, 'Password should be at least 8 characters long');
            return;
        }

        if (password !== confirmPassword) {
            showToast(ToastType.error, 'Passwords do not match');
            return;
        }
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast(ToastType.error, 'Invalid email format');
            return;
        }

        // Call API or perform further actions here for creating an account
        //const _ = userApi.createUser(username, email, password); //not implemented yet
        const user: LoginUser = {
            displayName: username,
            email: email,
            password: password
        }
        dispatch(setLoginUser(user));
        // Display success message
        // showToast(ToastType.success, 'Account created successfully');
        //navigation.navigate('MyMatches');
    };

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <TextInput
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
            />

            <Button title="Create Account" onPress={handleCreateAccount} />
        </View>
    );
};

export default CreateAccountScreen;
