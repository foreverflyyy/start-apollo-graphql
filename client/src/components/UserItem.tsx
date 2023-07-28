import React from 'react';
import {User} from "../types/user";

interface Props {
    user: User
}

const UserItem = ({user}: Props) => {
    return (
        <div className={"userCard"}>
            <div>{user.email}</div>
            <div>{user.username}</div>
        </div>
    );
};

export default UserItem;