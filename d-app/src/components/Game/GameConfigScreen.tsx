import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import GameConfig from './GameConfig';
//@ts-ignore
import _ from 'lodash';

const GameConfigScreen = ({ route }) => {
    // const route = useRoute();
    //@ts-ignore
    debugger
    const game = route.params.game as IGame;
    return (
        <View>
            {_.isEmpty(game) ? <h1>Select an existing game or Create a New Game</h1>
                :
                <>
                    <h1>Configuration for Game: {game.title}</h1>
                    <GameConfig game={game} />
                </>
            }
        </View>
    )

};
export default GameConfigScreen;