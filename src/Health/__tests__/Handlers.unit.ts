import Handlers from '../Handlers';

test('it should return `hello world`', async ():Promise<any> => {
    const result = await Handlers.healthHandler();
    expect(result).toEqual('hello, world');
    return result;
});
