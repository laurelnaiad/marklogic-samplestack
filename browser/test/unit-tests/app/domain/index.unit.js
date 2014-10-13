define([
  './ssSearch.unit',
  './ssSession.unit',
  './ssQnaDoc.unit',
  './ssAnswer.unit'
], function (
  ssSearch,
  ssSession,
  ssQnaDoc,
  ssAnswer
) {

  return function () {

    describe('domain', function () {
      ssSearch();
      ssSession();
      ssQnaDoc();
      ssAnswer();
    });

  };
});
