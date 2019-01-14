import * as Router from 'koa-router';

import Controllers from './Controllers';

import CommonConstant from '../common/CommonConstant';

const router = new Router({
    prefix: CommonConstant.BASE_URL
});

router.get('/health', Controllers.health);

const Routes = router.routes();

export default Routes;
