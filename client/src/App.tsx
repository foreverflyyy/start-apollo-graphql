import React, {useState} from 'react';
import Form from "./components/Form";
import {User} from "./types/user";
import UserItem from "./components/UserItem";
import { gql, useQuery } from "@apollo/client";

function App() {

    const [users, setUsers] = useState<User[]>([
        {id: 1, email: "kenaa@example.com", username: "John Doe"},
    ]);

    const GET_USERS = gql`
        query GetUsers {
            users {
                id
                email
                username
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_USERS);

    const addNewUser = (email: string, username: string) => {
        const newUser = {email, username};
        console.log(data);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="App">
            <div style={{fontSize: 25}}>Hi!</div>
            <Form
                addNewUser={addNewUser}
            />
            <div>
                <h2>List users: </h2>
                {users?.map((user: User) =>
                    <UserItem key={user.id} user={user}/>
                )}
            </div>
        </div>
  );
}

export default App;
