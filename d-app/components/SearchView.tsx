import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import getUsers from "../services/UserService";
import User from "../interfaces/User";

const SearchView = () => {
    const users: User[] = [];
    getUsers('').then((users: User[]) => {  
        debugger
        users.push(...users);
    });
    return (
        <div>
            <h1>Search View</h1>
            <SearchBar />
            <SearchResults {...users}/>
        </div>
    );
}

export default SearchView;