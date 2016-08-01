describe('Monad', function() {
    let Monad, myMonad, altMonad, m0, m1, o0, o1;
    let log, identity;
    let s0, s1, stateMonad, label_method, type_method, data_method, mon0, mon1;
    beforeAll(function() {
        console.log('\n.........Monad Spec.........');
        Monad = this.GR.Monad.Monad;
    });
    beforeEach(function() {
        o0 = {
            ret: 0,
            state: 'state0'
        };
        o1 = {
            ret: 0,
            state: 'state1'
        };
        s0 = {
            label: 's0',
            data: {}
        }
        s1 = {
            label: 's1',
            data: {}
        }
        log = (val) => val.toString();
        identity = (val) => val;
        myMonad = Monad();
        m0 = myMonad(o0);
        altMonad = Monad();
        m1 = altMonad(o1);

        label_method = (state) => state.label;
        data_method = (state) => state.data;
        stateMonad = Monad();

        mon0 = stateMonad(s0);
        console.log(m0);
        mon1 = stateMonad(s1);

        stateMonad.lift('label', label_method).lift('state', identity).lift('data', data_method);

    });
    describe('general', () => {
        it('has a bind method', function() {
            expect(m0.bind).toBeFunction();
        });
        it('has a lift method', function() {
            expect(myMonad.lift).toBeFunction();
        });
        describe('#bind', () => {
            describe('when given a function func', () => {
                beforeEach(function() {});
                it('calls func immediately on the value closure', function() {
                    expect(m0.bind(identity)).toEqual(o0);
                });
            });
        });
        describe('lift', () => {
            describe('when given a funcName and definition', () => {
                it('defines the function as a method on the object', function() {
                    myMonad.lift("getVal", identity);
                    myMonad.lift('label', (mon) => mon.state)
                    // console.log(m0);

                    console.log(m0.getVal());
                });
            });
        });
        // it('wraps a value', function() {});
    });

    describe('stateMonad node implementor', function() {
        describe('label', () => {
            it('should have a label function', function() {
                // console.log(mon0.bind(label_method).bind(type_method));
                // console.log(mon0.label().type());
                expect(mon0.label).toBeFunction();

            });
        });
        it('should', function() {

        });
    });
});