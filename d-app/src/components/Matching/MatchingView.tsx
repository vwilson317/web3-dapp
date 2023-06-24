import { useEffect, useState } from 'react';
import ProfileCard from '../Profile/ProfileCard';
import { Button, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useEth from '../../contexts/EthContext/useEth';
// import styles from './styles/MatchingView.module.scss';
import Match from '../../interfaces/Match';
import Store from '../../../store';
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { selectCount, increment } from '../../features/counter/counterSlice';
//@ts-ignore
import styles from '../../styles/Global.scss';
// import { setCurrentScreens } from '../../features/userSlice';
import { ScreenType } from '../Drawer';

const MatchingView = ({ navigation }: any) => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //     dispatch(setCurrentScreens(ScreenType.Matching))
  // }, []);

  const { state: { contract, accounts } } = useEth();
  const [totalSupply, setTotalSupply] = useState(0);

  const countValue: number = useAppSelector(selectCount);
  const user1: User = { id: 1, name: 'user1', gender: 'm' };
  const user2: User = { id: 2, name: 'user2', gender: 'f' };
  const user3: User = { id: 3, name: 'user3', gender: 'm' };
  const user4: User = { id: 4, name: 'user4', gender: 'f' };
  const user5: User = { id: 5, name: 'user5', gender: 'm' };
  const user6: User = { id: 6, name: 'user6', gender: 'f' };

  const matchResults: Match[] = [
    {
      id: 1,
      users: [
        user1,
        user2
      ],
      date: Date.now()
    },
    {
      id: 2,
      users: [
        user4,
        user3
      ],
      date: Date.now()
    },
    {
      id: 3,
      users: [
        user5,
        user6
      ],
      date: Date.now()
    },
    {
      id: 4,
      users: [
        user1,
        user6
      ],
      date: Date.now()
    },
    {
      id: 5,
      users: [
        user2,
        user6
      ],
      date: Date.now()
    },
  ];

  const [matches, setMatches] = useState<Match[]>(matchResults);
  // const [currentIndex, setIndex] = useState<number>(0);

  function getMatch(): Match {
    if (countValue < matches.length)
      return matches[countValue];

    return matches[0];
  }

  const onClick = async () => {
    dispatch(increment())
    var result = await contract.methods.totalSupply().call();
    setTotalSupply(result);
  }

  return (
    <View className={styles.container}>
      <View className={styles.row}>
        {getMatch().users.map((user: User) => {
          return <ProfileCard key={user.id} {...user} />
        })}
      </View>
      <Button type="clear" title="Match" onPress={onClick}></Button>
      <Text>Total Supply: {totalSupply}</Text>
      <StatusBar style="auto" />
      <View />
    </View>
  );
}
export default MatchingView;