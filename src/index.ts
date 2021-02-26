import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { SummaryAnalysis } from './SummaryAnalysis'
import { HtmlReport } from './reportTargets/HtmlReport'

// NB 'match' refers to football match

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summaryChelsea = new SummaryAnalysis(
  new WinsAnalysis('Chelsea'),
  new HtmlReport()
)

summaryChelsea.buildAndPrintReport(matchReader.matches)
