import Sequelize from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

//TODO add .env files
export default new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    logging: false
});