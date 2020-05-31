import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    fullName: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
});

export default mongoose.model('User', UserSchema);