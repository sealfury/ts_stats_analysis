"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryAnalysis = void 0;
var SummaryAnalysis = /** @class */ (function () {
    function SummaryAnalysis(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    SummaryAnalysis.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return SummaryAnalysis;
}());
exports.SummaryAnalysis = SummaryAnalysis;
