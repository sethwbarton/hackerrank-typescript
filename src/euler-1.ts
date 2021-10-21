// Find the sum of all the multiples of 3 or 5 below 1000

export function multiplesThreeOrFive(n: number) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}