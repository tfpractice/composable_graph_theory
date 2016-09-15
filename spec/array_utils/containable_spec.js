describe('containable', () => {
	let containable, myFunc, context0, context1, xContext;
	let myContainment, sContainment0, sContainment1;
	let contains, notContains;
	beforeAll(function() {
		console.log('\n.........containable Spec.........');
		containable = this.GR.ArrayUtils.containable;
		myFunc = (query) => (el) => ((el + query) % 2) === 0;
		myContainment = containable(myFunc);
		contains = myContainment.contains;
		notContains = myContainment.notContains;
	});
	beforeEach(function() {
		context0 = [2, 6, 8, 10];
		context1 = [9, 3, 7, 5];
		sContainment0 = myContainment(context0);
		sContainment1 = myContainment(context1);
	});
	it('is a function', () => {
		expect(containable).toBeFunction();
	});
	describe('when given an accessor function cFunc', () => {
		it('returns a second function awaiting a context object', () => {
			expect(myContainment).toBeFunction();
			expect(myContainment.contains).toBeFunction();
		});
	});
	describe('operators', () => {
		describe('contains', () => {
			it('compares vFunc on both objects', () => {
				expect(contains(context0)(2)).toBeTrue();
				expect(contains(context1)(2)).toBeFalse();
			});
		});
		describe('notContains', () => {
			it('compares vFunc on both objects', () => {
				expect(notContains(context0)(7)).toBeTrue();
				expect(notContains(context1)(7)).toBeFalse();
			});
		});
	});
	describe('methods', () => {
		describe('contains', () => {
			it('it compares the vFunc() on the argument', () => {
				expect(sContainment0.contains(4)).toBeTrue();
				expect(sContainment1.contains(4)).toBeFalse();
			});
		});
		describe('notContains', () => {
			it('it compares the vFunc() on the argument', () => {
				expect(sContainment1.notContains(4)).toBeTrue();
				expect(sContainment0.notContains(4)).toBeFalse();
			});
		});
		describe('findEquivalent', () => {
			it('it compares the vFunc() on the argument', () => {
				expect(sContainment0.findEquivalent(4)).toBe(2);
				expect(sContainment1.findEquivalent(4)).toBeUndefined();
			});
		});
		describe('indexEquivalent', () => {
			it('it compares the vFunc() on the argument', () => {
				expect(sContainment0.indexEquivalent(4)).toBe(0);
				expect(sContainment1.indexEquivalent(4)).toBe(-1);
			});
		});
		describe('excludeElement', () => {
			it('it compares the vFunc() on the argument', () => {
				expect(sContainment0.excludeElement(4)).toBeArray();
				expect(sContainment1.excludeElement(4)).toBeArray();
			});
		});
		describe('push', () => {
			describe('when context already includes an element passing the eqFunc', () => {
				it('doenst change the length of the array', function() {
					let olen = context0.length;
					sContainment0.push(2);
					expect(context0.length).toEqual(olen);
				});
			});
			describe('when context doesnt include an element passing the eqFunc', () => {
				it('appends the element to the array', function() {
					let olen = context1.length;
					sContainment1.push(2);
					expect(context1.length).not.toEqual(olen);
				});
			});

		});
	});
});