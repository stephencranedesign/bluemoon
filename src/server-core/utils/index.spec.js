import proxyquire from 'proxyquire';
import {expect} from 'chai';
import sinon from 'sinon';
import Chance from 'chance';
import {getCallArgs} from '../../../test/utils';

const utils = proxyquire('./index', {});
const chance = new Chance();

describe('Feature: utils', () => {
	it('Scenario: listening on port', () => {
		const PORT = chance.integer();
		const sandbox = sinon.sandbox.create();
		const log = sandbox.spy(console, 'log');

		utils.listeningOnPort(PORT);

		expect(getCallArgs(log)).to.deep.equal([
			[`listening on port: ${PORT}`]
		]);

		sandbox.restore();
	});
});