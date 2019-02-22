import Handlers from './Handlers';
import Schemas from './Schemas';

const Routes = async (server: any): Promise<any> => {
    server.route({
        method: 'GET',
        path: '/health',
        handler: Handlers.healthHandler
    });
    server.route({
        method: 'POST',
        path: '/health/{name}',
        handler: Handlers.healthPostHandler,
        options: {
            description: 'get the heath by name',
            notes: 'you can add notes here',
            tags: ['api', 'health'],
            validate: Schemas.healthPost
        }
    });
};

export default Routes;
