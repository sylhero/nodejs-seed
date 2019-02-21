const healthHandler = async ():Promise<string> => {
    return 'hello, world';
};
interface HealthPost {
    name: string;
    age: number;
}
const healthPostHandler = async (request: any): Promise<HealthPost> => {
    return {
        name: request.params.name,
        age: 12
    };
};

const Handlers = {
    healthHandler,
    healthPostHandler
};

export default Handlers;
