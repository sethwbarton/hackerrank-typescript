/*
https://leetcode.com/problems/integer-to-roman/
 */


const numeralPairs: {letter: string, number: number}[] = [
  {letter: "M", number: 1000},
  {letter: "D", number: 500},
  {letter: "C", number: 100},
  {letter: "L", number: 50},
  {letter: "X",number:  10},
  {letter: "V", number: 5},
  {letter: "I", number: 1}
]

interface NumeralPair {
  letter: string
  number: number
}

function startsWithNine(num: number) {
  return num.toString()[0] === '9'
}

function startsWithFour(num: number) {
  return num.toString()[0] === '4'
}


function processSinglePlace(num: number, pair: NumeralPair, pairIndex: number) {
  let toReturn = ''
  if (num > pair.number) {
    if (startsWithNine(num)) {
      toReturn = numeralPairs[pairIndex + 1].letter + numeralPairs[pairIndex - 1].letter
      num -= numeralPairs[pairIndex - 1].number - numeralPairs[pairIndex + 1].number
      return {num, modResult: num, toReturn}
    }
    if (startsWithFour(num)) {
      toReturn = pair.letter + numeralPairs[pairIndex - 1].letter
      num -= numeralPairs[pairIndex - 1].number - pair.number
      return {num, modResult: num, toReturn}
    }
  }
  toReturn = pair.letter.repeat((num - (num % pair.number)) / pair.number)
  num = num % pair.number
  return {num, toReturn};
}

export function integerToRoman(num: number): string {
  let toReturn = ''
  numeralPairs.forEach((pairing, i) => {
    let character_result = processSinglePlace(num,  pairing, i);
    num = character_result.num;
    toReturn += character_result.toReturn;
  })
  return toReturn
}

