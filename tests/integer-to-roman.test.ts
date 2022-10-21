import {expect} from "chai";
import {integerToRoman} from "../src/integer-to-roman";

describe('Integer to roman', () => {
  it('Converts 1 to I', () => {
    expect(integerToRoman(1)).to.equal('I')
  })

  it('Converts 2 to II', () => {
    expect(integerToRoman(2)).to.equal('II')
  })
  it('Converts 3 to III', () => {
    expect(integerToRoman(3)).to.equal('III')
  })

  it('Converts 4 to IV', () => {
    expect(integerToRoman(4)).to.equal('IV')
  })

  it('Converts 5 to V', () => {
    expect(integerToRoman(5)).to.equal('V')
  })

  it('Converts 6 to VI', () => {
    expect(integerToRoman(6)).to.equal('VI')
  })

  it('Converts 1000 to M', () => {
    expect(integerToRoman(1000)).to.equal('M')
  })

  it('Converts 2000 to MM', () => {
    expect(integerToRoman(2000)).to.equal('MM')
  })

  it('Converts 5000 to MMMMM', () => {
    expect(integerToRoman(5000)).to.equal('MMMMM')
  })

  it('Converts 1600 to MDC', () => {
    expect(integerToRoman(1600)).to.equal('MDC')
  })

  it('Converts 1700 to MDCC', () => {
    expect(integerToRoman(1700)).to.equal('MDCC')
  })

  it('Converts 1800 to MDCCC', () => {
    expect(integerToRoman(1800)).to.equal('MDCCC')
  })

  it('Converts 10 to X', () => {
    expect(integerToRoman(10)).to.equal('X')
  })

  it('Converts 18 to XVIII', () => {
    expect(integerToRoman(18)).to.equal('XVIII')
  })

  it('Converts 900 to CM', () => {
    expect(integerToRoman(900)).to.equal('CM')
  })

  it('Converts 2000 to MM', () => {
    expect(integerToRoman(2000)).to.equal('MM')
  })

  it('Converts 500 to D', () => {
    expect(integerToRoman(500)).to.equal('D')
  })

  it('Converts 1100 to MC', () => {
    expect(integerToRoman(1100)).to.equal('MC')
  })

  it('Converts 1994 to MCMXCIV', () => {
    expect(integerToRoman(1994)).to.equal('MCMXCIV')
  })

  it('Converts 58 to LVIII', () => {
    expect(integerToRoman(58)).to.equal('LVIII')
  })

  it('Converts 3999 to MMMCMXCIX', () => {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX')
  })
})