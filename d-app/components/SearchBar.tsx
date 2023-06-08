import { set } from "../features/userSlice";
import getUsers from "../services/UserService";
import { useAppDispatch } from '../hooks'
import { useState } from "react";
import { Button, Input } from "@rneui/themed";
// import { getAsync } from "../features/userSlice";

export default function SearchBar(): any {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();

    const onPress = () => {
        getUsers(input).then((users: any) => {
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