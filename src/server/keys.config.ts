// ========= Dev =========
import dotenv from 'dotenv';
dotenv.config()
// ===========  ==========

const {
    PORT,
    DOMAIN,
    MONGODB_URI,
    SESSION_SECRET,
    NAME,
    SECRET,
    SECRET_1,
    SECRET_2,
} = process.env;

export {
    MONGODB_URI,
    SESSION_SECRET,
    NAME, DOMAIN,
    PORT, SECRET,
    SECRET_1, SECRET_2,
}