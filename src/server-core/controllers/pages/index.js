import promiseRouter from 'express-promise-router';
import {getById} from './handlers';

const router = promiseRouter();
const baseUrl = '/api/pages';

router.get(`${baseUrl}/:pageId`, getById);

export default router;