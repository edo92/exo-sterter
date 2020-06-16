import { compose } from 'compose-middleware';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import session from './session';
import auth from './auth';

import { DOMAIN } from '../keys.config';

export default compose([
    cors({ origin: DOMAIN, credentials: true }),
    cookieParser(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    session,
    auth
])