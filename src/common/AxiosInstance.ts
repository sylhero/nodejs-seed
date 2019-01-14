import axios from 'axios';

const getAxiosInstance = (ctx: any) : any => {
    const instance = axios.create({
        baseURL: ctx.headers.endpoint
    });
    return instance;
};

const AxiosInstance = {
    getAxiosInstance
};

export default AxiosInstance;
