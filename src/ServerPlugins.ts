import * as pino from 'hapi-pino';
import * as Inert from 'inert';
import * as Vision from 'vision';
import * as Swagger from 'hapi-swagger';

import * as pack from '../package.json';

const pinoPlugin = {
    plugin: pino,
    options: {
        prettyPrint: process.env.NODE_ENV !== 'production',
        redact: ['req.headers.authorization']
    }
};

const swaggerPlugin = {
    plugin: Swagger,
    options: {
        info: {
            title: pack.name,
            version: pack.version
        }
    }
};

const inertPlugin = {
    plugin: Inert
};

const visionPlugin = {
    plugin: Vision
};

const ServerPlugins = [pinoPlugin, inertPlugin, visionPlugin, swaggerPlugin];

export default ServerPlugins;
