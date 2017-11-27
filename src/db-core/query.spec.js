import proxyquire from 'proxyquire';
import createStubInstanceon from 'sinon';
import {expect} from 'chai';
import sinon from 'sinon';

const MODULE_PATH = './query';

class PoolMock {
	query() {}
};

describe('Feature: Query', () => {
	it('Scenario: called with sql and no params', () => {
		const config = Symbol('config');
		const sql = Symbol('sql');
		const promise = Symbol('promise');

		const namespace = { PoolMock };

		const Pool = sinon.stub(namespace, 'PoolMock').returns(Symbol('expected to be called with config'));
		const get = sinon.stub().returns(Symbol('should be called with db'));
		const queryStub = sinon.stub().returns(Symbol('expected args: (sql, [])'));

		const instance = { query: queryStub };

		get
			.withArgs('db')
			.returns(config);

		Pool
			.withArgs(config)
			.returns(instance);

		queryStub
			.withArgs(sql, [])
			.returns(promise);

		const query = proxyquire(MODULE_PATH, {
			'config': {
				get
			},
			'pg': {
				Pool
			}
		}).default;

		const result = query(sql);

		expect(Pool.calledWithNew(), 'should be called as a constructor').to.equal(true);
		expect(Pool.firstCall.args[0], 'should call constructor with config object').to.deep.equal(config);
		expect(result, 'should pass along promise').to.equal(promise);
	});

	it('Scenario: called with sql and params', () => {
		const config = Symbol('config');
		const sql = Symbol('sql');
		const promise = Symbol('promise');
		const params = Symbol('params');

		const namespace = { PoolMock };

		const Pool = sinon.stub(namespace, 'PoolMock').returns(Symbol('expected to be called with config'));
		const get = sinon.stub().returns(Symbol('should be called with db'));
		const queryStub = sinon.stub().returns(Symbol('expected args: (sql, params)'));

		const instance = { query: queryStub };

		get
			.withArgs('db')
			.returns(config);

		Pool
			.withArgs(config)
			.returns(instance);

		queryStub
			.withArgs(sql, params)
			.returns(promise);

		const query = proxyquire(MODULE_PATH, {
			'config': {
				get
			},
			'pg': {
				Pool
			}
		}).default;

		const result = query(sql, params);

		expect(Pool.calledWithNew(), 'should be called as a constructor').to.equal(true);
		expect(Pool.firstCall.args[0], 'should call constructor with config object').to.deep.equal(config);
		expect(result, 'should pass along promise').to.equal(promise);
	});
});