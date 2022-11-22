import  Sequelize  from "sequelize";
import sequelize from '../util/db';

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

export default Product;