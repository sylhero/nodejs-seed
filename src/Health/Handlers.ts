const healthHandler = async ():Promise<string> => {
    return 'hello, world';
};
interface HealthPost {
    name: string;
    age: number;
}
const healthPostHandler = async (request: any): Promise<HealthPost> => {
    request.logger.info('In handler %s', request.path);
    request.logger.info('request', request);
    return {
        name: 'fdfdf',
        age: 12
    };
};

const Handlers = {
    healthHandler,
    healthPostHandler
};

export default Handlers;
