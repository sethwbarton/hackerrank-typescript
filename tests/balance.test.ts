import { describe, it } from 'mocha'
import { expect } from 'chai'
import {balance, findOddBall} from "../src/balance";

describe('balance', function() {
    it('returns 1 if b is bigger', function(){
        const a = [1]
        const b = [2]
        const result = balance(a,b)
        expect(result).to.equal(1)
    });

    it('returns 1 if b is bigger', function(){
        const a = [1,1,1,1,1,1,1,1]
        const b = [2,2,2,2,2,2,2,2,2]
        const result = balance(a,b)
        expect(result).to.equal(1)
    });

    it('returns -1 if a is bigger', function(){
        const b = [1,1,1,1,1,1,1,1]
        const a = [2,2,2,2,2,2,2,2,2]
        const result = balance(a,b)
        expect(result).to.equal(-1)
    });

    it('returns 0 if a and b are equal', function(){
        const b = [1,1,1,1,1,1,1,1]
        const a = [1,1,1,1,1,1,1,1]
        const result = balance(a,b)
        expect(result).to.equal(0)
    });
});

describe('findOddball', function() {
    it('returns the correct index for an array of 3 [112]', () => {
        const result = findOddBall([1,1,2])
        expect(result).to.equal(2)
    })

    it('returns the correct index for an array of 3 [221]', () => {
        const result = findOddBall([2,2,1])
        expect(result).to.equal(2)
    })

    it('returns the correct index for an array of 3 [121]', () => {
        const result = findOddBall([1,2,1])
        expect(result).to.equal(1)
    })

    it('returns the correct index for an array of 3 [211]', () => {
        const result = findOddBall([2,1,1])
        expect(result).to.equal(0)
    })

    it('returns the correct index from an array of 4 [2111]', () => {
        const result = findOddBall([2,1,1,1])
        expect(result).to.equal(0)
    })

    it('returns the correct index from an array of 4 [1121]', () => {
        const result = findOddBall([1,1,2,1])
        expect(result).to.equal(2)
    })

    it('returns the correct index from an array of 4 [1211]', () => {
        const result = findOddBall([1,2,1,1])
        expect(result).to.equal(1)
    })

    it('returns the correct index from an array of 4 [2111]', () => {
        const result = findOddBall([2,1,1,1])
        expect(result).to.equal(0)
    })

    it('returns the correct index from a bigger array', () => {
        const result = findOddBall([1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1])
        expect(result).to.equal(6)
    })

    it('does not just have to be ones and twos', () => {
        const result = findOddBall([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,1120,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8])
        expect(result).to.equal(29)
    })

    it('works when the odd ball is smaller', () => {
        const result = findOddBall([2,2,1,2])
        expect(result).to.equal(2)
    })

    it('works for arrays where the odd ball is in the middle', () => {
        const result = findOddBall([2,2,1,2,2])
        expect(result).to.equal(2)
    })

    it('works for arrays where the odd ball is on one end', () => {
        const result = findOddBall([1,2,2,2])
        expect(result).to.equal(0)

        const result2 = findOddBall([2,2,2,1])
        expect(result2).to.equal(3)
    })
})

