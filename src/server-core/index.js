import express from 'express';
import config from 'config';
import pagesRouter from './controllers/pages';
import {listeningOnPort} from './utils/index';

const app = express();

const PORT = config.get('server').port;

const start = () => {
	app.use('/', pagesRouter);
	app.listen(PORT, listeningOnPort);
};

export {
	start
};