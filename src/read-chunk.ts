const chunkSize = 1024;

// Returns an array of chunkSize length
function readChunk(chunkNum: number) {
  return new Array(chunkSize).fill(0).map((_, i) => ({
    index: chunkNum * chunkSize + i,
  }));
}

function readTransactions(offset: number, limit: number) {
  // implement readTransactions

  const numChunksToRead = Math.ceil(limit / chunkSize)
  const transactions = []

  for(let i = 0; i < numChunksToRead; i += 1) {
    transactions.push(...readChunk(i))
  }

  if (offset < limit) {
    return transactions.slice(offset, limit)
  }

  return transactions.slice(0, limit)
}

console.log(readTransactions(0, 500).length, 500)
console.log(readTransactions(0, 500)[450], {index: 450})
console.log(readTransactions(0, 500)[499], {index: 499})

console.log(readTransactions(1, 500).length, 499)

console.log(readTransactions(250, 500).length, 250)

console.log(readTransactions(0, 3000).length, 3000)

console.log(readTransactions(89, 4850).length, 4761)
console.log(readTransactions(89, 4850)[4760], {index: 4849})

console.log(readTransactions(5000, 50).length, 50)

