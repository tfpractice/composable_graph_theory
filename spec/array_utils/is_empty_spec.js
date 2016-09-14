fdescribe('isEmpty', function() {
	let emptyMixin, isEmpty, notEmpty, cFunc, cState, myElements, xElements;
	beforeAll(function() {
		console.log('\n.........isEmpty Spec.........');
		emptyMixin = this.GR.ArrayUtils.isEmpty;
		isEmpty = emptyMixin.isEmpty;
		notEmpty = emptyMixin.notEmpty;
		myElements = [2, 3, 4, 5];
		xElements = [9, 3, 7, 5];
	});
	describe('when given a collection', () => {
		describe('isEmpty', () => {
			it('a boolean based on number of elements in array', function() {
				expect(isEmpty(myElements)).toBeFalse();
				expect(isEmpty([])).toBeTrue();
			});
		});
		describe('notEmpty', () => {
			it('a boolean based on number of elements in array', function() {
				expect(notEmpty(myElements)).toBeTrue();
				expect(notEmpty([])).toBeFalse();
			});
		});
	});
});