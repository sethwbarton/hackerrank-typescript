import {primeFactors} from "../src/prime-factors";
import {expect} from "chai";


describe('prime factors', () => {
  it('factors 1', () => {
    const result = primeFactors(1)
    expect(result).to.deep.equal([1])
  })

  it('factors 2', () => {
    const result = primeFactors(2)
    expect(result).to.deep.equal([1,2])
  })

  it('factors 3', () => {
    const result = primeFactors(3)
    expect(result).to.deep.equal([1,3])
  })

  it('factors 4', () => {
    const result = primeFactors(4)
    expect(result).to.deep.equal([1,2])
  })
})