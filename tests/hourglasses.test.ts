import { describe, it } from 'mocha'
import { expect } from 'chai'
import {getHourglassSums, hourglassSum} from "../src/hourglasses";

describe('return hour glass sums', function() {
    it('returns an array of 16 numbers', function(){
        const practiceArray =
            [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const hourGlassSums = getHourglassSums(practiceArray)
        expect(hourGlassSums).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    });

    it('returns the sum for one hourglass', function(){
        const practiceArray =
            [
                [1,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const hourGlassSums = getHourglassSums(practiceArray)
        expect(hourGlassSums).to.deep.equal([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    });

    it('returns the sum for two hourglasses', function(){
        const practiceArray =
            [
                [1,1,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const hourGlassSums = getHourglassSums(practiceArray)
        expect(hourGlassSums).to.deep.equal([2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    });

    it('returns the sum for three hourglasses', function(){
        const practiceArray =
            [
                [1,1,1,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const hourGlassSums = getHourglassSums(practiceArray)
        expect(hourGlassSums).to.deep.equal([3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0])
    });

    it('returns the sum for a full row', function(){
        const practiceArray =
            [
                [1,1,1,1,1,1],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const hourGlassSums = getHourglassSums(practiceArray)
        expect(hourGlassSums).to.deep.equal([3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0])
    });

    it('returns the sum for a full array', function(){
        const practiceArray =
            [
                [1,1,1,1,1,1],
                [1,1,1,1,1,1],
                [1,1,1,1,1,1],
                [1,1,1,1,1,1],
                [1,1,1,1,1,1],
                [1,1,1,1,1,1],
            ]
        const hourGlassSums = getHourglassSums(practiceArray)
        expect(hourGlassSums).to.deep.equal([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7])
    });
});

describe('hour glass sum', function() {
    it('returns the highest in the empty array', () => {
        const practiceArray =
            [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const sum = hourglassSum(practiceArray)
        expect(sum).to.equal(0)
    })

    it('returns the highest for only one hourglass', () => {
        const practiceArray =
            [
                [1,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const sum = hourglassSum(practiceArray)
        expect(sum).to.equal(1)
    })

    it('returns the highest for only a row of hourglasses', () => {
        const practiceArray =
            [
                [1,1,1,1,1,1],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const sum = hourglassSum(practiceArray)
        expect(sum).to.equal(3)
    })

    it('returns the highest for only a row of hourglasses', () => {
        const practiceArray =
            [
                [1,1,1,1,1,1],
                [0,7,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ]
        const sum = hourglassSum(practiceArray)
        expect(sum).to.equal(10)
    })

    it('returns right if its not the first one in the arr', () => {
        const practiceArray =
            [
                [1,1,1,1,1,1],
                [0,7,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,100],
            ]
        const sum = hourglassSum(practiceArray)
        expect(sum).to.equal(100)
    })

    it('returns right if its in the middle of the arr', () => {
        const practiceArray =
            [
                [1,1,1,1,1,1],
                [0,7,0,0,0,0],
                [0,0,0,0,0,0],
                [100,100,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,100],
            ]
        const sum = hourglassSum(practiceArray)
        expect(sum).to.equal(207)
    })

    it('works with negative numbers', () => {
        const practiceArray =
            [
                [1,1,1,1,1,1],
                [0,-7,0,0,0,0],
                [0,0,0,0,0,0],
                [100,100,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,100],
            ]
        const sum = hourglassSum(practiceArray)
        expect(sum).to.equal(200)
    })
});

