/*
Given an array of integers of size n, and an interval size m, where m<= n, find
the sum of every interval window.

ex.
Array: [10,3,7,4,6]
interval: 3

Returns: [20,14,17] (the sums of the numbers in each interval of size 3)
 */

export function slidingWindowSum(arr: number[], windowSize: number): number[] {
  // validate input
  if (!Array.isArray(arr) || !Number.isInteger(windowSize)) {
    throw new Error('Invalid input. Please provide an array and an integer for the window size.');
  }
  if (arr.length === 0 || windowSize <= 0 || windowSize > arr.length) {
    throw new Error('Invalid input. Please make sure the window size is a positive integer and not larger than the array length.');
  }

  // return the original array if the window size is zero
  if (windowSize === 0) {
    return arr;
  }

  // initialize result array and sum of first window
  const result: number[] = [];
  let sum = 0;
  for (let i = 0; i < windowSize; i++) {
    sum += arr[i];
  }
  result.push(sum);

  // compute subarray sums
  for (let i = windowSize; i < arr.length; i++) {
    // compute the sum of the current subarray by adding the current element and subtracting the element that falls outside of the window
    sum += arr[i] - arr[i - windowSize];
    result.push(sum);

    // ensure that the window does not overlap the next element by subtracting the next element from the sum
    sum -= arr[i + 1];
  }

  return result
}
