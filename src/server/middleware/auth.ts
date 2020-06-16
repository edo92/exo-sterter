import * as db from '../database';
import { SECRET_1, SECRET_2 } from '../keys.config';
import authMiddleware from 'auth-middleware-express';

const findUser = async (id: string) => {
    const user = await db.models.User.findOne({ _id: id });
    return { id: user._id.toString() };
}

export default authMiddleware(findUser, SECRET_1, SECRET_2).auth;