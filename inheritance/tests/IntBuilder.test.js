const IntBuilder = require('../src/IntBuilder');

describe('IntBuilder', () => {
    // let builder;

    // beforeEach(() => {
    //     builder = new Builder();
    // });


    it('should return zero if no value is given in constructor', () => {
        //given
        let builder = new IntBuilder();
        //when
        const result = builder.get();
        //then
        expect(result).toEqual(0);
    });

});