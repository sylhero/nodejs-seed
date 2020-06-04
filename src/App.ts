import * as fastify from 'fastify';
import * as cors from 'fastify-cors';
import { Http2Server, Http2ServerRequest, Http2ServerResponse } from 'http2';
import { registerRoutes } from './Routes';
const server: fastify.FastifyInstance<Http2Server, Http2ServerRequest, Http2ServerResponse> = fastify({
    http2: true,
    logger: true
});
server.register(cors);
registerRoutes(server);
const start = async () => {
    try {
        await server.listen(3000);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
