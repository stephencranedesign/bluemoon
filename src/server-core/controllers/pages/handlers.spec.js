import {expect} from 'chai';
import sinon from 'sinon';
import Chance from 'chance';
import proxyquire from 'proxyquire';

const chance = new Chance();

const MODULE_PATH = './handlers';
const apiBase = '/api/pages';

describe('Feature: Page Controller Handlers', () => {
	it('Scenario: getById', async () => {
		const pageId = chance.guid();
		const data = Symbol('data');

		const req = {
			params: {
				query: {
					pageId
				}
			}
		};
		const res = {
			json: sinon.spy()
		};

		const query = sinon.stub().returns(Symbol('expected a SQL query'));

		query
			.withArgs(`SELECT * FROM pages WHERE id = ${pageId}`)
			.returns(data);

		const {getById} = proxyquire(MODULE_PATH, {
			'../../../db-core/index': {
				query
			}
		});

		await getById(req, res);

		expect(res.json.firstCall.args).to.deep.equal([data]);
	})
});