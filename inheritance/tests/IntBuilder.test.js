const IntBuilder = require('../src/IntBuilder');

describe('IntBuilder', () => {

    it('should return random integer between 2 numbers on calling static random method', () => {
        //given

        //when
        const result = IntBuilder.random(3, 6);
        //then
        expect(result).toBeGreaterThanOrEqual(3);
        expect(result).toBeLessThan(6);
    });

    it('should return zero if no value is given in constructor', () => {
        //given
        let builder = new IntBuilder();
        //when
        const result = builder.get();
        //then
        expect(result).toEqual(0);
    });

    it('should return decreased value after using minus method', () => {
        //given
        let builder = new IntBuilder(100);
        //when
        const arr = [10, 20, 30];
        const result = builder.minus(...arr).get();
        //then
        expect(result).toEqual(40);
    });

    it('should return multiplied value after using multiply method', () => {
        //given
        let builder = new IntBuilder(7);
        //when
        const multiplyer = 8;
        const result = builder.multiply(multiplyer).get();
        //then
        expect(result).toEqual(56);
    });

    it('should return divided value after using divide method', () => {
        //given
        let builder = new IntBuilder(8);
        //when
        const divider = 2;
        const result = builder.divide(divider).get();
        //then
        expect(result).toEqual(4);
    });

    it('should return rest value after using mod method', () => {
        //given
        let builder = new IntBuilder(14);
        //when
        const modulo = 5;
        const result = builder.mod(modulo).get();
        //then
        expect(result).toEqual(4);
    });

    it('should return proper value after using chain of methods', () => {
        //given
        let builder = new IntBuilder(100);
        //when
        const result = builder.plus(50, 10).minus(20, 40).multiply(2).divide(20).mod(7).get();
        //then
        expect(result).toEqual(3);
    });
});