/**
 * Find the sum of the even fibonacci terms under 4 million.
 *
 * The fibonacci sequence starts with 1,2,3,5....etc.
 */
export function evenFibonacciSumUnderN(n: number) {

}

const memoizedAnswers: Record<number,number> = {}

export function memoFibAtN(n: number): number {
    if (n === 0) {
        return 1
    }
    if (n == 1) {
        return 2
    }
    let answer = ((memoizedAnswers[n - 1] ? memoizedAnswers[n - 1] : memoFibAtN(n-1))
    + (memoizedAnswers[n-2] ? memoizedAnswers[n-2] : memoFibAtN(n-2)))
    memoizedAnswers[n] = answer
    return answer
}

export function fibAtN(n: number): number {
    if (n === 0) {
        return 1
    }
    if (n == 1) {
        return 2
    }
    return fibAtN(n-1) + fibAtN(n-2)
}