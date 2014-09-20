var fs = require('fs');
var path = require('path');
var gaze = require('gaze');
var globule = require('globule');
var shelljs = require('shelljs');
var connect = require('connect');
var serveStatic = require('serve-static');
var tinylr = require('tiny-lr-fork');
var lr = new tinylr.Server();
var app = connect();
var doctoc = require('doctoc/lib/transform');

app.use(require('connect-livereload')());
app.use(serveStatic(__dirname));
app.listen(3099);

var getPandocCmdHtml = function () {
  var pandocCmd = 'pandoc -f markdown -t html5 -s --number-sections ' +
      '-c spec.css  -o spec.html ';
  return pandocCmd + globule.find('preprocessed/*.md').sort().join(' ');
};

var htmlToMd = function () {
  var html = fs.readFileSync(
    path.resolve(__dirname, 'spec.html'), { encoding: 'utf8' }
  );
  var bodyStart = html.indexOf('<body>');
  var bodyEnd = html.indexOf('</body>');
  html = html.substring(bodyStart + 6, bodyEnd);
  var headerEnd = html.indexOf('</header>');
  var header = html.substring(0, headerEnd + 9);
  var rest = html.substring(headerEnd + 9);
  var toc = doctoc(rest).data;
  var tocStart = toc.indexOf('\n- ');
  toc = toc.substring(tocStart);

  fs.writeFileSync(
    path.resolve(__dirname, '../../functional-spec.md'),
    header + '\n\n' + '## Table of Contents\n\n' + toc + '\n\n' + rest
  );

};

var preprocess = function () {
  var srcs = globule.find('*.md');
  srcs.forEach(function (srcPath) {
    var raw = fs.readFileSync(srcPath, { encoding: 'utf8' });
    var includeStart;
    var includeEnd;
    for (
      includeStart = raw.indexOf('{include=');
      includeStart >= 0;
      includeStart = raw.indexOf('{include=')
    ) {
      includeEnd = raw.indexOf('}', includeStart);
      var included = fs.readFileSync(
        path.resolve(
          raw.substring(includeStart + 9, includeEnd)
        ),
        { encoding: 'utf8' }
      );
      raw = raw.substring(0, includeStart) +
          included +
          raw.substring(includeEnd + 1);
    }
    fs.writeFileSync(
      path.resolve(__dirname, 'preprocessed/' + path.basename(srcPath)),
      raw
    );


  });
};

lr.listen(35729, function () {
  gaze([
    '*.md',
    'spec.css',
    '../../../../specs/features/end-to-end/**/*'
  ], function (err, watcher) {
    this.on('error', function (err) {
      console.log(err);
    });
    this.on('changed', function (file) {
      console.log('see change');
      // shelljs.exec(getPandocCmdMd());
      preprocess();
      shelljs.exec(getPandocCmdHtml());
      htmlToMd();
      lr.changed({ body: { files: [ 'spec.html', 'spec.css' ]}});
    });
  });
});
