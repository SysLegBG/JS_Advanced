const numberOperations = require('./numberOperations');
const expect = require('chai').expect;

describe('Tests', () => {
    it('powNumber', () => {
        expect(numberOperations.powNumber(2)).to.equal(4);
    })
    it('numCheck', () => {
        expect(numberOperations.numberChecker(1),'1').to.equal('The number is lower than 100!');
        expect(numberOperations.numberChecker(101),'101').to.equal('The number is greater or equal to 100!');
        expect(numberOperations.numberChecker(100),'100').to.equal('The number is greater or equal to 100!');
        // expect(numberOperations.numberChecker(0),'0').to.equal('The number is lower than 100!');
        // expect(numberOperations.numberChecker(-1),'-1').to.equal('The number is lower than 100!');
        expect(numberOperations.numberChecker('1'),'1 as string').to.equal('The number is lower than 100!');
        expect(() => {numberOperations.numberChecker('a')},'string').to.throw();
    })
    it('sumArrays', () => {
        expect(numberOperations.sumArrays([1],[1])).to.deep.equal([2]);
        expect(numberOperations.sumArrays([1,1],[1,1])).to.deep.equal([2,2]);
        expect(numberOperations.sumArrays([1],[1,2])).to.deep.equal([2,2]);
        expect(numberOperations.sumArrays([1,2],[1])).to.deep.equal([2,2]);
    })
})