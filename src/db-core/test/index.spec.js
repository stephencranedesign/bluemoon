import proxyquire from 'proxyquire';
import {expect} from 'chai';
import {withNoCallThru} from '../../../test/utils';

const MODULE_PATH = '../index';

describe('Feature: db-core entry file', () => {
	it('Scenario: exported api', () => {
		const querySymbol = Symbol('query');
		const pagesSymbol = Symbol('pages');

		const query = querySymbol;
		const pages = withNoCallThru(pagesSymbol);

		const dbCore = proxyquire(MODULE_PATH, {
			'./query': {
				query
			},
			'./services/pages': pages
		});

		const expectedExports = {
			query,
			pages
		};

		expect(dbCore, 'should export expected object').to.deep.equal(expectedExports);
	});
});