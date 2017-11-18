import {query} from '../../../db-core/index';

const getById = async (req, res) => {
	const pageId = req.params.query.pageId;
	const data = await query(`SELECT * FROM pages WHERE id = ${pageId}`);

	res.json(data);
};

export {
	getById
};