import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginUser, getLoginUser } from '../../features/userSlice';
// import { FaUser } from 'react-icons/fa';
import { Button, Input, Text } from '@rneui/themed';
import { IconType } from 'react-icons/lib';
import gStyles from '../../src/styles/Global.scss';
import { View, StyleSheet } from 'react-native';
import styles from './LoginHeader.scss';
//@ts-ignore
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';

interface LoginProps {
    icon: IconType; // Replace with the actual icon component you want to use
}

const Login: React.FC<LoginProps> = ({ icon }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = useSelector(getLoginUser);

    const handleLogin = () => {
        // Perform login logic here
        // Example: Call an API to authenticate user credentials

        // Assuming the login was successful, set the user in Redux
        const user = { name: username } as User;
        dispatch(setLoginUser(user));

        // Reset input fields
        setUsername('');
        setPassword('');
    };

    const createPress = () => {
        navigation.navigate('CreateAccount');
    }

    const LoginComponents = () => {
        return (<>
            <View className={styles.item}>
                <Input
                    className={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View className={styles.item} >
                <Input
                    className={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View className={styles.item}>
                <Button title="Login" onPress={handleLogin} />
            </View>
            <Text onPress={createPress}>Create Account</Text>
        </>
        )
    }

    const UserIdComponent = () => {
        return (
            <>
                <View style={[styles2.item, styles.icon]}>
                    <div className={styles.div}>
                    {icon}
                    </div>
                </View>
                <View className={styles2.item}>
                    <Text>{loginUser?.name}</Text>
                </View>
            </>
        )
    }

    return (
        <View className={gStyles.container}>
            <View className={gStyles.row}>
                {!_.isEmpty(loginUser) ? UserIdComponent() : <></>}
                {_.isEmpty(loginUser) ? LoginComponents() : <></>}
            </View>
        </View>
    );
};

const styles2 = StyleSheet.create({
    // row: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     paddingHorizontal: 16,
    //     paddingVertical: 8,
    // },
    item: {
        flex: 1,
        marginHorizontal: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
    },
});

export default Login;
