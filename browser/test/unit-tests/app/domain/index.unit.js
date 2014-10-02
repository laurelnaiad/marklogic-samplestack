define([
  './ssSearch.unit',
  './ssSession.unit',
  './ssQnaDoc.unit'
], function (
  ssSearch,
  ssSession,
  ssQnaDoc
) {

  return function () {

    describe('domain', function () {
      ssSearch();
      ssSession();
      ssQnaDoc();
    });

  };
});
