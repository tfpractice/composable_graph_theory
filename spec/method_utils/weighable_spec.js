fdescribe('weighable', () => {
	var weighable, myFunc, state0, state1;
	let myWeight, sWeight0, sWeight1;
	let getWeight, sameWeight;
	let myStruct, stateOps;
	beforeAll(function() {
		console.log('\n.........weighable Spec.........');
		weighable = this.GR.MethodUtils.weighable;
		myStruct = (weight = 0) => ({ weight });
		myFunc = ({ weight = 0 }) => weight;
		myWeight = weighable(myFunc);
		stateOps = weighable.stateOps(myFunc);
		getWeight = myWeight.getWeight;
		sameWeight = myWeight.sameWeight;
	});

	beforeEach(function() {
		state0 = myStruct(0);
		state1 = myStruct(1);
		sWeight0 = myWeight(state0);
		sWeight1 = myWeight(state1);
	});

	it('is a function', () => {
		expect(weighable).toBeFunction();
	});
	describe('when given an accessor function lFunc', () => {
		it('returns a second function awaiting a state object',
			() => {
				expect(myWeight).toBeFunction();
				expect(myWeight.getWeight).toBeFunction();
				expect(myWeight.sameWeight).toBeFunction();
			});
	});
	describe('operators', () => {
		describe('getWeight', () => {
			it('retrieves the weight attribute ', () => {
				expect(getWeight(myWeight(state0))).toBe(0);
			});
		});
		describe('sameWeight', () => {
			it('compares getWeight on both objects', () => {
				expect(sameWeight(sWeight0)(sWeight1)).toBeFalse();
			});
		});
	});
	describe('methods', () => {
		describe('weight', () => {
			it('retrieves the weight attribute ', () => {
				expect(sWeight0.weight()).toBe(0);
			});
		});
		describe('sameWeight', () => {
			it('it compares the weight() with getWeight() on the argument', () => {
				expect(sWeight0.sameWeight(sWeight0)).toBeTrue();
				expect(sWeight0.sameWeight(sWeight1)).toBeFalse();
			});
		});
	});
	describe('stateOps ', () => {
		describe('when when passed a weightFunction', () => {
			it('returns a function with props', () => {
				expect(stateOps).toBeFunction();
				expect(stateOps.weight).toBeFunction();
				expect(stateOps.sameWeight).toBeFunction();
			});
		});
		describe('when when passed a stateObject', () => {
			it('returns an object with props', () => {
				let s0 = stateOps(state0);
				expect(s0).toBeObject();
				expect(s0.weight).toBeFunction();
				expect(s0.sameWeight).toBeFunction();
			});
			describe('weight', () => {
				it('retrieves the weight attribute ', () => {
					expect(stateOps(state0).weight()).toBe(0);
				});
			});
			describe('sameWeight', () => {
				it('it compares the tFunc on both state objects', () => {
					let s0 = stateOps(state0);
					expect(s0.sameWeight(state0)).toBeTrue();
					expect(s0.sameWeight(state1)).toBeFalse();
				});
			});
		});
	});
});