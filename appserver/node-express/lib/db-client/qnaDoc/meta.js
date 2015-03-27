var baseUri = '/questions/';

module.exports = {
  baseUri: baseUri,
  getUri: function (id) {
    return this.baseUri + id + '.json';
  },
  serverResponseToSpec: function (resp) {
    var docID;
    if (resp && resp.uri) {
      docID = resp.uri.replace('/questions/','').replace('.json','');
    }
    return { id : docID };
  },
  template: {
    question: {
      accepted:false,
      acceptedAnswerId: null,
      comments:[],
      answers:[],
      answerCount: 0
    },
    answer: {
      // text: ',
      itemTally: 0,
      comments: [],
      // owner: {
      //   id: contributorId,
      //   displayName: contributorDisplayName,
      //   userName: contributorUserName
      // },
      upvotingContributorIds: [],
      downvotingContributorIds: []
    },
    comment: {
      // text: ',
    }
  }
};
