function sumAllPrimes(num) {
    //  write code here.
}



/**
* Test Suite 
*/
describe('sumAllPrimes()', () => {
    it('adds all prime numbers up to input number', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumAllPrimes(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(17);
    })
});