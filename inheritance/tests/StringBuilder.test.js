const StringBuilder = require('../src/StringBuilder');

describe('StringBuilder', () => {
    // let builder;

    // beforeEach(() => {
    //     builder = new Builder();
    // });


    it('should return empty string if no value is given in constructor', () => {
        //given
        let builder = new StringBuilder();
        //when
        const result = builder.get();
        //then
        expect(result).toEqual('');
    });

});