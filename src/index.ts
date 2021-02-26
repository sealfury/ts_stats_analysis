import fs from 'fs'

// NB variable 'matches' refers to *football* matches,
// NOT matches as in 'equivalents'

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',')
  })

let manUWins = 0

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUWins++
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUWins++
  }
}

console.log(`ManU won ${manUWins} games`)
