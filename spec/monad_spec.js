fdescribe('Monad', function() {
    let Monad, myMonad, altMonad, m0, m1, o0, o1;
    let log, identity;
    let s0, s1, stateMonad, label_method, type_method;
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

        // stateMonad = Monad();
        // stateMonad(s0)
        // stateMonad.lift('label', label_method).lift('state', identity);
        // label_method = (state) => state.label
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
                    console.log(m0.getVal())
                });
            });
        });
        // it('wraps a value', function() {});
    });

    describe('stateMonad node implementor', function() {
        it('should', function() {

        });
    });
});