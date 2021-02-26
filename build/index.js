"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var SummaryAnalysis_1 = require("./SummaryAnalysis");
// NB 'match' refers to football match
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summaryChelsea = SummaryAnalysis_1.SummaryAnalysis.winsWithHtml('Chelsea');
matchReader.load();
summaryChelsea.buildAndPrintReport(matchReader.matches);
