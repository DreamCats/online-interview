/*! Project:无, Create:FWS 2020.01.08 21:48, Update:FWS 2020.01.08 21:48 */
function parseDOM(r, e) {
  var a = new domhandler_1.DomHandler(void 0, e);
  return new Parser_1.Parser(a, e).end(r), a.dom
}
var domhandler_1 = require("./domhandler/index"),
  Parser_1 = require("./Parser");
module.exports = parseDOM;