import {pages} from '../../services';

const getById = async (req, res) => {
	const pageId = req.params.query.pageId;
	const data = await pages.getById(pageId);

	res.json(data);
};

export {
	getById
};