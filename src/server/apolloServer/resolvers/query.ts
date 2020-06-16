import * as db from '../../database';

export default {
    users: async (parent: any, args: any, context: any) => {
        context.auth();
        return await db.models.User.find();
    },

    user: async (args: any) => {
        return await db.models.User.find({ _id: args.id })
    },
}