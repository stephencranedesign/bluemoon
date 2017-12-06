export const withNoCallThru = (base) => {
	if(typeof base === 'function') {
		base['@noCallThru'] = true;
		return base;
	}

	return {
		...base,
		'@noCallThru': true
	};
}

export const getEndPoint = (path, spy) => spy.getCalls().find(call => call.args[0] === path);

export const getCallArgs = spy => spy.getCalls().map(call => call.args);