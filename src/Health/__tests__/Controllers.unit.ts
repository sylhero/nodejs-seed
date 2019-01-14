import Controllers from '../Controllers';

describe('Controllers', () => {
    const ctx: any = {};

    it('should return `Server is ok!`', async () => {
        const result = await Controllers.health(ctx);
        expect(result).toEqual('Server is ok!');
    });
});
