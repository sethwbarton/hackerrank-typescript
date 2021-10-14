/**
 * Here's a link to the hackerrank problem:
 * https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 *
 * Given a 6x6 2D array an hourglass is a subset of values with indices in the following pattern:
 * a b c
 *   d
 * e f g
 *
 * There are 16 hours glasses in the array.
 * An hourglass sum is the sum of the hourglass's values. Calculate the hourglass sum
 * for every hourglass in arr and print the maximum sum. The array is always 6x6.
 */
export function hourglassSum(arr: number[][]): number {
    const sums = getHourglassSums(arr)
    return sums.sort((a,b) => {
        return a > b ? -1 : 1
    })[0]
}

export function getHourglassSums(arr: number[][]): number[] {
    let row = 0;
    let column = 0;
    const hourGlassSums = []

    for(let i = 0; i < 16; i++) {
        // Calculate the hour glass sum given the current row and column
        let newSum = arr[row][column]
            + arr[row][column + 1]
            + arr[row][column + 2]
            + arr[row+1][column + 1]
            + arr[row+2][column]
            + arr[row+2][column+1]
            + arr[row+2][column+2]
        hourGlassSums.push(newSum)

        // Get the next row and column
        if(column < 3) {
           // Keep the same row. But we move over one column.
            column++
            continue
        } else if(row < 3) {
            // We've reached the end of that row
            // Go back to the beginning of the next row.
            column = 0
            row++
            continue
        } else {
            // We've reached the end.
            break
        }
    }
    return hourGlassSums
}