// import express from 'express';
// import {query} from '../../db-core/index';
// import Router from 'express-promise-router';

// const router = Router();
// const baseUrl = '/api/pages';

// const queryHandler = async statement => {
// 	try {
// 		const data = await query(sql);

// 		return data;
// 	} catch(err) {
// 		return err;
// 	}
// };

// router.get(`${baseUrl}/:pageId`, async (req, res) => {
// 	const {pageId} = req.params.pageId;
// 	const sql = `SELECT * FROM pages WHERE id = ${pageId}`;

// 	await result = queryHanlder(statement);

// 	res.json(result);
// });

// export default router;