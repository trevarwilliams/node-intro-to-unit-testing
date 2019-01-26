const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  
// Solution: separated each into own it functions
// if div by 3, if div by 5, if both, if none

  // test normal case
  it('should return a number, fizz and/or buzz', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      { a: 3, expected: 'fizz' },
      { a: 5, expected: 'buzz' },
      { a: 6, expected: 6 },
      { a: 15, expected: 'fizz-buzz' }
    ];
    // for each input (a), 'fizzBuzzer' should
    // produce expected value
    normalCases.forEach(function(input) {
      const answer = expect(answer).to.equal(input.expected);
    });
  });

  it('should raise an error if input is not a number', function() {
    const badInputs = [
      ['a'],
      ['fizz'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    fizzBuzzer.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});