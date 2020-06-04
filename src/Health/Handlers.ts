const healthHandler = async (): Promise<{ message: string }> => {
    return { message: 'hello, world' };
};

const Handlers = {
    healthHandler
};

export default Handlers;
