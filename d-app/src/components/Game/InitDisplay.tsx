import { useNavigation } from "@react-navigation/native";
import { Button, Input } from "@rneui/themed";
import { useContext, useState } from "react";
import { ServicesContext } from "../ApiProvider";
import { useAppSelector } from "../../../hooks";
import { getLoginUser } from '../../features/userSlice';
import { GestureResponderEvent } from "react-native";

const InitDisplay = () => {
    const navigator = useNavigation();
    const userId = useAppSelector(getLoginUser)?.id;
    const api = useContext(ServicesContext)?.gameApi;
    const [title, setTitle] = useState<string>("");

    async function handleCreateOnPress(event: GestureResponderEvent): Promise<void> {
        const gameId: number | undefined = (await api?.createAsync(userId, title))?.id;
        //@ts-ignore
        navigator.navigate({ name: 'GameConfig', params: { gameId: gameId } });
    }

    return (
        <>
            <h3>InitDisplay</h3>
            <Input placeholder="Do you Know Me !?" value={title} onChangeText={setTitle}></Input>
            <Button title="Create Game" onPress={handleCreateOnPress}></Button>
        </>
    )
};

export default InitDisplay;