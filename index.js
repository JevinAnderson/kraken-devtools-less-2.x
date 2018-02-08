var less = require('less');
var path = require('path');

module.exports = function(options) {
  options = options || {};
  options.ext = options.ext || 'less';
  var paths = options.paths || ['.'];

  return function(data, args, callback) {
    var renderOptions = {
      filename: args.context.name,
      paths: paths.map(function(pathOption) {
        return path.resolve(args.context.srcRoot, pathOption);
      })
    };

    less.render(data.toString('utf8'), renderOptions, function(error, output) {
      if (error) {
        callback(error);
      }

      callback(undefined, output.css);
    });
  };
};
