fdescribe('subArray', () => {
    let subArray, Node, nArray, xArray, myArray, n0, n1;
    beforeAll(function() {
        console.log('\n.........subArray Spec.........');
        subArray = this.GR.Utils.subArray;
        Node = this.GR.Node;
    });
    beforeEach(function() {
        nArray = subArray.arrayOf(Node);
        n0 = Node("n0");
        n1 = Node("n1");
        // console.log(Array.from([]))
        xArray = nArray.instance();
        myArray = nArray.instance([n0, n1]);
        // state0 = {
        // data: "state0"
        // };
        // state1 = {
        // data: "state1"
        // };
        // nArray = subArray.arrayOf(Node);
        // accessor_func = (state) => state.data;
    });
    describe('.arrayOf(BaseClass)', () => {
        it('returns an object', function() {
            expect(nArray).toBeObject();
        });
        it('has an instance function', function() {
            expect(nArray.instance).toBeFunction();
        });
        describe('instance', () => {
            it('returns an array', function() {
                // console.log("myArray from  pre push Spec", myArray);
                // myArray.push((Node("n3")))
                // myArray.forEach(n => console.log(n.label()));
                console.log("myArray from  post push Spec", myArray);

                expect(myArray).toBeArray();
            });
            describe('.baseType', () => {
                it('returns the name of the class of objects allowed into the array ', function() {

                    expect(myArray.baseType()).toEqual("Node");
                });
            });
            describe('type', () => {
                it('retunrs the baseType + "Array"', function() {
                    expect(myArray.type()).toBe("NodeArray");
                });
            });
            describe('isValid(elem)', () => {
                it('validates an element', function() {
                    expect(myArray.isValid(n0)).toBeTrue();
                });

            });
            describe('splice', () => {
                it('returns a new instance from the original', function() {
                    let src = nArray.instance([Node("n4"), Node("n6"), Node("n7"), Node("n8")]);
                    let splArr = src.splice(1, 2);
                    let allProps = Object.getOwnPropertyNames(splArr);
                    console.log(allProps)
                    console.log(src)
                    expect(splArr).toBeArray();
                    expect(splArr.length).toBe(2);
                    expect(splArr.type).toBeTruthy();
                });
            });
            describe('isEmpty', () => {
                it('returns true if lenght == 0', function() {
                    expect(xArray.isEmpty()).toBeTrue();
                });
            });
        });
    });

});