export default `
type Query {
    users: [User!]!
    user(id: ID!): User
}

type Mutation {
    createUser(
        email: String!
        fullName: String!
        username: String!
        password: String!
    ): User

    authUser(
        email: String!
        password: String!
    ) : User
}

type User {
    id: ID!
    email: String!
    fullName: String!
    username: String!
    password: String!
}
`