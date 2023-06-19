import React, { useState } from 'react';
import { View, TextInput, Button, Platform, ToastAndroid } from 'react-native';
import Toast from 'react-native-toast-message';

export enum ToastType {
    success = 'success',
    error = 'error',
    info = 'info',
    any = 'any'
};

const CreateAccountScreen: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const showToast = (type: string, message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.LONG);
        } else {
            Toast.show({
                type: type,
                text1: message,
            });
        }
    };

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

        // Display success message
        showToast(ToastType.success, 'Account created successfully');
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
