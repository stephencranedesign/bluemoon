import proxyquire from 'proxyquire';
import sinon from 'sinon';
import {expect} from 'chai';

const MODULE_PATH = './';

describe('Feature: App Index', () => {
	it('Scenario: Initialize the app', () => {
		const start = sinon.stub();

		proxyquire(MODULE_PATH, {
			'./server-core': {
				start
			}
		});

		expect(start.callCount, 'should start the server').to.equal(1);
	});
});