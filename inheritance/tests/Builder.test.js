const Builder = require('../src/Builder');

describe('Builder', () => {

    it('Should return string value given in constructor', () => {
        //given
        let builder = new Builder('testedvalue');
        //when
        const result = builder.get();
        //then
        expect(result).toEqual('testedvalue');
    });

    it('Should return numeric value given in constructor', () => {
        //given
        let builder = new Builder(1337);
        //when
        const result = builder.get();
        //then
        expect(result).toEqual(1337);
    });

    it('Should return value after chain of methods', () => {
        //given
        let builder = new Builder(6);
        //when
        const result = builder.minus().multiply().divide().get();
        //then
        expect(result).toEqual(6);
    });

    it('Should return sum of numeric values after using plus method', () => {
        //given
        let builder = new Builder(12);
        //when
        const arr = [1, 2, 3, 4];
        const result = builder.plus(...arr).get();
        //then
        expect(result).toEqual(22);
    });

    it('Should return concatenation of string values after using plus method', () => {
        //given
        let builder = new Builder('Rince');
        //when
        const arr = ['w', 'i', 'n', 'd'];
        const result = builder.plus(...arr).get();
        //then
        expect(result).toEqual('Rincewind');
    });
});