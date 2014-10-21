define([
  'mocks/index'
], function (mocks) {
  return function () {
    describe('ssHasVoted', function () {
      var ssHasVoted;
      var $httpBackend;

      beforeEach(function (done) {
        angular.mock.module('app');
        inject(
          function (_$httpBackend_, _ssHasVoted_) {
            ssHasVoted = _ssHasVoted_;
            $httpBackend = _$httpBackend_;
            done();
          }
        );
      });

      var validHasVotes = mocks.hasVotes;
      var contributorId = '12345';
      var questionId = '67890';
      var spec = {
        contributorId: contributorId,
        questionId: questionId
      };

      it(
        'on POST, ssHasVotes should have a voteIds object property',
        function (done) {
          var url = '/v1/hasVoted?' +
                    'contributorId=' + contributorId +
                    '&questionId=' + questionId;
          $httpBackend.expectPOST(url).respond(200, validHasVotes);
          var hasVoted = ssHasVoted.create(spec);
          hasVoted.post().$ml.waiting.then(
            function (data) {
              expect(hasVoted.voteIds).to.be.object;
              done();
            }
          );
          $httpBackend.flush();
        }
      );
    });
  };

});
