import User from "../interfaces/User";


export default function SearchResults(users: User[]): any {

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
