import * as path from 'path';
import * as express from 'express';
import * as session from 'express-session';

class Server {
    private config: any;
    private routes: any;

    constructor(routes: object, config: object) {
        this.config = config;
        this.routes = routes
    }

    private app = express();

    public start = (): void => {
        // Sesstion
        this.app.set('trust proxy', 1);
        this.app.use(session(this.config.session));

        // Routes
        this.app.use(this.routes);

        // Static
        this.app.use(express.static('public'));

        // Index.html
        this.app.use('*', (req: any, res: any) => {
            res.sendFile(path.join(__dirname, this.config.publicPath));
        })

        // Listen
        const port = this.config.port;
        this.app.listen(port, () => console.log(`Server listening on port: ${port}`));
    }
}

export default Server;