import * as db from '../../models';

export default {
    async createUser(parent: any, args: any, ctx: any, info: any) {
        try {
            let saved = await db.User.create({
                email: args.email,
                fullName: args.fullName,
                username: args.username,
                password: args.password
            });
        } catch (err) { throw err }
    },

    async authUser(parent: any, args: any, ctx: any, info: any) {
        let user: any = await db.User.findOne({
            email: args.email,
            password: args.password
        })

        console.log('user', user);

        if (user) {
            return {
                id: user._id,
                email: user.email,
                fullName: user.fullName,
                username: user.username
            }
        } else {
            return {
                error: true,
                message: 'user is not found'
            }
        }
    }
}
