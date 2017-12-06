import proxyquire from 'proxyquire';
import {expect} from 'chai';
import {withNoCallThru} from '../../../test/utils';

const MODULE_PATH = './index';

describe('Feature: db-core entry file', () => {
	it('Scenario: exported api', () => {
		const pagesSymbol = Symbol('pages');
		const pages = withNoCallThru(pagesSymbol);

		const serverServices = proxyquire(MODULE_PATH, {
			'./db/pages': pages
		});

		const expectedExports = {
			pages
		};

		expect(serverServices.default, 'should export expected object').to.deep.equal(expectedExports);
	});
});