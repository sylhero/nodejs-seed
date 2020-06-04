import HealthRoutes from './Health/Routes';

const rootRoutes = [...HealthRoutes];
export const registerRoutes = (server: any) => {
    rootRoutes.forEach((route) => {
        server.route(route);
    });
};

const Routes = {
    registerRoutes
};
export default Routes;
