import { Validator } from 'valid-form';
import bcrypt from 'bcrypt';

const validateForm = form => {
    // Form validator
    const validate = new Validator();
    const validated = validate.formValidation(form);

    if (!validated.result.valid) {
        return { error: validated.form };
    }
}

const uniqueCredentials = async (form, db) => {
    const emailExists = await db.models.User.findOne({
        email: form.email
    })
    if (emailExists) {
        throw 'User with this email already exists'
    }

    const usernameExists = await db.models.User.findOne({
        username: form.username
    })
    if (usernameExists) {
        throw 'User with this username already exists'
    }
}

const registerUser = async (args, db) => {
    try {
        validateForm(args);

        await uniqueCredentials(args, db);

        // Hash password
        const hashed = await bcrypt.hash(args.password, 10);

        // User form
        const userForm = {
            email: args.email,
            fullName: args.fullName,
            username: args.username,
            password: hashed
        }

        // Create user / save in db
        let saved = await db.models.User.create(userForm);

        return { id: saved._id }
    }
    catch (err) { throw err }
};

export default registerUser;