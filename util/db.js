import Sequelize from 'sequelize';

//TODO add .env files
export default new Sequelize('companies', 'postgres', 'lambert12345', {
    dialect: 'postgres',
    logging: false
});