import { useState } from "react";

type Props = {
    users: User[]
}
function SearchResults({users}: Props) {
// const [users, setUser] = useState(input);
// users.push({id: 1, name: 'test', gender: 'f'});
    return (
        <>
            <h1>Search Results</h1>
            <ol>
                {users.map((user: User) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ol>
        </>
    );
}

export default SearchResults;