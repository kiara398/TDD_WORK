//BAKER SENTAMU SOLOMON 
//WINNIE NASSOZI

//FACTORIAL USING THE TEST LAST APPROACH.

//require dependencies
const MathService = require('../app');
const assert = require('chai').assert;

/*describe() is simply a way to group our tests in Mocha. 
 describe() takes two arguments, the first is the name of the test group, and the second is a callback function..
 it() is used for an individual test case. it() should be written as if you were saying it out loud:for example, “It should return correct value”,
 it() takes two arguments, a string explaining what the test should do, and a callback function which contains our test:
 We use the assertion module(assert) to verify our tests*/
describe('factorial', ()=>{
    it('Should return correct value', ()=>{
        const mathService = new MathService();
        assert.equal(mathService.factorial(-1), -1);
        assert.equal(mathService.factorial(0), 1);
        assert.equal(mathService.factorial(1), 1);
    })
    it('Should return correct value', ()=>{
        const mathService = new MathService();
        assert.equal(mathService.factorial(3), 6);
        assert.equal(mathService.factorial(6), 720);
    })
    it('Should return correct value', ()=>{
        const mathService = new MathService();
        assert.equal(mathService.factorial(4), 24);
        assert.equal(mathService.factorial(8),  40320);
    })
 })
