import proxyquire from 'proxyquire';
import {expect} from 'chai';

const MODULE_PATH = './index';

const withNoCallThru = (...base) => Object.assign({'@noCallThru': true}, base);

describe('Feature: db-core entry file', () => {
	it('Scenario: exported api', () => {
		const querySymbol = Symbol('query');
		const pagesSymbol = Symbol('pages');

		const query = withNoCallThru(querySymbol);
		const pages = withNoCallThru(pagesSymbol);

		const dbCore = proxyquire(MODULE_PATH, {
			'./query': query,
			'./pages': pages
		}).default;

		const expectedExports = {
			query,
			pages
		};

		expect(dbCore, 'should export expected object').to.deep.equal(expectedExports);
	});
});