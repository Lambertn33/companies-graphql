import express from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';

import sequelize from './util/db';
import seedSpecialities from './seeders/specialities';
import graphSchema from './graphql/schema';
import graphResolver from './graphql/resolvers';
import checkToken from './middleware/checkToken';

import User from './models/user';
import Speciality from './models/speciality';
import Company from './models/company';
import Product from './models/product';

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Contrl-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(checkToken);
app.use('/graphql', graphqlHTTP({
    schema: graphSchema,
    rootValue: graphResolver,
    graphiql: true
}));

sequelize.sync().then(() => {
    seedSpecialities();
    app.listen(3000);
});



