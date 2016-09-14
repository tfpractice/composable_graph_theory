fdescribe('sameSize', function() {
	let sameSizeable, sameSize, notSameSize, cFunc, cState, myElements, xElements;
	beforeAll(function() {
		console.log('\n.........sameSize Spec.........');
		sameSizeable = this.GR.ArrayUtils.sameSize;
		sameSize = sameSizeable.sameSize;
		notSameSize = sameSizeable.notSameSize;
		myElements = [2, 3, 4, 5];
		xElements = [9, 3, 7, 5];
	});
	describe('when given a collection', () => {
		describe('sameSize', () => {
			it('a boolean based on number of elements in array', function() {
				expect(sameSize(myElements)([])).toBeFalse();
				expect(sameSize([])([])).toBeTrue();
			});
		});
		describe('notSameSize', () => {
			it('a boolean based on number of elements in array', function() {
				expect(notSameSize(myElements)([])).toBeTrue();
				expect(notSameSize([])([])).toBeFalse();
			});
		});
	});
});