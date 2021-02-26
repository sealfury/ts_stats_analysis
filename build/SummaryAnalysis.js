'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.SummaryAnalysis = void 0
var WinsAnalysis_1 = require('./analyzers/WinsAnalysis')
var HtmlReport_1 = require('./reportTargets/HtmlReport')
var SummaryAnalysis = /** @class */ (function () {
  function SummaryAnalysis(analyzer, outputTarget) {
    this.analyzer = analyzer
    this.outputTarget = outputTarget
  }
  SummaryAnalysis.winsWithHtml = function (team) {
    return new SummaryAnalysis(
      new WinsAnalysis_1.WinsAnalysis(team),
      new HtmlReport_1.HtmlReport()
    )
  }
  SummaryAnalysis.prototype.buildAndPrintReport = function (matches) {
    var output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
  return SummaryAnalysis
})()
exports.SummaryAnalysis = SummaryAnalysis
