import User from "../models/user";
import Speciality from "../models/speciality";
import { v4 as uuidV4 } from "uuid";
import Company from "../models/company";

const createNewCompany = async(newCompanyInputs, userId) => {
    const { name, specialityId } = newCompanyInputs;
    const user = await User.findByPk(userId);
    const speciality = await Speciality.findByPk(specialityId);
    const userCompany =  await user.getCompany();

    if(!speciality) throw new Error('no speciality with such ID');
    if(userCompany) throw new Error('user is allowed only with one company');

    const newCompany = {
        'id': uuidV4(), 
        'name': name,
        'specialityId': specialityId
    };

    await user.createCompany(newCompany);
    return { message: `New Company of ${user.names} created successfully`};
}

const getMyCompany = async(userId) => {
    const user = await User.findByPk(userId);
    const userCompany =  await Company.findOne({where: {userId: userId}, include: [Speciality]});
    if(!userCompany) throw new Error('you have no company at the moment');
    return getMyCompany;
}

const createNewProduct = async(userId, inputs) => {
    const {name, price} = inputs;
    const user = await User.findByPk(userId);
    const userCompany = await user.getCompany();
    if(!userCompany) throw new Error('you have no company at the moment');

    const newProduct = {
        id: uuidV4(),
        name: name, 
        price: price,
    };
    const createdProduct = await userCompany.createProduct(newProduct);
    return createdProduct;
}

const getMyProducts = async(userId) => {
    const user = await User.findByPk(userId);
    const userCompany = await user.getCompany();
    if(!userCompany) throw new Error('you have no company at the moment');

    const myProducts = await userCompany.getProducts();
    return myProducts;
}

export default {
    createNewCompany,
    getMyCompany,
    createNewProduct,
    getMyProducts
}