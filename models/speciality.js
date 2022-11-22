import  Sequelize  from "sequelize";
import sequelize from '../util/db';

const Speciality = sequelize.define('speciality', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

export default Speciality;