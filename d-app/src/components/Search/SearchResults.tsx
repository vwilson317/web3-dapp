import { useState } from "react";

type Props = {
    users: User[]
}
function SearchResults({users}: Props) {
    return (
        <>
            <h1>Search Results</h1>
            <ol>
                {users.map((user: User) => {
                    return <li key={user.id}><a>{user.name}</a></li>
                })}
            </ol>
        </>
    );
}

export default SearchResults;