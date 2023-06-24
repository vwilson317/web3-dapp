import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { useAppSelector } from '../../../hooks'
import { getUsers } from "../../features/userSlice";
import { set } from "react-native-reanimated";
import { StyleSheet, View } from 'react-native';

// import '../styles/SearchingView.module.scss';
import styles from '../../styles/Global.scss';
import CountDown from "./CountDown/CountDown";

const SearchView = ({ navigation }: any) => {
    const stateUsers = useAppSelector(getUsers);
    const [users, setUsers] = useState([] as User[]);

    useEffect(() => {
        setUsers(stateUsers);
    });
    const results = () => {
        if (users.length > 0) {
            return <SearchResults users={users} />
        }
        else {
            return <h2>No Results</h2>
        }
    };
    return (
        <View className={styles.container}>
            <View className={styles.row}>
                <div className="test">
                    <h1>Search View</h1>
                    <SearchBar />
                    {/* <CountDown /> */}
                    {results()}
                </div>
            </View>
        </View>
    );
}

export default SearchView;