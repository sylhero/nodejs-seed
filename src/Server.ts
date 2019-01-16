import * as Hapi from 'hapi';
import { ApolloServer, gql } from 'apollo-server-hapi';

const config = {
    host: process.env.host || 'localhost',
    port: process.env.port || 3000
};

const init = async (): Promise<any> => {
    const server = new ApolloServer({});
    const app = new Hapi.Server({
        ...config,
        debug: { request: ['error'] },
        routes: {
            cors: true
        }
    });
    await server.applyMiddleware({
        app
    });
    await server.installSubscriptionHandlers(app.listener);
    await app.start();
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
try {
    init();
} catch (error) {
    console.log(error);
}
