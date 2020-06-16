import bcrypt from 'bcrypt';
import { createTokens } from './dist';
import { SECRET_1, SECRET_2 } from '../../keys.config';

const signinUser = async (form, db, context) => {
    try {
        // Find use in db
        let user: any = await db.models.User.findOne({
            email: form.email,
        })

        // Compare password, plain with hashed
        const match = await bcrypt.compare(form.password, user.password);

        if (user && match) {
            // Create token for user/if found with credentials
            const [token, refreshToken] = await createTokens(user, SECRET_1, SECRET_2);

            // Set cookies for user
            context.setCookie({ token, refreshToken });

            return { token, refreshToken }
        }
        // Error if use doesnt exist
        throw 'Use with this credentials do not exist';
    }
    catch (err) { throw err };
}

export default signinUser;