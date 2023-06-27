import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import GameConfig from './GameConfig';
const GameConfigScreen = () => {
    const route = useRoute();
    //@ts-ignore
    const { gameId } = route.params;
    return (
        <View>
            <Text>GameConfigScreen</Text>
            <GameConfig {...gameId} />
        </View>
    )

};
export default GameConfigScreen;