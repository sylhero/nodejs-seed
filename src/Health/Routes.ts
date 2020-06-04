import Handlers from './Handlers';

const Routes = [
    {
        method: 'GET',
        url: '/health',
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                }
            }
        },
        handler: Handlers.healthHandler
    }
];

export default Routes;
