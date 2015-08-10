// var ctx = require('./newContext');
// var paths = ctx.paths;


var path = require('path');
var join = path.join;

var gulp = require('gulp');


var all = function (dir) {
  return join(dir, '**/*');
};

var shallow = function (dir) {
  return join(dir, '*');
};

var globs = module.exports = {
  src: gulp.src
};
var _ = require('lodash');


globs.projectDir = path.resolve(__dirname, '../../..');
globs.browserDir = join(globs.projectDir, 'browser');
globs.nodeDir = join(globs.projectDir, 'appserver/node-express');
globs.marklogicDir = join(globs.projectDir, 'database');
globs.sharedDir = path.resolve(__dirname, '../..');

globs.browserSrcFiles = [
  all(join(globs.browserDir, 'src')),
  join(globs.browserDir, 'bower.json'),
  join(globs.browserDir, '.bowerrc'),
  // all(join(globs.browserDir, 'bower_components'))
];
globs.browserUnitSrcFiles = [all(join(globs.browserDir, 'test/unit-tests'))];
globs.cucumberSupportDir = join(globs.browserDir, 'test/cucumber-support');
globs.browserFiles = _.flattenDeep(
  [globs.browserSrcFiles, globs.browserUnitSrcFiles]
);

globs.nodeSrcFiles = [
  all(join(globs.nodeDir, 'lib')),
  shallow(globs.nodeDir),
  '!**/*gulpfile.js',
  '!**/*.md'
];
globs.nodeUnitSrcFiles = [all(join(globs.nodeDir, 'test/unit-tests'))];
globs.nodeIntSrcFiles = [all(join(globs.nodeDir, 'test/integration-tests'))];
globs.nodeTestSrcFiles = [all(join(globs.nodeDir, 'test'))];
globs.nodeFiles = _.flattenDeep(
  [globs.nodeSrcFiles, globs.nodeTestSrcFiles]
);

globs.e2eFiles = [all(join(globs.browserDir, 'tests/e2e'))];

globs.devenvFiles = _.flattenDeep([
  join(globs.projectDir, '*.*'),
  all(join(globs.sharedDir, 'js/devenv'))
]); //TODO all(join())];

globs.srcFiles = _.flattenDeep(
  [globs.browserSrcFiles, globs.nodeSrcFiles]
);
globs.unitSrcFiles = _.flattenDeep(
  [globs.browserUnitSrcFiles, globs.nodeUnitSrcFiles]
);
globs.testSrcFiles = _.flattenDeep(
  [
    globs.browserUnitSrcFiles,
    globs.nodeUnitSrcFiles
  ]
);

globs.rootFiles = [ join(globs.projectDir, 'package.json') ];
globs.sharedFiles = [ join(globs.sharedDir, 'js/*.js') ];
// globs.sharedAppFiles = [ join(globs.sharedDir, 'js/schema/*.js') ];

globs.schemaDir = join(globs.sharedDir, 'schema');
globs.schemaFiles = [ join(globs.schemaDir, '**/*') ];

globs.allFiles = _.flattenDeep(
  [
    globs.browserFiles,
    globs.nodeFiles,
    globs.e2eFiles,
    globs.devenvFiles,
    globs.sharedFiles,
    globs.rootFiles
  ]
);

globs.sassFiles = [ join(globs.browserDir, '**/*.scss') ];


globs.allSrcFiles = _.flattenDeep(
  [globs.browserFiles, globs.nodeFiles,  globs.schemaFiles ]
);

// TODO: more to come in globbing files within streams
var isBrowserRelated = function (file) {

};

var isNodeNodeRelated = function (file) {

};

var isMarklogicRelated = function (file) {

};

var isBowerFilesRelated = function (file) {

};



module.exports = globs;
