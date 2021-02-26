import { OutputTarget } from '../SummaryAnalysis'

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report)
  }
}
