import proxyquire from 'proxyquire';
import {expect} from 'chai';
import sinon from 'sinon';
import Chance from 'chance';
import {withNoCallThru} from '../../test/utils';

const MODULE_PATH = './pages';
const chance = new Chance();

describe('Feature: DB-Core Pages', () => {
	it('Scenario: getById', async () => {
		const pageId = chance.guid()
		const page = Symbol('page');

		const expectedQuery = `SELECT * FROM pages WHERE pageId=${pageId}`;

		const query = sinon.stub().returns(Symbol('expected args(expectedQuery)'));

		query
			.withArgs(expectedQuery)
			.returns(Promise.resolve(page));

		const {getById} = proxyquire(MODULE_PATH, {
			'./query': {
				query
			}
		});

		const result = await getById(pageId);

		expect(result).to.deep.equal(page);
	});
});