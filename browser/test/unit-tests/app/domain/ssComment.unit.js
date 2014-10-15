define([
  'mocks/index'
], function (mocks) {
  return function () {
    describe('ssComment', function () {
      var ssQnaDoc;
      var ssComment;
      var $httpBackend;

      beforeEach(function (done) {
        angular.mock.module('app');
        inject(
          function (_$httpBackend_, _ssQnaDoc_, _ssComment_) {
            ssQnaDoc = _ssQnaDoc_;
            ssComment = _ssComment_;
            $httpBackend = _$httpBackend_;
            done();
          }
        );
      });

      var validQnaDoc = angular.copy(mocks.question);
      // remove any exsting comments because test will add one
      delete validQnaDoc.comments;

      var validComment = {
        text: 'This is \n\n\tsome comment text.'
      };

// Tests:
// don't allow answers with parents that are not qnaDocs
// check the results of an answer post
//

      xit(
        'ssComment parent param should be an ssQnaDoc object',
        function () {
          var qnaDoc = ssQnaDoc.create(validQnaDoc);
          var comment = ssComment.create(validComment, qnaDoc);
          // Best way to check for the ssQnaDoc object type?
          // expect(comment.$ml.parent).to.???;
        }
      );

      it(
        'on POST, ssComment should have answer text and ID',
        function (done) {
          var url = '/v1/questions/' + validQnaDoc.id + '/comments';
          $httpBackend.expectPOST(url).respond(200, mocks.question);
          var qnaDoc = ssQnaDoc.create(validQnaDoc);
          var comment = ssComment.create(validComment, qnaDoc);
          comment.post().$ml.waiting.then(
            function (data) {
              // PROBLEM: posting should update parent with response, how?
              expect(comment.comments[0].text).to.equal(validComment.text);
              expect(comment.comments[0].id).to.exist;
              done();
            }
          );
          $httpBackend.flush();
        }
      );
    });
  };

});
