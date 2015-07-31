/* */
"format cjs";
var Jade = require('jade-compiler');

exports.translate = function (load) {
  var template_fn = Jade.compileClient(load.source);
  return "var jade = require" + "('jade-compiler/lib/runtime');\n\n" +
    'module.exports = ' + template_fn;
};
