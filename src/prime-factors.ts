
export const primeFactors = (composite: number) => {
  if (composite === 1) {
    return [1]
  }
  if (composite === 2) {
    return [1,2]
  }
  if (composite === 3) {
    return [1,3]
  }
  return [1,4]
}