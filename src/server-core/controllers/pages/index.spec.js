import proxyquire from 'proxyquire';
import {expect} from 'chai';
import sinon from 'sinon';
import {getEndPoint} from '../../../../test/utils';

const MODULE_PATH = './index';

describe('Feature: Pages Controller', () => {
	it('Scenario: GET /pages/:pageId', () => {
		const get = sinon.spy();
		const router = {get};
		const routerStub = sinon.stub().returns(router);
		const getById = () => {};

		proxyquire(MODULE_PATH, {
			'express-promise-router': routerStub,
			'./handlers': {
				getById
			}
		});

		const endPoint = getEndPoint('/api/pages/:pageId', get);

		expect(endPoint.args).to.deep.equal([
			'/api/pages/:pageId',
			getById
		]);
	});
});