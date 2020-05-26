
import mongoose, { Schema, Document, model } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    username: string;
}

const UserSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    }
});

export default model<IUser>('User', UserSchema);