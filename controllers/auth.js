import bcrypt from 'bcryptjs';
import { v4 as uuidV4 } from 'uuid';
import jwt from 'jsonwebtoken';

import User from '../models/user';

const signUp = async(userInputs) => {
    const {names, email, password} = userInputs;
    const user = await User.findOne({where: {email: email}});
    if (user) throw new Error('email already exists');

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = {
        id: uuidV4(),
        names: names,
        email: email,
        password: hashedPassword
    };
    const createdUser = await User.create(newUser);
    return createdUser;
}

const signIn = async(userInputs) => {
    const {email, password} = userInputs;
    const user = await User.findOne({where: {email, email}});
    if (!user) throw new Error('invalid email');

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) throw new Error('invalid password');

    const token = jwt.sign({user: user}, 'mySecretKey', {expiresIn: '1h'});
    return {
        userId: user.id,
        token: token
    };
}

export default {
    signUp,
    signIn
}