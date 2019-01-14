const health = async (ctx: any): Promise<string> => {
    const response = 'Server is ok!';
    ctx.status = 200;
    ctx.body = {
        success: true,
        data: response
    };
    return Promise.resolve(response);
};

const Controllers = {
    health
};

export default Controllers;
