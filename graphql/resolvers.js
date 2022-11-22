import authController from "../controllers/auth"

export default {
    signUp: async function({inputs}, req) {
        return await authController.signUp(inputs);
    }, 

    signIn: async function({inputs}, req) {
        return await authController.signIn(inputs);
    }
}