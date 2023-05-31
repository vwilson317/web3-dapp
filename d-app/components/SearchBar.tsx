import { set } from "../features/userSlice";
import getUsers from "../services/UserService";
import { useAppSelector, useAppDispatch } from '../hooks'
import { useState } from "react";
import { Button, Input } from "@rneui/themed";

export default function SearchBar(): any {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();

    const onPress = () => {
        debugger
        getUsers(input).then((users: any) => {
            dispatch(set(users));
        });
    };

    return (
        <>
            <Input value={input} onChangeText={setInput}></Input>
            <Button onPress={onPress}>Search</Button>
        </>
    );
};