import {expect} from "chai";
import {slidingWindowSum } from "../src/sliding-window-sum";

describe("Sliding Window Sum", () => {
  it("Sums 3 numbers", () => {
    expect(slidingWindowSum([1,1,1], 3)).to.deep.equal([3])
  })
  it("Sums 3 different numbers", () => {
    expect(slidingWindowSum([2,2,2], 3)).to.deep.equal([6])
  })
  it("Sums 2 groups of 2", () => {
    expect(slidingWindowSum([2,2,2,2], 2)).to.deep.equal([4,4])
  })
  it("Sums 3 groups of 3", () => {
    expect(slidingWindowSum([3,3,3,3,3,3,3,3,3], 2)).to.deep.equal([9,9,9])
  })
  it("Sums 3 groups of 4", () => {
    expect(slidingWindowSum([4,4,4,4,4,4,4,4,4], 2)).to.deep.equal([12,12,12])
  })
  it("Sums 3 groups of other numbers", () => {
    expect(slidingWindowSum([4,6,8,4,3,4,1,4,4], 2)).to.deep.equal([18,11,9])
  })
  it("If interval is 0, return []", () => {
    expect(slidingWindowSum([10,3,7,4,6], 0)).to.deep.equal([])
  })
  it("Returns input array when interval is 1", () => {
    expect(slidingWindowSum([10,3,7,4,6], 1)).to.deep.equal([10,3,7,4,6])
  })
})
