describe('containify', function() {
	let containify, cFunc, cState, myContext, xContext, myQuery;
	let modify, modContext, hidContext, hideMethod;
	beforeAll(function() {
		console.log('\n.........containify Spec.........');
		containify = this.GR.ArrayUtils.containify;
		modify = containify.modify;
		hideMethod = containify.hideMethod;
		cFunc = (query) => (el) => ((el + query) % 2) === 0;
		cState = containify(cFunc);
		myContext = [2, 6, 8, 10];
		xElements = [9, 3, 7, 5];
		modContext = modify(cFunc)(Array.from(myContext));
		hidContext = hideMethod(cFunc)(Array.from(myContext));
	});
	describe('when given a curryable function', () => {
		it('returns a function', function() {
			expect(cState).toBeFunction();
		});
		describe('when given a set of collection', () => {
			it('returns an object', function() {
				expect(cState(myContext)).toBeObject();
			});
			describe('contains', () => {
				it(
					'applies the curried function to the query and calls it on each element',
					function() {
						expect(cState(myContext).contains(
							2)).toBeTrue();
					});
			});
		});
	});
	describe('modify', () => {
		describe('when given a curryable function', () => {
			it('returns a function', function() {
				expect(modify(cFunc)).toBeFunction();
			});
			describe('when given a  collection', () => {
				it('returns an Array', function() {
					expect(modContext).toBeArray();
				});
				describe('Object.keys', () => {
					it('contains "contains"', function() {
						expect(Object.keys(
								modContext
							))
							.toContain(
								'contains'
							);
					});
				});
				describe('hideMethod', () => {
					it(
						'removes "contains" from Object.keys',
						function() {
							expect(hidContext)
								.toBeArray();
							expect(Object.keys(
									hidContext
								))
								.not.toContain(
									'contains'
								);
						});
				});
				describe('contains', () => {
					it(
						'applies the curried function to the query and calls it on each element',
						function() {
							expect(modContext
								.contains(
									2)).toBeTrue();
						});
				});
			});
		});
	});
});