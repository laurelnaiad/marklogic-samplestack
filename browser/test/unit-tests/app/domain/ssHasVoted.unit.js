define([
  'mocks/index'
], function (mocks) {
  return function () {
    describe('ssHasVoted', function () {
      var ssQnaDoc;
      var $httpBackend;

      beforeEach(function (done) {
        angular.mock.module('app');
        inject(
          function (_$httpBackend_, _ssQnaDoc_) {
            ssQnaDoc = _ssQnaDoc_;
            $httpBackend = _$httpBackend_;
            done();
          }
        );
      });

      var validHasVotes = angular.copy(mocks.hasVotes);
      // remove any exsting answers because test will add one
      delete validQnaDoc.answers;

      var validAnswer = {
        text: 'This is \n\n\tsome answer text.'
      };

      it(
        'ssAnswer parent param should be an ssQnaDoc object',
        function () {
          var qnaDoc = ssQnaDoc.create(validQnaDoc);
          var answer = ssAnswer.create(validAnswer, qnaDoc);
          expect(answer.$ml.parent instanceof ssQnaDoc.object).to.be.true;
        }
      );

      it(
        'on POST, answer (in parent qnaDoc) should have text and ID',
        function (done) {
          var url = '/v1/questions/' + validQnaDoc.id + '/answers';
          $httpBackend.expectPOST(url).respond(200, mocks.question);
          var qnaDoc = ssQnaDoc.create(validQnaDoc);
          var answer = ssAnswer.create(validAnswer, qnaDoc);
          answer.post().$ml.waiting.then(
            function (data) {
              expect(qnaDoc.answers[0].text).to.equal(validAnswer.text);
              expect(qnaDoc.answers[0].id).to.exist;
              done();
            }
          );
          $httpBackend.flush();
        }
      );
    });
  };

});
