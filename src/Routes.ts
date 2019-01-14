import * as Compose from 'koa-compose';

import HealthRoutes from './Health/Routes';

const Routes = Compose([HealthRoutes]);

export default Routes;
