import React, { useState, useContext, useEffect, FormEvent } from 'react';
import { View, TextInput, Button } from 'react-native';
import { showToast, ToastType } from '../../common/ToastUtil';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../../hooks';
import { setLoginUser } from '../../features/userSlice';
import { ServicesContext } from '../ApiProvider';
import { ScreenType } from '../Drawer';
import { User } from '../../../types/global';
import { Input } from '@rneui/themed';
import { DropdownMultiselectView } from 'expo-dropdown-multiselect';

const CreateAccountScreen: React.FC = () => {
    const [username, setUsername] = useState('test');
    const [name, setName] = useState('Hello_From_DApp');
    const [password, setPassword] = useState('12345678');
    const [confirmPassword, setConfirmPassword] = useState('12345678');
    const [email, setEmail] = useState('1@dsfdsa.com');
    const [selectedItem, setSelectedItem] = useState(0);
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const options = [
        { key: 0, value: 'Male' },
        { key: 1, value: 'Female' },
        { key: 2, value: 'Other' }
    ]
    //@ts-ignore
    const userApi = useContext(ServicesContext).userApi;

    // useEffect(() => {
    //     navigation.
    //     dispatch(setCurrentScreens(ScreenType.CreateAccount));
    // }, []);

    const handleCreateAccount = async () => {
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
        const user = {
            name: name,
            displayName: username,
            email: email,
            password: password,
            gender: selectedItem
        };

        const loginUser = await userApi.create(user);
        dispatch(setLoginUser(loginUser));
        // Display success message
        // showToast(ToastType.success, 'Account created successfully');
        //navigation.navigate('MyMatches');
    };

    const handleSelectChange = (event: FormEvent<HTMLSelectElement>): void => {
        var selectedIndex = event.currentTarget.selectedIndex;
        setSelectedItem(selectedIndex)
    }

    return (
        <View style={{ flex: 1 }}>
            <View>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
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
            <select onChange={handleSelectChange}>
                {options.map((option) => {
                    return (
                        <option key={option.key} value={option.value}>
                            {option.value}
                        </option>
                    );
                })}
            </select>
            {/* <DropdownMultiselectView
                data={[
                    { key: 0, value: 'Male' },
                    { key: 1, value: 'Female' },
                    { key: 2, value: 'Other' },
                ]}
                displayKey="value"
                displayValue="key"
                selectedItem={selectedItems}
                setSelectedItem={setSelectedItems}
            /> */}

            <Button title="Create Account" onPress={handleCreateAccount} />
        </View>
    );
};

export default CreateAccountScreen;
