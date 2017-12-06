import {query} from '../';

const TABLE = 'pages';

// page services..
const getById = async (id) => await query(`SELECT * FROM ${TABLE} WHERE pageId=${id}`);

export default {
	getById
};