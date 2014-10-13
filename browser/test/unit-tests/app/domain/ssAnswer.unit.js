define([
  'mocks/index'
], function (mocks) {
  return function () {
    describe('ssAnswer', function () {
      var ssQnaDoc;
      var ssAnswer;
      var $httpBackend;

      beforeEach(function (done) {
        angular.mock.module('app');
        inject(
          function (_$httpBackend_, _ssQnaDoc_, _ssAnswer_) {
            ssQnaDoc = _ssQnaDoc_;
            ssAnswer = _ssAnswer_;
            $httpBackend = _$httpBackend_;
            done();
          }
        );
      });

      var validQnaDoc = angular.copy(mocks.question);
      // remove any exsting answers because test will add one
      delete validQnaDoc.answers;

      var validAnswer = {
        text: 'This is \n\n\tsome answer text.'
      };

// Tests:
// don't allow answers with parents that are not qnaDocs
// check the results of an answer post
//

      xit(
        'ssAnswer parent param should be an ssQnaDoc object',
        function () {
          var qnaDoc = ssQnaDoc.create(validQnaDoc);
          var answer = ssAnswer.create(validAnswer, qnaDoc);
          // Best way to check for the ssQnaDoc object type?
          // expect(answer.$ml.parent).to.???;
        }
      );

      it(
        'on POST, ssAnswer should have answer text and ID',
        function (done) {
          var url = '/v1/questions/' + validQnaDoc.id + '/answers';
          $httpBackend.expectPOST(url).respond(200, mocks.question);
          var qnaDoc = ssQnaDoc.create(validQnaDoc);
          var answer = ssAnswer.create(validAnswer, qnaDoc);
          answer.post().$ml.waiting.then(
            function (data) {
              // PROBLEM: posting should update parent with response, how?
              expect(answer.answers[0].text).to.equal(validAnswer.text);
              expect(answer.answers[0].id).to.exist;
              done();
            }
          );
          $httpBackend.flush();
        }
      );
    });
  };

});
