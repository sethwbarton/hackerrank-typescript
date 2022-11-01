import {expect} from "chai";
import {  isPalindrome } from '../src/palindrome-number'

describe("Palindrome Number", () => {
  it("Returns true for 1", () => {
    expect(isPalindrome(1)).to.equal(true)
  })

  it("Returns false for 12", () => {
    expect(isPalindrome(12)).to.equal(false)
  })

  it("Returns true for 121", () => {
    expect(isPalindrome(121)).to.equal(true)
  })

  it("Returns true for 111111111", () => {
    expect(isPalindrome(111111111)).to.equal(true)
  })

  it("Returns false for 123456", () => {
    expect(isPalindrome(123456)).to.equal(false)
  })

  it("Returns true for 1234566666666654321", () => {
    expect(isPalindrome(123456666654321)).to.equal(true)
  })

  it("Returns true for 22", () => {
    expect(isPalindrome(22)).to.equal(true)
  })

  it("Returns false for negative numbers", () => {
    expect(isPalindrome(-22)).to.equal(false)
  })

  it("Returns true for 0", () => {
    expect(isPalindrome(0)).to.equal(true)
  })

  it("Returns true for 1000021", () => {
    expect(isPalindrome(1000021)).to.equal(false)
  })
})