import { describe, it } from 'mocha'
import { expect } from 'chai'
import {multiplesThreeOrFive} from "../src/euler-1";

describe("Multiples of 3 or 5 below n", () => {
    it('calculates the sum of multiples of 3 or 5 below 10', () => {
        expect(multiplesThreeOrFive(10)).to.equal(23)
    })

    it('calculates the sum of multiples of 3 or 5 below 11', () => {
        expect(multiplesThreeOrFive(11)).to.equal(33)
    })

    it('calculates the sum of multiples of 3 or 5 below 11', () => {
        expect(multiplesThreeOrFive(12)).to.equal(33)
    })

    it('calculates the sum of multiples of 3 or 5 below 11', () => {
        expect(multiplesThreeOrFive(13)).to.equal(45)
    })

    it('calculates the sum of multiples of 3 or 5 below 1000', () => {
        expect(multiplesThreeOrFive(1000)).to.equal(233168)
    })
})

