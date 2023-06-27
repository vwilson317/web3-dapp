import { Button } from "@rneui/base";
import { IGame } from "./IGame";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Game = (game : IGame) => {
    const nav = useNavigation();

    function handleConfigOnPress() {
        //@ts-ignore
        nav.navigate('GameConfig', { gameId: game.id });
    }

    return (
        <View>
            <h3>{game.title}</h3>
            <Button title="Configure" onPress={handleConfigOnPress} />
        </View>
    )
};

export default Game;