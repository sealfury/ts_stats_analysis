import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'


// NB 'match' refers to football match

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()


