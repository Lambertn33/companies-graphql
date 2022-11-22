import { buildSchema } from "graphql";

export default buildSchema(`
    type User {
        id: ID!
        names: String!
        email: String!
    }

    input signinInputs {
        email: String!
        password: String!
    }

    type SigninResponse {
        token: String!
        userId: String
    }

    input signupInputs {
        names: String!
        email: String!
        password: String!
    }

    type RootQuery {
        signIn(inputs: signinInputs): SigninResponse!
    }

    type RootMutation {
        signUp(inputs: signupInputs!): User! 
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`);