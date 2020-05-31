import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    }
});

export default mongoose.model('User', UserSchema);