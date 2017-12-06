import {pages} from '../../../db-core';

const TABLE = 'pages';

// page services..
const getById = async (id) => await pages.getById(id);

export {
	getById
};