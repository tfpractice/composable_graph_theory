describe('unionable', function() {
	let unionable, queryA, contextA, xContext;
	let myFunc, myUnion;
	let curriedContext, contextUnion;
	let isAbsent;
	let differable, myDiff;
	beforeAll(function() {
		console.log('\n.........unionable Spec.........');
		unionable = this.GR.ArrayUtils.unionable;
		differable = this.GR.ArrayUtils.differable;
		queryA = [1, 2, 3];
		contextA = [1, 2, 6, 4, 5];
		xContext = [9, 7];
		let myContains = (srcArr) => (el) => srcArr.indexOf(el) > -1;
		isAbsent = (srcArr) => (el) => !myContains(srcArr)(el);
		myDiff = (srcArr) => (argArr) => srcArr.filter(isAbsent(argArr));
		let myDifference = differable(isAbsent);
		myFunc = (srcArr) => (argArr) => argArr.filter(isAbsent(srcArr));
		myUnion = unionable(myDifference.difference);
		curriedContext = myUnion(contextA);
		contextUnion = curriedContext.union;
	});
	describe('when given a unionable function', () => {
		it('return a function with union and unite operators', () => {
			expect(unionable(isAbsent)).toBeFunction();
			expect(unionable(isAbsent).union).toBeFunction();
			expect(unionable(isAbsent).unite).toBeFunction();
		});
		describe('when given a context object', () => {
			it('returns an object with a union and unite methods', () => {
				expect(myUnion(contextA)).toBeObject();
				expect(myUnion(contextA).union).toBeTruthy();
				expect(myUnion(contextA).unite).toBeTruthy();
			});
		});
	});
	describe('methods', () => {
		describe('when given context array', () => {
			describe('union', () => {
				it('returns context elements absent from the query', () => {
					let cqUnion = contextUnion(queryA);
					expect(cqUnion).toBeArray();
					expect(cqUnion).toContain(6);
				});
			});
			describe('unite', () => {
				it('adds missing elements to context', () => {
					let cqDistinct = curriedContext.unite;
					curriedContext.unite(queryA);
					expect(contextA).toContain(3);
				});
			});
		});
	});
	describe('operators', () => {
		describe('when given a context and query array', () => {
			describe('union', () => {
				it('returns context elements absent from the query', () => {
					expect(myUnion.union(contextA)(queryA)).toBeArray();
				});
			});
			describe('hasDistinctElements', () => {
				it('checks for context elements absent from the query', () => {
					myUnion.unite(contextA)(queryA)
					expect(contextA).toContain(3);
				});
			});
			describe('unionReduce', () => {
				it('reduces two arrays by union', () => {
					let metaArray = contextA.reduce((arr, next) => arr.concat([
						[next]
					]), []);
					let redArray = metaArray.reduce(myUnion.unionReduce, xContext);
					expect(redArray).toContain(9);
				});
			});
		});
	});
});