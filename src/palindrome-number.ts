export function isPalindrome(x: number): boolean {
  if (x < 0) return false
  const s = x.toString()
  return stringIsPalindrome(s)
}

function stringIsPalindrome(s: string): boolean {
  if (s.length === 1 || (s.length === 2 && s.charAt(0) === s.charAt(1)))
    return true
  if (s.charAt(0) === s.charAt(s.length - 1)) {
    return stringIsPalindrome(s.slice(1, -1))
  }
  return false
}