describe('validatable', () => {
	var validatable, myFunc, state0, state1;
	let myValidity, sValidity0, sValidity1;
	let isValid, notValid;
	beforeAll(function() {
		console.log('\n.........validatable Spec.........');
		validatable = this.GR.MethodUtils.validatable;
		myFunc = (state) => (arg) => state.test % arg === 0;
		myValidity = validatable(myFunc);
		isValid = myValidity.isValid;
		notValid = myValidity.notValid;
	});
	beforeEach(function() {
		state0 = {
			weight: "state0",
			test: 24
		};
		state1 = {
			weight: "state1",
			test: 31
		};
		sValidity0 = myValidity(state0);
		sValidity1 = myValidity(state1);
	});
	it('is a function', () => {
		expect(validatable).toBeFunction();
	});
	describe('when given an accessor function lFunc', () => {
		it('returns a second function awaiting a state object', () => {
			expect(myValidity).toBeFunction();
			expect(myValidity.isValid).toBeFunction();
		});
	});
	describe('operators', () => {
		describe('isValid', () => {
			it('compares vFunc on both objects', () => {
				expect(isValid(sValidity0)(2)).toBeTrue();
				expect(isValid(sValidity0)(7)).toBeFalse();
			});
		});
		describe('notValid', () => {
			it('compares vFunc on both objects', () => {
				expect(notValid(sValidity0)(state1.test))
					.toBeTrue();
				expect(notValid(sValidity0)(state0.test))
					.toBeFalse();
			});
		});
	});
	describe('methods', () => {
		describe('isValid', () => {
			it('it compares the vFunc() on the argument', () => {
				expect(sValidity0.isValid(4)).toBeTrue();
				expect(sValidity1.isValid(state0)).toBeFalse();
			});
		});
		describe('notValid', () => {
			it('it compares the vFunc() on the argument', () => {
				expect(sValidity0.notValid(state1.test)).toBeTrue();
				expect(sValidity1.notValid(state1.test)).toBeFalse();
			});
		});
	});
});