import  Sequelize  from "sequelize";
import sequelize from '../util/db';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    names: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default User;