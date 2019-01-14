import * as Koa from 'koa';

import Middlewares from './Middlewares';
import Routes from './Routes';

const config = {
    host: process.env.host || 'localhost',
    port: process.env.port || 3000
};

const app = new Koa();
app.use(Middlewares);
app.use(Routes);

const Server = app.listen(config);

/* tslint:disable:no-console */
console.log(`Server running on host ${config.host} port ${config.port}`);

export default Server;
