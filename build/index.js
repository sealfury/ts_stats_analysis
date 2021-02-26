"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var SummaryAnalysis_1 = require("./SummaryAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// NB 'match' refers to football match
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summaryChelsea = new SummaryAnalysis_1.SummaryAnalysis(new WinsAnalysis_1.WinsAnalysis('Chelsea'), new HtmlReport_1.HtmlReport());
summaryChelsea.buildAndPrintReport(matchReader.matches);
