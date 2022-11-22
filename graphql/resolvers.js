import authController from "../controllers/auth";
import companiesController from "../controllers/companies";

export default {
    signUp: async function({inputs}, req) {
        return await authController.signUp(inputs);
    }, 

    signIn: async function({inputs}, req) {
        return await authController.signIn(inputs);
    },

    createNewCompany: async function({inputs}, req) {
        const {authenticatedUser, isAuth} = req;
        if (!isAuth) throw new Error('unauthenticated');
        return await companiesController.createNewCompany(inputs, authenticatedUser.id);
    },

    getMyCompany: async function({}, req) {
        const {authenticatedUser, isAuth} = req;
        if (!isAuth) throw new Error('unauthenticated');
        return await companiesController.getMyCompany(authenticatedUser.id);
    }
}