import * as db from '../../models';

export default {
    async addUser(parent: any, args: any, ctx: any, info: any) {
        try {
            let saved = await db.User.create({
                name: args.name,
                email: args.email
            });
        }
        catch (err) { throw err }
    }
}