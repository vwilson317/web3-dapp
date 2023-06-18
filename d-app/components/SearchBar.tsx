import { FC, ReactElement }  from 'react';
import { set } from "../features/userSlice";
import UserService from "../services/UserService";
// import getUsers from "../services/UserService";
import { useAppDispatch } from '../hooks'
import { useState } from "react";
import { Button, Input } from "@rneui/themed";
// import { getAsync } from "../features/userSlice";

export default function SearchBar(): ReactElement {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();
    const api = new UserService('http://localhost:3000');
    const onPress = () => {
        api.getUsers(input).then((users: any) => {
            debugger
            dispatch(set(users));
        });
    };

    const enterPress = (e: any) => {
        if(e.keyCode === 13){
            e.preventDefault();
            onPress();
        }
    }

    return (
        <>
            <Input value={input} onChangeText={setInput} onKeyPress={enterPress}></Input>
            <Button onPress={onPress}>Search</Button>
        </>
    );
};