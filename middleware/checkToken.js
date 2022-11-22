import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {
    let isAuth = false;
    const tokenHeader = req.header('Authorization');

    //if no token keep the isAuth to false and return immediately to next request
    if (!tokenHeader) {
        req.isAuth = isAuth;
        return next();
    }
    const token = tokenHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, 'mySecretKey');
    if (!decodedToken) {
        req.isAuth = isAuth;
        return next();
    }
    isAuth = true;
    req.isAuth = isAuth;
    req.authenticatedUser = decodedToken.user;
    return next();
}

export default checkToken;