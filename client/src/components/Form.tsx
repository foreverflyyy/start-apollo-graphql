import React, {useState} from 'react';

interface Props {
    addNewUser: (email: string, username: string) => void;
}

const Form = ({addNewUser}: Props) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    return (
        <div className="form">
            <input
                type="text"
                className={"input"}
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="text"
                className={"input"}
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <button
                className={"btn"}
                onClick={() => addNewUser(email, username)}
            >
                Click
            </button>
        </div>
    );
};

export default Form;