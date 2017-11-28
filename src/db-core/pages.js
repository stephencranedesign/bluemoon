import {query} from './query';

const TABLE = 'pages';

// page services..
const getById = async (id) => await query(`SELECT * FROM ${TABLE} WHERE pageId=${id}`);

export {
	getById
};