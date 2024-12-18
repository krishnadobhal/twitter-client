import { GraphQLClient } from "graphql-request";

const isClient=typeof window !=="undefined"

export const graphqlClient=new GraphQLClient(
    "http://52.66.250.11:8000/graphql",
    {
        headers: () =>({
            Authorization: isClient
            ? `Bearer ${localStorage.getItem("_twitter_token")}`
            :""
        })
    }
)