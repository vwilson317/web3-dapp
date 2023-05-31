import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
// import getUsers from "../services/UserService";
import User from "../interfaces/User";
import { useState, useEffect } from "react";
import { useAppSelector } from '../hooks'
import { getUsers } from "../features/userSlice";
const SearchView = () => {
    const users = useAppSelector(getUsers);
    // const [users, setUsers] = useState([] as User[]);

    // useEffect(() => {
    //     getUsers('').then((users: User[]) => {  
    //         setUsers(users);
    //     });
    // });
    const results = () => {
        if(users.length > 0){
            return <SearchResults users={users} />
        }
        else{
            return <h2>No Results</h2>
        }
    };
    return (
        <div>
            <h1>Search View</h1>
            <SearchBar />
            {results()}
        </div>
    );
}

export default SearchView;