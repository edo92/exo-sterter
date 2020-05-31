import * as db from '../../models';

export default {
    users: async () => {
        return await db.User.find();
    },

    user: async (args: any) => {
        return await db.User.find({ _id: args.id })
    },
}