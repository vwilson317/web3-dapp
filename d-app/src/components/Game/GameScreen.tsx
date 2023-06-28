//@ts-ignore
import styles from '../../styles/Global.scss';
import { View } from "react-native";
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
        if(!_.isEmpty(user))
            gamesApi?.getAsync(user?.id).then((usersGames) => {
                setGames(usersGames);
        });
    }, [user]);

    return (
        <View className={styles.Container}>
            <View className={styles.Row}>
                <h2>Game Screen</h2>
                {_.isEmpty(games) ? <InitDisplay /> : games.map((game) => {
                    return (
                        <Game {...game} />
                    )
                })};
            </View>
        </View>
    )
};

export default GameScreen;