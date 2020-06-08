const StringBuilder = require('../src/StringBuilder');

describe('StringBuilder', () => {

    it('should return empty string if no value is given in constructor', () => {
        //given
        let builder = new StringBuilder();
        //when
        const result = builder.get();
        //then
        expect(result).toEqual('');
    });

    it('should return shorter string after using minus method', () => {
        //given
        let builder = new StringBuilder('abcdefghijkl');
        //when
        const result = builder.minus(5).get();
        //then
        expect(result).toEqual('abcdefg');
    });

    it('should return multiplied string after using multiply method', () => {
        //given
        let builder = new StringBuilder('Bang!');
        //when
        const result = builder.multiply(3).get();
        //then
        expect(result).toEqual('Bang!Bang!Bang!');
    });

    it('should return shorter string after using divide method', () => {
        //given
        let builder = new StringBuilder('Retrospective');
        //when
        const result = builder.divide(2).get();
        //then
        expect(result).toEqual('Retros');
    });

    it('should return proper string after deletion of element with remove method', () => {
        //given
        let builder = new StringBuilder('FoggyFroggyDoggyFroggy');
        //when
        const result = builder.remove('Froggy').get();
        //then
        expect(result).toEqual('FoggyDoggy');
    });

    it('should return element of string after extracting it with sub method', () => {
        //given
        let builder = new StringBuilder('FoggyFroggyDoggyFroggy');
        //when
        const result = builder.sub(11, 5).get();
        //then
        expect(result).toEqual('Doggy');
    });

    it('should return proper value after using chain of methods', () => {
        //given
        let builder = new StringBuilder('oo ee oo aa aa, ting, tang, walla walla bing bang');
        //when
        const result = builder.minus(23).remove('oo ee oo aa aa, ').sub(6, 3).multiply(3).divide(2).plus('i', 'e', 'm').get();
        //then
        expect(result).toEqual('tantiem');
    });
});