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

		const pages = sinon.stub().returns(Symbol('expected args(pageId)'));

		pages
			.withArgs(pageId)
			.returns(data);

		const {getById} = proxyquire(MODULE_PATH, {
			'../../services': {
				pages: {
					getById: pages
				},
				query: () => {}
			}
		});

		await getById(req, res);

		expect(res.json.firstCall.args).to.deep.equal([data]);
	})
});