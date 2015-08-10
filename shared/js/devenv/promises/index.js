module.exports = require('requireindex')(__dirname);

//
// module.exports = function (context, options) {
//
//   return modules.conditionalClean(context, options)
//   .then(modules.buildApp.bind(null, context, options))
//   .then(modules.deployApp.bind(null, context, options))
//   .thgen(modules.)(options))
//   return new Promise(function (resolve, reject) {
//     // var myStream = srcFiles.pipe($.filelog()); //.pipe($.size()); // debug({ title: 'from build' }));
//     var myStream = srcFiles
//       .pipe(streams.buildApp(srcFiles, ctx, {}));
//     myStream.resume();
//     myStream.on('end', function () {
//       resolve(myStream);
//     });
//     myStream.on('error', function (err) {
//       reject(err);
//     });
//   });
//
//   rimraf(dest, function (err) {
//     if (err) {
//       $.util.log(chalk.red('Error Deploying static build: ' + err));
//       return cb(err);
//     }
//
// }
