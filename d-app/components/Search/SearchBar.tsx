import { FC, ReactElement, useContext }  from 'react';
import { set } from "../../features/userSlice";
import UserService from "../../services/UserService";
// import getUsers from "../services/UserService";
import { useAppDispatch } from '../../hooks'
import { useState } from "react";
import { Button, Input } from "@rneui/themed";
import { ServicesContext } from "./../ApiProvider";

export default function SearchBar(): ReactElement {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();
    const api = useContext(ServicesContext)?.userApi as UserService;
    const onPress = () => {
        api.getUsers(input).then((users: any) => {
            dispatch(set(users));
        }).catch((err: any) => {
            console.log(err);
            console.log('container is probably not running')
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