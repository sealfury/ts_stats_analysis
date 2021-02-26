import { MatchReader } from './MatchReader'
import { SummaryAnalysis } from './SummaryAnalysis'

// NB 'match' refers to football match

const matchReader = MatchReader.fromCsv('football.csv')
const summaryChelsea = SummaryAnalysis.winsWithHtml('Chelsea')

matchReader.load()
summaryChelsea.buildAndPrintReport(matchReader.matches)
