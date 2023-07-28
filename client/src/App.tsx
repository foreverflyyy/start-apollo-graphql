import React, {useState} from 'react';
import Form from "./components/Form";
import {User} from "./types/user";
import UserItem from "./components/UserItem";

function App() {

    const [users, setUsers] = useState<User[]>([
        {id: 1, email: "kenaa@example.com", username: "John Doe"},
    ]);

    const addNewUser = (email: string, username: string) => {
        const newUser = {email, username};
    }

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
