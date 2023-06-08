import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import getUsersAsync from "../services/UserService";
import User from "../interfaces/User";
import { useState, useEffect } from "react";
import { useAppSelector } from '../hooks'
import { getUsers } from "../features/userSlice";
import { set } from "react-native-reanimated";
// import '../styles/SearchingView.module.scss';
import '../src/styles/Global.scss';

const SearchView = ({ navigation }: any) => {
    const stateUsers = useAppSelector(getUsers);
    const [users, setUsers] = useState([] as User[]);

    useEffect(() => {
        setUsers(stateUsers);
    });
    const results = () => {
        if(users.length > 0){
            return <SearchResults users={users} />
        }
        else{
            return <h2>No Results</h2>
        }
    };
    return (
        <div className="test">
            <h1>Search View</h1>
            <SearchBar />
            {results()}
        </div>
    );
}

export default SearchView;