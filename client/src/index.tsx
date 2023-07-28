import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import './styles/index.css'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
});

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);