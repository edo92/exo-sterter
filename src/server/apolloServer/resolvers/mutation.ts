import * as db from '../../database';
import { auth } from '../../api';

export default {
    async createUser(parent: any, args: any) {
        return await auth.register(args, db);
    },

    async authUser(parent: any, args: any, context: any) {
        return await auth.signin(args, db, context);
    }
}
