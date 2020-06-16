import session from 'express-session';
import { SESSION_SECRET, DOMAIN, NAME } from '../keys.config';

const config = {
    name: NAME,
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        domain: DOMAIN,
        maxAge: (60 * 60 * 10000),
        sameSite: true,
        secure: false,
        httpOnly: true
    }
}

export default session(config);