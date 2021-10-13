

// Returns -1 if the sum of a is bigger, 0 if even, 1 if the sum of b is bigger.
export function balance(a: number[], b: number[]): number {
    const aTotal = a.reduce((sum, current) => sum + current, 0);
    const bTotal= b.reduce((sum, current) => sum + current, 0);
    if (aTotal > bTotal) {
        return -1
    }
    if (bTotal > aTotal) {
        return 1
    }
    return 0
}

/**
 * Return the index of the number that's different in this list of numbers. Solutions must use the balance
 * function provided above.
 *
 * Constraints:
 * Balls can  be an arbitrarily large array but will always be at least length 3.
 * The odd ball can be smaller or larger than the other balls.
 */
export function findOddBall(balls: number[]) {
    let leftIndex = 0
    let rightIndex = balls.length - 1
    const leftArray = [balls[leftIndex]]
    const rightArray = [balls[rightIndex]]
    let balanceResult = balance(leftArray, rightArray)

    while(balanceResult === 0) {
        let leftIndexToPush = leftIndex + 1
        let rightIndexToPush = rightIndex - 1

        // We've gotten all the way to the middle of the array! This must be the odd ball.
        if (leftIndexToPush === rightIndexToPush) {
            return leftIndexToPush
        }
        leftIndex = leftIndexToPush
        rightIndex = rightIndexToPush

        leftArray.push(balls[leftIndexToPush])
        rightArray.push(balls[rightIndexToPush])
        balanceResult = balance(leftArray, rightArray)
    }
    // Need to find out if it was the left or right index here that was off.
    // The weight alone doesn't say. It has to be in relation to the rest of the list.
    if (balls[leftIndex] !== balls[balls.length - 1] && balls[leftIndex] !== balls[balls.length - 2]) {
        return leftIndex
    } else {
        return rightIndex
    }
}