import { Button } from "@rneui/base";
import { IGame } from "./IGame";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useContext } from "react";
import { ServicesContext } from "../ApiProvider";

const Game = (game : IGame) => {
    const nav = useNavigation();
    const api = useContext(ServicesContext)?.gameApi;

    async function handleConfigOnPress() {
        const gameHydrated = await api?.getAsync(game.id);
        debugger
        //@ts-ignore
        nav.navigate('GameConfig', {game: gameHydrated });
    }

    return (
        <View>
            <h3>{game.title}</h3>
            <Button title="Configure" onPress={handleConfigOnPress} />
        </View>
    )
};

export default Game;