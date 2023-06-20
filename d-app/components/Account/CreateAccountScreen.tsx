import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { showToast, ToastType } from '../../common/ToastUtil';

const CreateAccountScreen: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');


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
