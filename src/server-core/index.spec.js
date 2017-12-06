import proxyquire from 'proxyquire';
import sinon from 'sinon';
import {expect} from 'chai';
import {withNoCallThru, getCallArgs} from '../../test/utils';
import Chance from 'chance';

const MODULE_PATH = './';
const chance = new Chance();

describe('Feature: Server', () => {
	it('Scenario: start', () => {
		const PORT = chance.integer();

		const pagesRouter = () => {};
		const listeningOnPort = () => {};

		const use = sinon.stub();
		const listen = sinon.spy();
		const get = sinon.stub();

		const app = {use, listen};
		const config = {get};

		const express = () => app;

		get
			.withArgs('server')
			.returns({port: PORT});

		const {start} = proxyquire(MODULE_PATH, {
			'express': withNoCallThru(express),
			'./controllers/pages': withNoCallThru(pagesRouter),
			'config': config,
			'./utils/index': {listeningOnPort}
		});

		start();

		expect(getCallArgs(listen), 'test').to.deep.equal([
			[PORT, listeningOnPort]
		]);
		expect(getCallArgs(use), 'uses pagesRouter').to.deep.equal([
			['/', pagesRouter]
		]);
	});
});