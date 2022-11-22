import  Sequelize  from "sequelize";
import sequelize from '../util/db';

import User from "./user";
import Speciality from "./speciality";
import Product from "./product";

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

User.hasOne(Company);
Company.belongsTo(User);
Company.belongsTo(Speciality);
Speciality.hasMany(Company);
Company.hasMany(Product);
Product.belongsTo(Company);

export default Company;