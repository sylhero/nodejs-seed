import * as pino from 'hapi-pino';

const pinoPlugin = {
    plugin: pino,
    options: {
        prettyPrint: process.env.NODE_ENV !== 'production',
        redact: ['req.headers.authorization']
    }
};

const ServerPlugins = [pinoPlugin];

export default ServerPlugins;
