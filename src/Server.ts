import * as Hapi from 'hapi';

import ServerPlugins from './ServerPlugins';
import AppPlugins from './AppPlugins';

const server = new Hapi.Server({
    port: process.env.port || 3000,
    host: process.env.host || 'localhost',
    routes: {
        cors: true
    }
});

const init = async ():Promise<any> => {
    await server.register(ServerPlugins);
    await server.register(AppPlugins, {
        routes: {
            prefix: '/node'
        }
    });
    await server.start();
};

process.on('unhandledRejection', (err: any) => {
    console.log(err);
    process.exit(1);
});

init();
