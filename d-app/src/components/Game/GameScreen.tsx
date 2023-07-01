//@ts-ignore
import { View, Text } from "react-native";
import InitDisplay from './InitDisplay';
//@ts-ignore
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import Game from './Game';
import { ServicesContext } from '../ApiProvider';
import { useSelector } from 'react-redux';
import { getLoginUser } from '../../features/userSlice';
import { IGame } from './IGame';
import { useAppSelector } from '../../../hooks';

const GameScreen = () => {
    const [games, setGames] = useState<IGame[]>([]);
    const [selectedGame, setSelectedGame] = useState<IGame | undefined>();
    const gamesApi = useContext(ServicesContext)?.gameApi;
    const user = useAppSelector(getLoginUser);

    useEffect(() => {
        //@ts-ignore
        if (!_.isEmpty(user)){
            gamesApi?.getByUserIdAsync(user?.id).then((usersGames) => {
                setGames(usersGames);
            });
        }

    }, [user]);

    return (
        <View>
            <h2>Game Screen</h2>
            <>
                {_.isEmpty(games) ? <Text>No Games Available</Text> : games?.map((game) => {
                    return (
                        <Game {...game} />
                    )
                })};
            </>
        </View>
    )
};

export default GameScreen;