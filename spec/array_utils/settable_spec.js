describe('setable', function() {
	let setable, queryA, contextA, xContext;
	let myFunc, mySet;
	let curriedContext, contextSet;
	beforeAll(function() {
		console.log('\n.........setable Spec.........');
		setable = this.GR.ArrayUtils.setable;
		queryA = [1, 2, 3];
		contextA = [1, 2, 3, 6, 4, 5];
		xContext = [9, 1];
		let myContains = (srcArr) => (el) => srcArr.indexOf(el) > -1;
		myFunc = myContains
		mySet = setable(myFunc);
		curriedContext = mySet(contextA);
		contextSet = curriedContext.setion;
	});
	describe('when given a setable function', () => {
		it('return a function', () => {
			expect(setable(myFunc)).toBeFunction();
		});
		describe('when given a context object', () => {
			it('returns an object with a setion property', () => {
				expect(mySet(contextA)).toBeObject();
				expect(mySet(contextA).setion).toBeTruthy();
			});
			describe('setion(method)', () => {
				describe('when given a query object', () => {
					it('checks for set elements', () => {
						expect(contextSet(queryA)).toBeTruthy();
					});
				});
			});
		});
	});
	describe('setable.setion', () => {
		it('is a function', () => {
			// expect(setable.setion).toBeFunction();
		});
		describe('when given a query array', () => {
			it('returns a function', () => {
				// expect(setable.setion(myFunc))
				// .toBeFunction();
			});
			describe('when given a context Array', () => {
				it(
					'checks for presence of each element in the first array in the context array',
					() => {}
				);
			});
		});
	});
});