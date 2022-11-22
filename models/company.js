import  Sequelize  from "sequelize";
import sequelize from '../util/db';

import User from "./user";
import Speciality from "./speciality";

const Company = sequelize.define('company', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Company.belongsTo(User);
Company.belongsTo(Speciality);
Speciality.hasMany(Company);
User.hasOne(Company);

export default Company;