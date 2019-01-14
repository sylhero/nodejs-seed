import * as BodyParser from 'koa-bodyparser';
import * as Compose from 'koa-compose';
import * as Cors from 'koa2-cors';
import * as Logger from 'koa-pino-logger';

const ErrorHandler = async (ctx: any, next: any): Promise<any> => {
    try {
        await next();
    } catch (error) {
        ctx.log.error(error);
        if (error.name && error.name === 'ValidationError') {
            ctx.status = 400;
        } else {
            ctx.status = error.statusCode || error.status || 500;
        }
        ctx.body = {
            success: false,
            message: error.message
        };
    }
};
const Middlewares = Compose([ErrorHandler, Cors(), BodyParser(), Logger()]);

export default Middlewares;
