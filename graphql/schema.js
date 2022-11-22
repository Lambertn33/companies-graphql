import { buildSchema } from "graphql";

export default buildSchema(`
    type User {
        id: ID!
        names: String!
        email: String!
    }
    type Speciality {
        type: String
    }

    type Company {
        id: ID
        name: String!
        speciality: Speciality
    }

    type newCompanyCreatedResponse {
        message: String!
    }

    input newCompanyInputs {
        name: String!
        specialityId: ID!
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
        getMyCompany: Company!
    }

    type RootMutation {
        signUp(inputs: signupInputs!): User! 
        createNewCompany(inputs: newCompanyInputs): newCompanyCreatedResponse!
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`);