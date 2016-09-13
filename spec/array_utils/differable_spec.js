fdescribe('differable', function() {
	let differable, queryA, contextA, xContext;
	let myFunc, myDifference;
	let curriedContext, contextDifference;
	let isAbsent;
	beforeAll(function() {
		console.log('\n.........differable Spec.........');
		differable = this.GR.ArrayUtils.differable;
		queryA = [1, 2, 3];
		contextA = [1, 2, 3, 6, 4, 5];
		xContext = [9, 1];
		let myContains = (srcArr) => (el) => srcArr.indexOf(el) > -1;
		isAbsent = (srcArr) => (el) => !myContains(srcArr)(el);
		myFunc = (srcArr) => (argArr) => srcArr.filter(isAbsent(argArr));
		myDifference = differable(isAbsent);
		curriedContext = myDifference(contextA);
		contextDifference = curriedContext.difference;
	});
	describe('when given a differable function', () => {
		it('return a function with a difference operators', () => {
			expect(differable(isAbsent)).toBeFunction();
			expect(differable(isAbsent).difference).toBeFunction();
		});
		describe('when given a context object', () => {
			it('returns an object with a difference method', () => {
				expect(myDifference(contextA)).toBeObject();
				expect(myDifference(contextA).difference).toBeTruthy();
			});
		});
	});
	describe('methods', () => {
		describe('difference', () => {
			describe('when given context and query arrays', () => {
				it('returns context elements absent from the query', () => {
					let cqDifference = contextDifference(queryA);
					expect(cqDifference).toBeArray();
					expect(cqDifference).toContain(6);
				});
			});
		});
		describe('hasDistinctElements', () => {
			describe('when given context and query arrays', () => {
				it('checks for context elements absent from the query', () => {
					let cqDistinct = curriedContext.hasDistinctElements;
					expect(cqDistinct(queryA)).toBeTrue();
					expect(cqDistinct(contextA)).toBeFalse();
				});
			});
		});
		describe('noDistinctElements', () => {
			describe('when given context and query arrays', () => {
				it('checks for context elements absent from the query', () => {
					let cqDistinct = curriedContext.noDistinctElements;
					expect(cqDistinct(contextA)).toBeTrue();
					expect(cqDistinct(queryA)).toBeFalse();
				});
			});
		});
	});
	describe('operators', () => {
		describe('when given a context and query array', () => {
			describe('difference', () => {
				it('returns context elements absent from the query', () => {
					expect(myDifference.difference(contextA)(queryA)).toBeArray();
				});
			});
			describe('hasDistinctElements', () => {
				it('checks for context elements absent from the query', () => {
					expect(myDifference.hasDistinctElements(contextA)(queryA)).toBeTrue();
				});
			});
			describe('noDistinctElements', () => {
				it('checks for context elements absent from the query', () => {
					expect(myDifference.noDistinctElements(contextA)(queryA)).toBeFalse();
				});
			});
		});
	});
});