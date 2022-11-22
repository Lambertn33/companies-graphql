import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './util/db';

import seedSpecialities from './seeders/specialities';

import Company from './models/company';
import Speciality from './models/speciality';
import User from './models/user';

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Contrl-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

sequelize.sync().then(() => {
    seedSpecialities();
    app.listen(3000);
});



