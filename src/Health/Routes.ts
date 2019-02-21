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
            validate: Schemas.healthPost
        }
    });
};

export default Routes;
