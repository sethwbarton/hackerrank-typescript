import { describe, it } from 'mocha'
import { expect } from 'chai'
import {evenFibonacciSumUnderN, fibAtN, memoFibAtN} from "../src/euler-2";

describe("Event Fibonacci Sum Under N", () => {
    /**
     * Fibs under 10 are...
     * 1,2,3,5,8
     * The evens are 2 + 8 = 10
     */
    it('calculates the fibonacci sum under 10', () => {
        expect(evenFibonacciSumUnderN(10)).to.equal(10)
    })


})

describe('fib at n', () => {
    it('gets the correct fib at n', () => {

        // console.time("Not Memoized")
        // fibAtN(100)
        // console.timeEnd("Not Memoized")

        console.time("Memoized")
        console.log(memoFibAtN(10000))
        console.timeEnd("Memoized")

        // expect(fibAtN(0)).to.equal(1)
        // expect(fibAtN(1)).to.equal(2)
        // expect(fibAtN(2)).to.equal(3)
        // expect(fibAtN(3)).to.equal(5)
        // expect(fibAtN(4)).to.equal(8)
    })
})

describe('memoized fib at n', () => {
    it('gets the correct fib at n', () => {



        // expect(fibAtN(0)).to.equal(1)
        // expect(fibAtN(1)).to.equal(2)
        // expect(fibAtN(2)).to.equal(3)
        // expect(fibAtN(3)).to.equal(5)
        // expect(fibAtN(4)).to.equal(8)
    })
})

