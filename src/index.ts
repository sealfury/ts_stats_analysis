import { CsvFileReader } from './CsvFileReader'

// NB 'match' refers to football match

const reader = new CsvFileReader('football.csv')
reader.read()

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}  

let manUWins = 0

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUWins++
  }
}

console.log(`ManU won ${manUWins} games`)
