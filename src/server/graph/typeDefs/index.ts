export default `
type Query {
    users: [User!]!
    user(id: ID!): User
}

type Mutation {
    addUser(email: String!, name: String): User
}

type User {
    id: ID!
    email: String!
    name: String
}`