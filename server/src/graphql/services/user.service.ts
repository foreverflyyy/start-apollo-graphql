import {GraphQLResolveInfo} from "graphql";

interface GetUsersArgs {
    info: GraphQLResolveInfo;
}

interface GetUserArgs extends GetUsersArgs {
    id: string;
}

interface UserInput {
    email: string;
    username?: string;
}

const users = [
    {id: 1, email: "nik@mail.ru", username: "Nikolay"},
]

export const getUsers = async ({info}: GetUsersArgs) => {
    return users;
};

export const getUser = async ({id, info}: GetUserArgs) => {
    return users.find(user => user.id === Number(id));
};

export const createUser = async ({email, username}: UserInput) => {

    if(!email || !username)
        return;

    const createdUser = {
        id: Date.now(),
        email,
        username
    };

    users.push(createdUser);
    return createdUser;
};