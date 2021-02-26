import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

// NB 'match' refers to football match

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUWins = 0

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUWins++
  }
}

console.log(`ManU won ${manUWins} games`)
