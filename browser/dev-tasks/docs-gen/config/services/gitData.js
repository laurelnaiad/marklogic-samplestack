"use strict";

// var gruntUtils = require('../../../lib/grunt/utils');
// var versionInfo = require('../../../lib/versions/version-info');
// SCS
var gruntUtils = require('../../utils');
var versionInfo = require('../../version-info');

/**
 * @dgService gitData
 * @description
 * Information from the local git repository
 */
module.exports = function gitData() {
  return {
    version: versionInfo.currentVersion,
    versions: versionInfo.previousVersions,
    info: versionInfo.gitRepoInfo
  };
};
