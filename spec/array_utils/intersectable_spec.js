fdescribe('intersectable', function() {
	let intersectable, queryA, contextA, xContext;
	let myFunc, myIntersect;
	let myContains;
	let curriedContext, contextIntersect;
	beforeAll(function() {
		console.log('\n.........intersectable Spec.........');
		intersectable = this.GR.ArrayUtils.intersectable;
		queryA = [1, 2, 3];
		contextA = [1, 2, 3, 6, 4, 5];
		xContext = [9, 7];
		myContains = (srcArr) => (el) => srcArr.some(e => e === el);
		myFunc = (context) => (query) => context.filter(myContains(query));
		myIntersect = intersectable(myContains);
		curriedContext = myIntersect(contextA);
		contextIntersect = curriedContext.intersects;
	});
	describe('when given a intersectable function', () => {
		it('return a function', () => {
			expect(intersectable(myContains)).toBeFunction();
		});
		describe('when given a context object', () => {
			it('returns an object with a intersection property', () => {
				expect(myIntersect(contextA)).toBeObject();
				expect(myIntersect(contextA).intersection).toBeTruthy();
			});
			describe('intersects', () => {
				describe('when given a query array', () => {
					it('checks if there are any matching elements', () => {
						expect(curriedContext.intersects(queryA)).toBeTrue();
					});
				});
			});
			describe('notIntersects', () => {
				describe('when given a query array', () => {
					it('checks if there are any matching elements', () => {
						expect(curriedContext.notIntersects(xContext)).toBeTruthy();
					});
				});
			});
			describe('intersection(method)', () => {
				describe('when given a query object', () => {
					it("returns an array of  intersecting elements", () => {
						expect(curriedContext.intersection(queryA)).toBeArray();
					});
				});
			});
		});
	});
	describe('operators', () => {
		describe('when given context and query objects ', () => {
			describe('intersection', () => {
				it("returns an array of  intersecting elements", () => {
					expect(myIntersect.intersection(contextA)(queryA)).toBeArray();
				});
			});
			describe('intersects', () => {
				it("returns an array of  intersecting elements", () => {
					expect(myIntersect.intersects(contextA)(queryA)).toBeTrue();
				});
			});
			describe('notIntersects', () => {
				it("returns an array of  intersecting elements", () => {
					expect(myIntersect.notIntersects(contextA)(queryA)).toBeFalse();
				});
			});
		});
	});
});