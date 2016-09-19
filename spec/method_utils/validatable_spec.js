describe('validatable', () => {
	var validatable, myFunc, state0, state1;
	let myValidity, sValidity0, sValidity1;
	let isValid, notValid;
	let myStruct, stateOps;
	beforeAll(function() {
		console.log('\n.........validatable Spec.........');
		validatable = this.GR.MethodUtils.validatable;
		myStruct = (weight = '', test = 10) => ({ weight, test });
		myFunc = ({ test: hostV }) => (arg) => hostV % arg === 0;
		myValidity = validatable(myFunc);
		stateOps = validatable.stateOps(myFunc);
		isValid = myValidity.isValid;
		notValid = myValidity.notValid;
	});

	beforeEach(function() {
		state0 = myStruct('state0', 24);
		state1 = myStruct('state1', 31);
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
	describe('stateOps ', () => {
		describe('when when passed a isValidFunction', () => {
			it('returns a function with props', () => {
				expect(stateOps).toBeFunction();
				expect(stateOps.isValid).toBeFunction();
				expect(stateOps.notValid).toBeFunction();
			});
		});
		describe('when when passed a stateObject', () => {
			it('returns an object with props', () => {
				let s0 = stateOps(state0);
				expect(s0).toBeObject();
				expect(s0.isValid).toBeFunction();
				expect(s0.notValid).toBeFunction();
			});
			describe('isValid', () => {
				it('retrieves the isValid attribute', () => {
					let s0 = stateOps(state0);
					expect(s0.isValid(state0.test)).toBeTrue();
					expect(s0.isValid(state1.test)).toBeFalse();
				});
			});
			describe('notValid', () => {
				it('it compares the tFunc on both state objects', () => {
					let s0 = stateOps(state0);
					expect(s0.notValid(state1.test)).toBeTrue();
					expect(s0.notValid(state0.test)).toBeFalse();
				});
			});
		});
	});
});