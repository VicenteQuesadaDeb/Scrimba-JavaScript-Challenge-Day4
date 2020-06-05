function sumAllPrimes(num) {
  //  write code here.
  let res = []; //array to check the integrity of the loop
  let number = 0; //result

  // i must be equals to 2 because it's the first prime number.
  for (let i = 2; i <= num; i++) {
    //check if prime
    if (num % i === 0) {
      res.push(i);
      number += i; //sum of the numbers
    }
  }
  console.log(res);
  return number;
}

/**
 * Test Suite
 */
describe("sumAllPrimes()", () => {
  it("adds all prime numbers up to input number", () => {
    // arrange
    const num = 10;

    // act
    const result = sumAllPrimes(num);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(17);
  });
});
