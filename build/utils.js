'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.dateStringToDate = void 0
var dateStringToDate = function (dateString) {
  var dateElements = dateString.split('/').map(function (value) {
    return parseInt(value)
  })
  return new Date(dateElements[2], dateElements[1] - 1, dateElements[0])
}
exports.dateStringToDate = dateStringToDate
