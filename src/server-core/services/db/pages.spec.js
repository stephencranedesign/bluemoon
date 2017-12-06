import proxyquire from 'proxyquire';
import {expect} from 'chai';
import sinon from 'sinon';
import Chance from 'chance';

const MODULE_PATH = './pages';
const chance = new Chance();

describe('Feature: Server-Core Pages Service', () => {
	it('Scenario: getById', async () => {
		const pageId = chance.guid();
		const page = Symbol('page');

		const getByIdStub = sinon.stub().returns(Symbol('expected args(pageId)'));

		getByIdStub
			.withArgs(pageId)
			.returns(Promise.resolve(page));

		const {getById} = proxyquire(MODULE_PATH, {
			'../../../db-core': {
				pages: {
					getById: getByIdStub
				}
			}
		});

		const result = await getById(pageId);

		expect(result).to.deep.equal(page);
	});

	it('Scenario: getById fails', async () => {
		const pageId = chance.guid();
		const error = Symbol('error');

		const getByIdStub = sinon.stub().returns(Promise.reject(error));		

		const {getById} = proxyquire(MODULE_PATH, {
			'../../../db-core': {
				pages: {
					getById: getByIdStub
				}
			}
		});

		try {
			const result = await getById(pageId);
		} catch(err) {
			expect(err).to.deep.equal(error);
		}
	});
});