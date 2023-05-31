import User from "../interfaces/User";


export default function SearchResults(): any {

    const items: User[] = [{ id: 1, name: 'x', gender: 'm' }];
    return (
        <>
            <h1>Search Results</h1>
            <ol>
                {items.map((user: User) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ol>
        </>
    );
}
