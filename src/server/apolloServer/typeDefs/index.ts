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
        repPassword: String!
    ): RegisterForm

    authUser(
        email: String!
        password: String!
    ): AuthForm
}


type User {
    id: ID
    email: String
    fullName: String
    username: String
}

type AuthForm {
    token: String
    refreshToken: String
}

type RegisterForm {
    id: ID!
}
`