/* jshint ignore:start */
module.exports = {
  'contribOnly': {
    'spec': {
      search: {
        qtext: [
          '',
          'sort:active'
        ],
        start: 1,
        query: {
          'and-query': {
            queries: [
              {
                'value-constraint-query': {
                  'constraint-name': 'userName',
                  text: 'joe@example.com'
                }
              }
            ]
          }
        },
        timezone: 'America/Los_Angeles'
      },
      shadow: undefined
    },
    'docsQuery': {
      search: {
        qtext: [
          '',
          'sort:active'
        ],
        query: {
          'and-query': {
            queries: [
              {
                'value-constraint-query': {
                  'constraint-name': 'userName',
                  text: 'joe@example.com'
                }
              },
              {
                'directory-query': {
                  uri: [
                    '/questions/'
                  ]
                }
              }
            ]
          }
        },
        timezone: 'America/Los_Angeles',
        options: {
          constraint: [
            {
              name: 'date',
              range: {
                facet: true,
                'json-property': 'lastActivityDate',
                type: 'xs:dateTime',
                bucket: [
                  {
                    ge: '2009-05-01T00:00:00-07:00',
                    lt: '2009-06-01T00:00:00-07:00',
                    name: '2009-05-01T00:00:00-07:00',
                    label: '2009-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-06-01T00:00:00-07:00',
                    lt: '2009-07-01T00:00:00-07:00',
                    name: '2009-06-01T00:00:00-07:00',
                    label: '2009-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-07-01T00:00:00-07:00',
                    lt: '2009-08-01T00:00:00-07:00',
                    name: '2009-07-01T00:00:00-07:00',
                    label: '2009-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-08-01T00:00:00-07:00',
                    lt: '2009-09-01T00:00:00-07:00',
                    name: '2009-08-01T00:00:00-07:00',
                    label: '2009-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-09-01T00:00:00-07:00',
                    lt: '2009-10-01T00:00:00-07:00',
                    name: '2009-09-01T00:00:00-07:00',
                    label: '2009-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-10-01T00:00:00-07:00',
                    lt: '2009-11-01T00:00:00-07:00',
                    name: '2009-10-01T00:00:00-07:00',
                    label: '2009-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-11-01T00:00:00-07:00',
                    lt: '2009-12-01T00:00:00-08:00',
                    name: '2009-11-01T00:00:00-07:00',
                    label: '2009-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-12-01T00:00:00-08:00',
                    lt: '2010-01-01T00:00:00-08:00',
                    name: '2009-12-01T00:00:00-08:00',
                    label: '2009-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-01-01T00:00:00-08:00',
                    lt: '2010-02-01T00:00:00-08:00',
                    name: '2010-01-01T00:00:00-08:00',
                    label: '2010-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-02-01T00:00:00-08:00',
                    lt: '2010-03-01T00:00:00-08:00',
                    name: '2010-02-01T00:00:00-08:00',
                    label: '2010-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-03-01T00:00:00-08:00',
                    lt: '2010-04-01T00:00:00-07:00',
                    name: '2010-03-01T00:00:00-08:00',
                    label: '2010-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-04-01T00:00:00-07:00',
                    lt: '2010-05-01T00:00:00-07:00',
                    name: '2010-04-01T00:00:00-07:00',
                    label: '2010-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-05-01T00:00:00-07:00',
                    lt: '2010-06-01T00:00:00-07:00',
                    name: '2010-05-01T00:00:00-07:00',
                    label: '2010-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-06-01T00:00:00-07:00',
                    lt: '2010-07-01T00:00:00-07:00',
                    name: '2010-06-01T00:00:00-07:00',
                    label: '2010-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-07-01T00:00:00-07:00',
                    lt: '2010-08-01T00:00:00-07:00',
                    name: '2010-07-01T00:00:00-07:00',
                    label: '2010-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-08-01T00:00:00-07:00',
                    lt: '2010-09-01T00:00:00-07:00',
                    name: '2010-08-01T00:00:00-07:00',
                    label: '2010-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-09-01T00:00:00-07:00',
                    lt: '2010-10-01T00:00:00-07:00',
                    name: '2010-09-01T00:00:00-07:00',
                    label: '2010-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-10-01T00:00:00-07:00',
                    lt: '2010-11-01T00:00:00-07:00',
                    name: '2010-10-01T00:00:00-07:00',
                    label: '2010-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-11-01T00:00:00-07:00',
                    lt: '2010-12-01T00:00:00-08:00',
                    name: '2010-11-01T00:00:00-07:00',
                    label: '2010-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-12-01T00:00:00-08:00',
                    lt: '2011-01-01T00:00:00-08:00',
                    name: '2010-12-01T00:00:00-08:00',
                    label: '2010-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-01-01T00:00:00-08:00',
                    lt: '2011-02-01T00:00:00-08:00',
                    name: '2011-01-01T00:00:00-08:00',
                    label: '2011-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-02-01T00:00:00-08:00',
                    lt: '2011-03-01T00:00:00-08:00',
                    name: '2011-02-01T00:00:00-08:00',
                    label: '2011-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-03-01T00:00:00-08:00',
                    lt: '2011-04-01T00:00:00-07:00',
                    name: '2011-03-01T00:00:00-08:00',
                    label: '2011-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-04-01T00:00:00-07:00',
                    lt: '2011-05-01T00:00:00-07:00',
                    name: '2011-04-01T00:00:00-07:00',
                    label: '2011-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-05-01T00:00:00-07:00',
                    lt: '2011-06-01T00:00:00-07:00',
                    name: '2011-05-01T00:00:00-07:00',
                    label: '2011-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-06-01T00:00:00-07:00',
                    lt: '2011-07-01T00:00:00-07:00',
                    name: '2011-06-01T00:00:00-07:00',
                    label: '2011-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-07-01T00:00:00-07:00',
                    lt: '2011-08-01T00:00:00-07:00',
                    name: '2011-07-01T00:00:00-07:00',
                    label: '2011-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-08-01T00:00:00-07:00',
                    lt: '2011-09-01T00:00:00-07:00',
                    name: '2011-08-01T00:00:00-07:00',
                    label: '2011-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-09-01T00:00:00-07:00',
                    lt: '2011-10-01T00:00:00-07:00',
                    name: '2011-09-01T00:00:00-07:00',
                    label: '2011-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-10-01T00:00:00-07:00',
                    lt: '2011-11-01T00:00:00-07:00',
                    name: '2011-10-01T00:00:00-07:00',
                    label: '2011-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-11-01T00:00:00-07:00',
                    lt: '2011-12-01T00:00:00-08:00',
                    name: '2011-11-01T00:00:00-07:00',
                    label: '2011-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-12-01T00:00:00-08:00',
                    lt: '2012-01-01T00:00:00-08:00',
                    name: '2011-12-01T00:00:00-08:00',
                    label: '2011-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-01-01T00:00:00-08:00',
                    lt: '2012-02-01T00:00:00-08:00',
                    name: '2012-01-01T00:00:00-08:00',
                    label: '2012-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-02-01T00:00:00-08:00',
                    lt: '2012-03-01T00:00:00-08:00',
                    name: '2012-02-01T00:00:00-08:00',
                    label: '2012-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-03-01T00:00:00-08:00',
                    lt: '2012-04-01T00:00:00-07:00',
                    name: '2012-03-01T00:00:00-08:00',
                    label: '2012-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-04-01T00:00:00-07:00',
                    lt: '2012-05-01T00:00:00-07:00',
                    name: '2012-04-01T00:00:00-07:00',
                    label: '2012-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-05-01T00:00:00-07:00',
                    lt: '2012-06-01T00:00:00-07:00',
                    name: '2012-05-01T00:00:00-07:00',
                    label: '2012-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-06-01T00:00:00-07:00',
                    lt: '2012-07-01T00:00:00-07:00',
                    name: '2012-06-01T00:00:00-07:00',
                    label: '2012-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-07-01T00:00:00-07:00',
                    lt: '2012-08-01T00:00:00-07:00',
                    name: '2012-07-01T00:00:00-07:00',
                    label: '2012-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-08-01T00:00:00-07:00',
                    lt: '2012-09-01T00:00:00-07:00',
                    name: '2012-08-01T00:00:00-07:00',
                    label: '2012-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-09-01T00:00:00-07:00',
                    lt: '2012-10-01T00:00:00-07:00',
                    name: '2012-09-01T00:00:00-07:00',
                    label: '2012-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-10-01T00:00:00-07:00',
                    lt: '2012-11-01T00:00:00-07:00',
                    name: '2012-10-01T00:00:00-07:00',
                    label: '2012-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-11-01T00:00:00-07:00',
                    lt: '2012-12-01T00:00:00-08:00',
                    name: '2012-11-01T00:00:00-07:00',
                    label: '2012-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-12-01T00:00:00-08:00',
                    lt: '2013-01-01T00:00:00-08:00',
                    name: '2012-12-01T00:00:00-08:00',
                    label: '2012-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-01-01T00:00:00-08:00',
                    lt: '2013-02-01T00:00:00-08:00',
                    name: '2013-01-01T00:00:00-08:00',
                    label: '2013-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-02-01T00:00:00-08:00',
                    lt: '2013-03-01T00:00:00-08:00',
                    name: '2013-02-01T00:00:00-08:00',
                    label: '2013-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-03-01T00:00:00-08:00',
                    lt: '2013-04-01T00:00:00-07:00',
                    name: '2013-03-01T00:00:00-08:00',
                    label: '2013-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-04-01T00:00:00-07:00',
                    lt: '2013-05-01T00:00:00-07:00',
                    name: '2013-04-01T00:00:00-07:00',
                    label: '2013-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-05-01T00:00:00-07:00',
                    lt: '2013-06-01T00:00:00-07:00',
                    name: '2013-05-01T00:00:00-07:00',
                    label: '2013-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-06-01T00:00:00-07:00',
                    lt: '2013-07-01T00:00:00-07:00',
                    name: '2013-06-01T00:00:00-07:00',
                    label: '2013-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-07-01T00:00:00-07:00',
                    lt: '2013-08-01T00:00:00-07:00',
                    name: '2013-07-01T00:00:00-07:00',
                    label: '2013-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-08-01T00:00:00-07:00',
                    lt: '2013-09-01T00:00:00-07:00',
                    name: '2013-08-01T00:00:00-07:00',
                    label: '2013-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-09-01T00:00:00-07:00',
                    lt: '2013-10-01T00:00:00-07:00',
                    name: '2013-09-01T00:00:00-07:00',
                    label: '2013-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-10-01T00:00:00-07:00',
                    lt: '2013-11-01T00:00:00-07:00',
                    name: '2013-10-01T00:00:00-07:00',
                    label: '2013-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-11-01T00:00:00-07:00',
                    lt: '2013-12-01T00:00:00-08:00',
                    name: '2013-11-01T00:00:00-07:00',
                    label: '2013-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-12-01T00:00:00-08:00',
                    lt: '2014-01-01T00:00:00-08:00',
                    name: '2013-12-01T00:00:00-08:00',
                    label: '2013-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-01-01T00:00:00-08:00',
                    lt: '2014-02-01T00:00:00-08:00',
                    name: '2014-01-01T00:00:00-08:00',
                    label: '2014-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-02-01T00:00:00-08:00',
                    lt: '2014-03-01T00:00:00-08:00',
                    name: '2014-02-01T00:00:00-08:00',
                    label: '2014-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-03-01T00:00:00-08:00',
                    lt: '2014-04-01T00:00:00-07:00',
                    name: '2014-03-01T00:00:00-08:00',
                    label: '2014-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-04-01T00:00:00-07:00',
                    lt: '2014-05-01T00:00:00-07:00',
                    name: '2014-04-01T00:00:00-07:00',
                    label: '2014-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-05-01T00:00:00-07:00',
                    lt: '2014-06-01T00:00:00-07:00',
                    name: '2014-05-01T00:00:00-07:00',
                    label: '2014-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-06-01T00:00:00-07:00',
                    lt: '2014-07-01T00:00:00-07:00',
                    name: '2014-06-01T00:00:00-07:00',
                    label: '2014-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-07-01T00:00:00-07:00',
                    lt: '2014-08-01T00:00:00-07:00',
                    name: '2014-07-01T00:00:00-07:00',
                    label: '2014-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-08-01T00:00:00-07:00',
                    lt: '2014-09-01T00:00:00-07:00',
                    name: '2014-08-01T00:00:00-07:00',
                    label: '2014-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-09-01T00:00:00-07:00',
                    lt: '2014-10-01T00:00:00-07:00',
                    name: '2014-09-01T00:00:00-07:00',
                    label: '2014-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-10-01T00:00:00-07:00',
                    lt: '2014-11-01T00:00:00-07:00',
                    name: '2014-10-01T00:00:00-07:00',
                    label: '2014-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-11-01T00:00:00-07:00',
                    lt: '2014-12-01T00:00:00-08:00',
                    name: '2014-11-01T00:00:00-07:00',
                    label: '2014-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-12-01T00:00:00-08:00',
                    lt: '2015-01-01T00:00:00-08:00',
                    name: '2014-12-01T00:00:00-08:00',
                    label: '2014-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-01-01T00:00:00-08:00',
                    lt: '2015-02-01T00:00:00-08:00',
                    name: '2015-01-01T00:00:00-08:00',
                    label: '2015-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-02-01T00:00:00-08:00',
                    lt: '2015-03-01T00:00:00-08:00',
                    name: '2015-02-01T00:00:00-08:00',
                    label: '2015-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-03-01T00:00:00-08:00',
                    lt: '2015-04-01T00:00:00-07:00',
                    name: '2015-03-01T00:00:00-08:00',
                    label: '2015-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-04-01T00:00:00-07:00',
                    lt: '2015-05-01T00:00:00-07:00',
                    name: '2015-04-01T00:00:00-07:00',
                    label: '2015-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-05-01T00:00:00-07:00',
                    lt: '2015-06-01T00:00:00-07:00',
                    name: '2015-05-01T00:00:00-07:00',
                    label: '2015-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-06-01T00:00:00-07:00',
                    lt: '2015-07-01T00:00:00-07:00',
                    name: '2015-06-01T00:00:00-07:00',
                    label: '2015-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-07-01T00:00:00-07:00',
                    lt: '2015-08-01T00:00:00-07:00',
                    name: '2015-07-01T00:00:00-07:00',
                    label: '2015-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-08-01T00:00:00-07:00',
                    lt: '2015-09-01T00:00:00-07:00',
                    name: '2015-08-01T00:00:00-07:00',
                    label: '2015-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-09-01T00:00:00-07:00',
                    lt: '2015-10-01T00:00:00-07:00',
                    name: '2015-09-01T00:00:00-07:00',
                    label: '2015-09-01T00:00:00-07:00'
                  }
                ]
              }
            }
          ]
        }
      },
      shadow: undefined,
      pageStart: 1,
      pageLength: 10,
      optionsName: 'questions',
      transform: 'search-response',
      view: 'all'
    },
    'docsQueryResult': [
      {
        'snippet-format': 'snippet',
        total: 9,
        start: 1,
        'page-length': 10,
        results: [
          {
            index: 1,
            uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
            path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")',
            score: 57472,
            confidence: 0.4052754,
            fitness: 0.7102667,
            href: '/v1/documents?uri=%2Fquestions%2F8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ],
                source: 'answer',
                id: 'ef376cf4-3a30-44af-b2c5-722e6439723d'
              },
              {
                path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")/array-node("comments")/object-node()[1]/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 2
                  }
                ]
              }
            ]
          },
          {
            index: 2,
            uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
            path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")',
            score: 51200,
            confidence: 0.3825226,
            fitness: 0.6703912,
            href: '/v1/documents?uri=%2Fquestions%2Fd541761f-790b-4ce6-8923-580d62f946f1.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 2
                  }
                ]
              }
            ]
          },
          {
            index: 3,
            uri: '/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json',
            path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")',
            score: 51200,
            confidence: 0.3825226,
            fitness: 0.6703912,
            href: '/v1/documents?uri=%2Fquestions%2F5dce8909-0972-4289-93cd-f2e8790a17fc.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ],
                source: 'answer',
                id: '6432cc02-2770-4b8d-b5f1-0b632875f86e'
              },
              {
                path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")/array-node("comments")/object-node()[1]/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 4
                  }
                ]
              }
            ]
          },
          {
            index: 4,
            uri: '/questions/3410347b-abf0-4e1a-8aa8-f153207322ec.json',
            path: 'fn:doc("/questions/3410347b-abf0-4e1a-8aa8-f153207322ec.json")',
            score: 51200,
            confidence: 0.3825226,
            fitness: 0.6703912,
            href: '/v1/documents?uri=%2Fquestions%2F3410347b-abf0-4e1a-8aa8-f153207322ec.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ],
                source: 'answer',
                id: '594d5815-3d28-40d2-b1b8-6401a79886ae'
              },
              {
                path: 'fn:doc("/questions/3410347b-abf0-4e1a-8aa8-f153207322ec.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: -1
                  }
                ]
              }
            ]
          },
          {
            index: 5,
            uri: '/questions/01600486-60ea-4557-bcfc-9c10b06fb8ce.json',
            path: 'fn:doc("/questions/01600486-60ea-4557-bcfc-9c10b06fb8ce.json")',
            score: 51200,
            confidence: 0.3825226,
            fitness: 0.6703912,
            href: '/v1/documents?uri=%2Fquestions%2F01600486-60ea-4557-bcfc-9c10b06fb8ce.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/01600486-60ea-4557-bcfc-9c10b06fb8ce.json")/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/01600486-60ea-4557-bcfc-9c10b06fb8ce.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              }
            ]
          },
          {
            index: 6,
            uri: '/questions/e3d54960-40f7-4d86-b503-31f14f3dfa13.json',
            path: 'fn:doc("/questions/e3d54960-40f7-4d86-b503-31f14f3dfa13.json")',
            score: 51200,
            confidence: 0.3825226,
            fitness: 0.6703912,
            href: '/v1/documents?uri=%2Fquestions%2Fe3d54960-40f7-4d86-b503-31f14f3dfa13.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/e3d54960-40f7-4d86-b503-31f14f3dfa13.json")/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/e3d54960-40f7-4d86-b503-31f14f3dfa13.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              }
            ]
          },
          {
            index: 7,
            uri: '/questions/778d0b9c-419f-496a-a300-44815d79708d.json',
            path: 'fn:doc("/questions/778d0b9c-419f-496a-a300-44815d79708d.json")',
            score: 51200,
            confidence: 0.3825226,
            fitness: 0.6703912,
            href: '/v1/documents?uri=%2Fquestions%2F778d0b9c-419f-496a-a300-44815d79708d.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/778d0b9c-419f-496a-a300-44815d79708d.json")/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/778d0b9c-419f-496a-a300-44815d79708d.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 1
                  }
                ]
              }
            ]
          },
          {
            index: 8,
            uri: '/questions/fd044632-55eb-4c91-9300-7578cee12eb3.json',
            path: 'fn:doc("/questions/fd044632-55eb-4c91-9300-7578cee12eb3.json")',
            score: 51200,
            confidence: 0.3825226,
            fitness: 0.6703912,
            href: '/v1/documents?uri=%2Fquestions%2Ffd044632-55eb-4c91-9300-7578cee12eb3.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/fd044632-55eb-4c91-9300-7578cee12eb3.json")/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/fd044632-55eb-4c91-9300-7578cee12eb3.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: -1
                  }
                ]
              }
            ]
          },
          {
            index: 9,
            uri: '/questions/6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json',
            path: 'fn:doc("/questions/6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json")',
            score: 51200,
            confidence: 0.3825226,
            fitness: 0.6703912,
            href: '/v1/documents?uri=%2Fquestions%2F6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json")/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 1
                  }
                ]
              }
            ]
          }
        ],
        facets: {
          date: {
            type: 'bucketed',
            facetValues: [
              {
                name: '2014-10-01T00:00:00-07:00',
                count: 6,
                value: '2014-10-01T00:00:00-07:00'
              },
              {
                name: '2015-07-01T00:00:00-07:00',
                count: 1,
                value: '2015-07-01T00:00:00-07:00'
              },
              {
                name: '2015-08-01T00:00:00-07:00',
                count: 2,
                value: '2015-08-01T00:00:00-07:00'
              }
            ]
          },
          tag: {
            type: 'xs:string',
            facetValues: [
              {
                name: 'seed-data',
                count: 8,
                value: 'seed-data'
              },
              {
                name: 'ada',
                count: 2,
                value: 'ada'
              },
              {
                name: 'javascript',
                count: 2,
                value: 'javascript'
              },
              {
                name: 'python',
                count: 2,
                value: 'python'
              },
              {
                name: 'clojure',
                count: 1,
                value: 'clojure'
              },
              {
                name: 'database',
                count: 1,
                value: 'database'
              }
            ]
          }
        },
        query: {
          'and-query': [
            {
              'json-property-value-query': {
                property: 'userName',
                value: [
                  {
                    lang: 'en',
                    _value: 'joe@example.com'
                  }
                ]
              },
              'directory-query': [
                {
                  uri: '/questions/'
                }
              ],
              annotation: [
                {
                  'operator-ref': 'sort',
                  'state-ref': 'active'
                }
              ]
            }
          ]
        },
        qtext: 'sort:active',
        report: '(cts:search(fn:collection(), cts:and-query((cts:json-property-value-query("userName", "joe@example.com", ("lang=en"), 1), cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:index-order(cts:json-property-reference("lastActivityDate",("type=dateTime")), "descending")), 1))[1 to 10]',
        metrics: {
          'query-resolution-time': 'PT0.053401S',
          'facet-resolution-time': 'PT0.045569S',
          'snippet-resolution-time': 'PT0.041822S',
          'total-time': 'PT0.43562S'
        }
      },
      {
        uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '624',
        content: {
          creationDate: '2014-10-01T08:59:08.824Z',
          id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019',
          itemTally: 1,
          lastActivityDate: '2015-08-03T07:50:35.261Z',
          owner: {
            id: '9611450a-0663-45a5-8a08-f1c71320475e',
            reputation: 104,
            userName: 'mary@example.com',
            displayName: 'MaryAdmin'
          },
          tags: [
            'ada',
            'seed-data'
          ],
          text: 'I, Mary, had a question about the word abyss and the number 0',
          title: 'Mary\'s Question Number 0',
          voteCount: 2,
          acceptedAnswerId: 'ef376cf4-3a30-44af-b2c5-722e6439723d',
          accepted: true,
          answerCount: 2,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '543',
        content: {
          accepted: true,
          acceptedAnswerId: '3b003576-da9c-496b-8b35-fda663da2cd9',
          answerCount: 1,
          creationDate: '2015-07-15T14:42:50.608-0700',
          id: 'd541761f-790b-4ce6-8923-580d62f946f1',
          itemTally: 1,
          lastActivityDate: '2015-08-01T09:00:48.560Z',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          },
          tags: [

          ],
          text: '**test**',
          title: 'mine only test',
          voteCount: 2,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '559',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          creationDate: '2014-10-01T08:59:08.866Z',
          id: '5dce8909-0972-4289-93cd-f2e8790a17fc',
          itemTally: 0,
          lastActivityDate: '2015-07-30T02:37:54.574Z',
          owner: {
            id: '9611450a-0663-45a5-8a08-f1c71320475e',
            reputation: 104,
            userName: 'mary@example.com',
            displayName: 'MaryAdmin'
          },
          tags: [
            'python',
            'seed-data'
          ],
          text: 'I, Mary, had a question about the word balsamic and the number 1',
          title: 'Mary\'s Question Number 1',
          voteCount: 4,
          answerCount: 3,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/3410347b-abf0-4e1a-8aa8-f153207322ec.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '604',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          creationDate: '2014-10-01T08:59:09.216Z',
          id: '3410347b-abf0-4e1a-8aa8-f153207322ec',
          itemTally: -1,
          lastActivityDate: '2014-10-01T08:59:09.351Z',
          owner: {
            id: '9611450a-0663-45a5-8a08-f1c71320475e',
            reputation: 104,
            userName: 'mary@example.com',
            displayName: 'MaryAdmin'
          },
          tags: [
            'javascript',
            'seed-data'
          ],
          text: 'I, Mary, had a question about the word chocolate and the number 2',
          title: 'Mary\'s Question Number 2',
          voteCount: -1,
          answerCount: 1,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ]
        }
      },
      {
        uri: '/questions/01600486-60ea-4557-bcfc-9c10b06fb8ce.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '553',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          creationDate: '2014-10-01T08:59:08.779Z',
          id: '01600486-60ea-4557-bcfc-9c10b06fb8ce',
          itemTally: 0,
          lastActivityDate: '2014-10-01T08:59:08.779Z',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          },
          tags: [
            'database',
            'seed-data'
          ],
          text: 'I had a question about the word effervesence and the number 4',
          title: 'Joe\'s Question Number 4',
          voteCount: 0,
          answerCount: 0,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/e3d54960-40f7-4d86-b503-31f14f3dfa13.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '545',
        content: {
          creationDate: '2014-10-01T08:59:08.725Z',
          id: 'e3d54960-40f7-4d86-b503-31f14f3dfa13',
          itemTally: 0,
          lastActivityDate: '2014-10-01T08:59:08.725Z',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          },
          tags: [
            'clojure',
            'seed-data'
          ],
          accepted: false,
          acceptedAnswerId: null,
          text: 'I had a question about the word denim and the number 3',
          title: 'Joe\'s Question Number 3',
          voteCount: 0,
          answerCount: 0,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/778d0b9c-419f-496a-a300-44815d79708d.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '590',
        content: {
          creationDate: '2014-10-01T08:59:08.682Z',
          id: '778d0b9c-419f-496a-a300-44815d79708d',
          itemTally: 1,
          lastActivityDate: '2014-10-01T08:59:08.682Z',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          },
          tags: [
            'javascript',
            'seed-data'
          ],
          accepted: false,
          acceptedAnswerId: null,
          text: 'I had a question about the word chocolate and the number 2',
          title: 'Joe\'s Question Number 2',
          voteCount: 1,
          answerCount: 0,
          upvotingContributorIds: [
            '9611450a-0663-45a5-8a08-f1c71320475e'
          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/fd044632-55eb-4c91-9300-7578cee12eb3.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '587',
        content: {
          creationDate: '2014-10-01T08:59:08.604Z',
          id: 'fd044632-55eb-4c91-9300-7578cee12eb3',
          itemTally: -1,
          lastActivityDate: '2014-10-01T08:59:08.604Z',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          },
          tags: [
            'python',
            'seed-data'
          ],
          accepted: false,
          acceptedAnswerId: null,
          text: 'I had a question about the word balsamic and the number 1',
          title: 'Joe\'s Question Number 1',
          voteCount: -1,
          answerCount: 0,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [
            '9611450a-0663-45a5-8a08-f1c71320475e'
          ]
        }
      },
      {
        uri: '/questions/6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '579',
        content: {
          creationDate: '2014-10-01T08:59:07.602Z',
          id: '6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301',
          itemTally: 1,
          lastActivityDate: '2014-10-01T08:59:07.602Z',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          },
          tags: [
            'ada',
            'seed-data'
          ],
          accepted: false,
          acceptedAnswerId: null,
          text: 'I had a question about the word abyss and the number 0',
          title: 'Joe\'s Question Number 0',
          voteCount: 1,
          answerCount: 0,
          upvotingContributorIds: [
            '9611450a-0663-45a5-8a08-f1c71320475e'
          ],
          downvotingContributorIds: [

          ]
        }
      }
    ],
    'ret': {
      'snippet-format': 'snippet',
      total: 9,
      start: 1,
      'page-length': 10,
      results: [
        {
          index: 1,
          uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
          path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")',
          score: 57472,
          confidence: 0.4052754,
          fitness: 0.7102667,
          href: '/v1/documents?uri=%2Fquestions%2F8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            creationDate: '2014-10-01T08:59:08.824Z',
            id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019',
            itemTally: 1,
            lastActivityDate: '2015-08-03T07:50:35.261Z',
            owner: {
              id: '9611450a-0663-45a5-8a08-f1c71320475e',
              reputation: 104,
              userName: 'mary@example.com',
              displayName: 'MaryAdmin'
            },
            tags: [
              'ada',
              'seed-data'
            ],
            title: 'Mary\'s Question Number 0',
            voteCount: 2,
            acceptedAnswerId: 'ef376cf4-3a30-44af-b2c5-722e6439723d',
            accepted: true,
            answerCount: 2,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ],
            snippets: [
              {
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ],
                source: 'answer',
                id: 'ef376cf4-3a30-44af-b2c5-722e6439723d'
              },
              {
                path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")/array-node("comments")/object-node()[1]/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 2
                  }
                ]
              }
            ]
          }
        },
        {
          index: 2,
          uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
          path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")',
          score: 51200,
          confidence: 0.3825226,
          fitness: 0.6703912,
          href: '/v1/documents?uri=%2Fquestions%2Fd541761f-790b-4ce6-8923-580d62f946f1.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: true,
            acceptedAnswerId: '3b003576-da9c-496b-8b35-fda663da2cd9',
            answerCount: 1,
            creationDate: '2015-07-15T14:42:50.608-0700',
            id: 'd541761f-790b-4ce6-8923-580d62f946f1',
            itemTally: 1,
            lastActivityDate: '2015-08-01T09:00:48.560Z',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            },
            tags: [

            ],
            text: '**test**',
            title: 'mine only test',
            voteCount: 2,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 3,
          uri: '/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json',
          path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")',
          score: 51200,
          confidence: 0.3825226,
          fitness: 0.6703912,
          href: '/v1/documents?uri=%2Fquestions%2F5dce8909-0972-4289-93cd-f2e8790a17fc.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            creationDate: '2014-10-01T08:59:08.866Z',
            id: '5dce8909-0972-4289-93cd-f2e8790a17fc',
            itemTally: 0,
            lastActivityDate: '2015-07-30T02:37:54.574Z',
            owner: {
              id: '9611450a-0663-45a5-8a08-f1c71320475e',
              reputation: 104,
              userName: 'mary@example.com',
              displayName: 'MaryAdmin'
            },
            tags: [
              'python',
              'seed-data'
            ],
            title: 'Mary\'s Question Number 1',
            voteCount: 4,
            answerCount: 3,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [

            ],
            snippets: [
              {
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ],
                source: 'answer',
                id: '6432cc02-2770-4b8d-b5f1-0b632875f86e'
              },
              {
                path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")/array-node("comments")/object-node()[1]/owner/text("userName")',
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 4
                  }
                ]
              }
            ]
          }
        },
        {
          index: 4,
          uri: '/questions/3410347b-abf0-4e1a-8aa8-f153207322ec.json',
          path: 'fn:doc("/questions/3410347b-abf0-4e1a-8aa8-f153207322ec.json")',
          score: 51200,
          confidence: 0.3825226,
          fitness: 0.6703912,
          href: '/v1/documents?uri=%2Fquestions%2F3410347b-abf0-4e1a-8aa8-f153207322ec.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            creationDate: '2014-10-01T08:59:09.216Z',
            id: '3410347b-abf0-4e1a-8aa8-f153207322ec',
            itemTally: -1,
            lastActivityDate: '2014-10-01T08:59:09.351Z',
            owner: {
              id: '9611450a-0663-45a5-8a08-f1c71320475e',
              reputation: 104,
              userName: 'mary@example.com',
              displayName: 'MaryAdmin'
            },
            tags: [
              'javascript',
              'seed-data'
            ],
            title: 'Mary\'s Question Number 2',
            voteCount: -1,
            answerCount: 1,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            snippets: [
              {
                'match-text': [
                  {
                    highlight: 'joe@example.com'
                  }
                ],
                source: 'answer',
                id: '594d5815-3d28-40d2-b1b8-6401a79886ae'
              },
              {
                path: 'fn:doc("/questions/3410347b-abf0-4e1a-8aa8-f153207322ec.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: -1
                  }
                ]
              }
            ]
          }
        },
        {
          index: 5,
          uri: '/questions/01600486-60ea-4557-bcfc-9c10b06fb8ce.json',
          path: 'fn:doc("/questions/01600486-60ea-4557-bcfc-9c10b06fb8ce.json")',
          score: 51200,
          confidence: 0.3825226,
          fitness: 0.6703912,
          href: '/v1/documents?uri=%2Fquestions%2F01600486-60ea-4557-bcfc-9c10b06fb8ce.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            creationDate: '2014-10-01T08:59:08.779Z',
            id: '01600486-60ea-4557-bcfc-9c10b06fb8ce',
            itemTally: 0,
            lastActivityDate: '2014-10-01T08:59:08.779Z',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            },
            tags: [
              'database',
              'seed-data'
            ],
            text: 'I had a question about the word effervesence and the number 4',
            title: 'Joe\'s Question Number 4',
            voteCount: 0,
            answerCount: 0,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 6,
          uri: '/questions/e3d54960-40f7-4d86-b503-31f14f3dfa13.json',
          path: 'fn:doc("/questions/e3d54960-40f7-4d86-b503-31f14f3dfa13.json")',
          score: 51200,
          confidence: 0.3825226,
          fitness: 0.6703912,
          href: '/v1/documents?uri=%2Fquestions%2Fe3d54960-40f7-4d86-b503-31f14f3dfa13.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            creationDate: '2014-10-01T08:59:08.725Z',
            id: 'e3d54960-40f7-4d86-b503-31f14f3dfa13',
            itemTally: 0,
            lastActivityDate: '2014-10-01T08:59:08.725Z',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            },
            tags: [
              'clojure',
              'seed-data'
            ],
            accepted: false,
            acceptedAnswerId: null,
            text: 'I had a question about the word denim and the number 3',
            title: 'Joe\'s Question Number 3',
            voteCount: 0,
            answerCount: 0,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 7,
          uri: '/questions/778d0b9c-419f-496a-a300-44815d79708d.json',
          path: 'fn:doc("/questions/778d0b9c-419f-496a-a300-44815d79708d.json")',
          score: 51200,
          confidence: 0.3825226,
          fitness: 0.6703912,
          href: '/v1/documents?uri=%2Fquestions%2F778d0b9c-419f-496a-a300-44815d79708d.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            creationDate: '2014-10-01T08:59:08.682Z',
            id: '778d0b9c-419f-496a-a300-44815d79708d',
            itemTally: 1,
            lastActivityDate: '2014-10-01T08:59:08.682Z',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            },
            tags: [
              'javascript',
              'seed-data'
            ],
            accepted: false,
            acceptedAnswerId: null,
            text: 'I had a question about the word chocolate and the number 2',
            title: 'Joe\'s Question Number 2',
            voteCount: 1,
            answerCount: 0,
            upvotingContributorIds: [
              '9611450a-0663-45a5-8a08-f1c71320475e'
            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 8,
          uri: '/questions/fd044632-55eb-4c91-9300-7578cee12eb3.json',
          path: 'fn:doc("/questions/fd044632-55eb-4c91-9300-7578cee12eb3.json")',
          score: 51200,
          confidence: 0.3825226,
          fitness: 0.6703912,
          href: '/v1/documents?uri=%2Fquestions%2Ffd044632-55eb-4c91-9300-7578cee12eb3.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            creationDate: '2014-10-01T08:59:08.604Z',
            id: 'fd044632-55eb-4c91-9300-7578cee12eb3',
            itemTally: -1,
            lastActivityDate: '2014-10-01T08:59:08.604Z',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            },
            tags: [
              'python',
              'seed-data'
            ],
            accepted: false,
            acceptedAnswerId: null,
            text: 'I had a question about the word balsamic and the number 1',
            title: 'Joe\'s Question Number 1',
            voteCount: -1,
            answerCount: 0,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [
              '9611450a-0663-45a5-8a08-f1c71320475e'
            ]
          }
        },
        {
          index: 9,
          uri: '/questions/6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json',
          path: 'fn:doc("/questions/6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json")',
          score: 51200,
          confidence: 0.3825226,
          fitness: 0.6703912,
          href: '/v1/documents?uri=%2Fquestions%2F6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            creationDate: '2014-10-01T08:59:07.602Z',
            id: '6c90b1cf-2cd8-4a8d-87ae-0c6d5182d301',
            itemTally: 1,
            lastActivityDate: '2014-10-01T08:59:07.602Z',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            },
            tags: [
              'ada',
              'seed-data'
            ],
            accepted: false,
            acceptedAnswerId: null,
            text: 'I had a question about the word abyss and the number 0',
            title: 'Joe\'s Question Number 0',
            voteCount: 1,
            answerCount: 0,
            upvotingContributorIds: [
              '9611450a-0663-45a5-8a08-f1c71320475e'
            ],
            downvotingContributorIds: [

            ]
          }
        }
      ],
      facets: {
        date: {
          type: 'bucketed',
          facetValues: [
            {
              name: '2014-10-01T00:00:00-07:00',
              count: 6,
              value: '2014-10-01T00:00:00-07:00'
            },
            {
              name: '2015-07-01T00:00:00-07:00',
              count: 1,
              value: '2015-07-01T00:00:00-07:00'
            },
            {
              name: '2015-08-01T00:00:00-07:00',
              count: 2,
              value: '2015-08-01T00:00:00-07:00'
            }
          ]
        },
        tag: {
          type: 'xs:string',
          facetValues: [
            {
              name: 'seed-data',
              count: 8,
              value: 'seed-data'
            },
            {
              name: 'ada',
              count: 2,
              value: 'ada'
            },
            {
              name: 'javascript',
              count: 2,
              value: 'javascript'
            },
            {
              name: 'python',
              count: 2,
              value: 'python'
            },
            {
              name: 'clojure',
              count: 1,
              value: 'clojure'
            },
            {
              name: 'database',
              count: 1,
              value: 'database'
            }
          ]
        }
      },
      query: {
        'and-query': [
          {
            'json-property-value-query': {
              property: 'userName',
              value: [
                {
                  lang: 'en',
                  _value: 'joe@example.com'
                }
              ]
            },
            'directory-query': [
              {
                uri: '/questions/'
              }
            ],
            annotation: [
              {
                'operator-ref': 'sort',
                'state-ref': 'active'
              }
            ]
          }
        ]
      },
      qtext: 'sort:active',
      report: '(cts:search(fn:collection(), cts:and-query((cts:json-property-value-query("userName", "joe@example.com", ("lang=en"), 1), cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:index-order(cts:json-property-reference("lastActivityDate",("type=dateTime")), "descending")), 1))[1 to 10]',
      metrics: {
        'query-resolution-time': 'PT0.053401S',
        'facet-resolution-time': 'PT0.045569S',
        'snippet-resolution-time': 'PT0.041822S',
        'total-time': 'PT0.43562S'
      }
    },
  },
  'resolvedOnly': {
    spec: {
      search: {
        qtext: [
          '',
          'sort:active'
        ],
        start: 1,
        query: {
          'and-query': {
            queries: [
              {
                'value-constraint-query': {
                  'constraint-name': 'resolved',
                  text: true
                }
              }
            ]
          }
        },
        timezone: 'America/Los_Angeles'
      },
      shadow: undefined
    },
    docsQuery: {
      search: {
        qtext: [
          '',
          'sort:active'
        ],
        query: {
          'and-query': {
            queries: [
              {
                'value-constraint-query': {
                  'constraint-name': 'resolved',
                  text: true
                }
              },
              {
                'directory-query': {
                  uri: [
                    '/questions/'
                  ]
                }
              }
            ]
          }
        },
        timezone: 'America/Los_Angeles',
        options: {
          constraint: [
            {
              name: 'date',
              range: {
                facet: true,
                'json-property': 'lastActivityDate',
                type: 'xs:dateTime',
                bucket: [
                  {
                    ge: '2009-05-01T00:00:00-07:00',
                    lt: '2009-06-01T00:00:00-07:00',
                    name: '2009-05-01T00:00:00-07:00',
                    label: '2009-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-06-01T00:00:00-07:00',
                    lt: '2009-07-01T00:00:00-07:00',
                    name: '2009-06-01T00:00:00-07:00',
                    label: '2009-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-07-01T00:00:00-07:00',
                    lt: '2009-08-01T00:00:00-07:00',
                    name: '2009-07-01T00:00:00-07:00',
                    label: '2009-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-08-01T00:00:00-07:00',
                    lt: '2009-09-01T00:00:00-07:00',
                    name: '2009-08-01T00:00:00-07:00',
                    label: '2009-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-09-01T00:00:00-07:00',
                    lt: '2009-10-01T00:00:00-07:00',
                    name: '2009-09-01T00:00:00-07:00',
                    label: '2009-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-10-01T00:00:00-07:00',
                    lt: '2009-11-01T00:00:00-07:00',
                    name: '2009-10-01T00:00:00-07:00',
                    label: '2009-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-11-01T00:00:00-07:00',
                    lt: '2009-12-01T00:00:00-08:00',
                    name: '2009-11-01T00:00:00-07:00',
                    label: '2009-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-12-01T00:00:00-08:00',
                    lt: '2010-01-01T00:00:00-08:00',
                    name: '2009-12-01T00:00:00-08:00',
                    label: '2009-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-01-01T00:00:00-08:00',
                    lt: '2010-02-01T00:00:00-08:00',
                    name: '2010-01-01T00:00:00-08:00',
                    label: '2010-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-02-01T00:00:00-08:00',
                    lt: '2010-03-01T00:00:00-08:00',
                    name: '2010-02-01T00:00:00-08:00',
                    label: '2010-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-03-01T00:00:00-08:00',
                    lt: '2010-04-01T00:00:00-07:00',
                    name: '2010-03-01T00:00:00-08:00',
                    label: '2010-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-04-01T00:00:00-07:00',
                    lt: '2010-05-01T00:00:00-07:00',
                    name: '2010-04-01T00:00:00-07:00',
                    label: '2010-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-05-01T00:00:00-07:00',
                    lt: '2010-06-01T00:00:00-07:00',
                    name: '2010-05-01T00:00:00-07:00',
                    label: '2010-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-06-01T00:00:00-07:00',
                    lt: '2010-07-01T00:00:00-07:00',
                    name: '2010-06-01T00:00:00-07:00',
                    label: '2010-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-07-01T00:00:00-07:00',
                    lt: '2010-08-01T00:00:00-07:00',
                    name: '2010-07-01T00:00:00-07:00',
                    label: '2010-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-08-01T00:00:00-07:00',
                    lt: '2010-09-01T00:00:00-07:00',
                    name: '2010-08-01T00:00:00-07:00',
                    label: '2010-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-09-01T00:00:00-07:00',
                    lt: '2010-10-01T00:00:00-07:00',
                    name: '2010-09-01T00:00:00-07:00',
                    label: '2010-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-10-01T00:00:00-07:00',
                    lt: '2010-11-01T00:00:00-07:00',
                    name: '2010-10-01T00:00:00-07:00',
                    label: '2010-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-11-01T00:00:00-07:00',
                    lt: '2010-12-01T00:00:00-08:00',
                    name: '2010-11-01T00:00:00-07:00',
                    label: '2010-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-12-01T00:00:00-08:00',
                    lt: '2011-01-01T00:00:00-08:00',
                    name: '2010-12-01T00:00:00-08:00',
                    label: '2010-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-01-01T00:00:00-08:00',
                    lt: '2011-02-01T00:00:00-08:00',
                    name: '2011-01-01T00:00:00-08:00',
                    label: '2011-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-02-01T00:00:00-08:00',
                    lt: '2011-03-01T00:00:00-08:00',
                    name: '2011-02-01T00:00:00-08:00',
                    label: '2011-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-03-01T00:00:00-08:00',
                    lt: '2011-04-01T00:00:00-07:00',
                    name: '2011-03-01T00:00:00-08:00',
                    label: '2011-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-04-01T00:00:00-07:00',
                    lt: '2011-05-01T00:00:00-07:00',
                    name: '2011-04-01T00:00:00-07:00',
                    label: '2011-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-05-01T00:00:00-07:00',
                    lt: '2011-06-01T00:00:00-07:00',
                    name: '2011-05-01T00:00:00-07:00',
                    label: '2011-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-06-01T00:00:00-07:00',
                    lt: '2011-07-01T00:00:00-07:00',
                    name: '2011-06-01T00:00:00-07:00',
                    label: '2011-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-07-01T00:00:00-07:00',
                    lt: '2011-08-01T00:00:00-07:00',
                    name: '2011-07-01T00:00:00-07:00',
                    label: '2011-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-08-01T00:00:00-07:00',
                    lt: '2011-09-01T00:00:00-07:00',
                    name: '2011-08-01T00:00:00-07:00',
                    label: '2011-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-09-01T00:00:00-07:00',
                    lt: '2011-10-01T00:00:00-07:00',
                    name: '2011-09-01T00:00:00-07:00',
                    label: '2011-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-10-01T00:00:00-07:00',
                    lt: '2011-11-01T00:00:00-07:00',
                    name: '2011-10-01T00:00:00-07:00',
                    label: '2011-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-11-01T00:00:00-07:00',
                    lt: '2011-12-01T00:00:00-08:00',
                    name: '2011-11-01T00:00:00-07:00',
                    label: '2011-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-12-01T00:00:00-08:00',
                    lt: '2012-01-01T00:00:00-08:00',
                    name: '2011-12-01T00:00:00-08:00',
                    label: '2011-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-01-01T00:00:00-08:00',
                    lt: '2012-02-01T00:00:00-08:00',
                    name: '2012-01-01T00:00:00-08:00',
                    label: '2012-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-02-01T00:00:00-08:00',
                    lt: '2012-03-01T00:00:00-08:00',
                    name: '2012-02-01T00:00:00-08:00',
                    label: '2012-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-03-01T00:00:00-08:00',
                    lt: '2012-04-01T00:00:00-07:00',
                    name: '2012-03-01T00:00:00-08:00',
                    label: '2012-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-04-01T00:00:00-07:00',
                    lt: '2012-05-01T00:00:00-07:00',
                    name: '2012-04-01T00:00:00-07:00',
                    label: '2012-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-05-01T00:00:00-07:00',
                    lt: '2012-06-01T00:00:00-07:00',
                    name: '2012-05-01T00:00:00-07:00',
                    label: '2012-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-06-01T00:00:00-07:00',
                    lt: '2012-07-01T00:00:00-07:00',
                    name: '2012-06-01T00:00:00-07:00',
                    label: '2012-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-07-01T00:00:00-07:00',
                    lt: '2012-08-01T00:00:00-07:00',
                    name: '2012-07-01T00:00:00-07:00',
                    label: '2012-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-08-01T00:00:00-07:00',
                    lt: '2012-09-01T00:00:00-07:00',
                    name: '2012-08-01T00:00:00-07:00',
                    label: '2012-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-09-01T00:00:00-07:00',
                    lt: '2012-10-01T00:00:00-07:00',
                    name: '2012-09-01T00:00:00-07:00',
                    label: '2012-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-10-01T00:00:00-07:00',
                    lt: '2012-11-01T00:00:00-07:00',
                    name: '2012-10-01T00:00:00-07:00',
                    label: '2012-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-11-01T00:00:00-07:00',
                    lt: '2012-12-01T00:00:00-08:00',
                    name: '2012-11-01T00:00:00-07:00',
                    label: '2012-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-12-01T00:00:00-08:00',
                    lt: '2013-01-01T00:00:00-08:00',
                    name: '2012-12-01T00:00:00-08:00',
                    label: '2012-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-01-01T00:00:00-08:00',
                    lt: '2013-02-01T00:00:00-08:00',
                    name: '2013-01-01T00:00:00-08:00',
                    label: '2013-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-02-01T00:00:00-08:00',
                    lt: '2013-03-01T00:00:00-08:00',
                    name: '2013-02-01T00:00:00-08:00',
                    label: '2013-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-03-01T00:00:00-08:00',
                    lt: '2013-04-01T00:00:00-07:00',
                    name: '2013-03-01T00:00:00-08:00',
                    label: '2013-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-04-01T00:00:00-07:00',
                    lt: '2013-05-01T00:00:00-07:00',
                    name: '2013-04-01T00:00:00-07:00',
                    label: '2013-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-05-01T00:00:00-07:00',
                    lt: '2013-06-01T00:00:00-07:00',
                    name: '2013-05-01T00:00:00-07:00',
                    label: '2013-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-06-01T00:00:00-07:00',
                    lt: '2013-07-01T00:00:00-07:00',
                    name: '2013-06-01T00:00:00-07:00',
                    label: '2013-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-07-01T00:00:00-07:00',
                    lt: '2013-08-01T00:00:00-07:00',
                    name: '2013-07-01T00:00:00-07:00',
                    label: '2013-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-08-01T00:00:00-07:00',
                    lt: '2013-09-01T00:00:00-07:00',
                    name: '2013-08-01T00:00:00-07:00',
                    label: '2013-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-09-01T00:00:00-07:00',
                    lt: '2013-10-01T00:00:00-07:00',
                    name: '2013-09-01T00:00:00-07:00',
                    label: '2013-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-10-01T00:00:00-07:00',
                    lt: '2013-11-01T00:00:00-07:00',
                    name: '2013-10-01T00:00:00-07:00',
                    label: '2013-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-11-01T00:00:00-07:00',
                    lt: '2013-12-01T00:00:00-08:00',
                    name: '2013-11-01T00:00:00-07:00',
                    label: '2013-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-12-01T00:00:00-08:00',
                    lt: '2014-01-01T00:00:00-08:00',
                    name: '2013-12-01T00:00:00-08:00',
                    label: '2013-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-01-01T00:00:00-08:00',
                    lt: '2014-02-01T00:00:00-08:00',
                    name: '2014-01-01T00:00:00-08:00',
                    label: '2014-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-02-01T00:00:00-08:00',
                    lt: '2014-03-01T00:00:00-08:00',
                    name: '2014-02-01T00:00:00-08:00',
                    label: '2014-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-03-01T00:00:00-08:00',
                    lt: '2014-04-01T00:00:00-07:00',
                    name: '2014-03-01T00:00:00-08:00',
                    label: '2014-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-04-01T00:00:00-07:00',
                    lt: '2014-05-01T00:00:00-07:00',
                    name: '2014-04-01T00:00:00-07:00',
                    label: '2014-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-05-01T00:00:00-07:00',
                    lt: '2014-06-01T00:00:00-07:00',
                    name: '2014-05-01T00:00:00-07:00',
                    label: '2014-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-06-01T00:00:00-07:00',
                    lt: '2014-07-01T00:00:00-07:00',
                    name: '2014-06-01T00:00:00-07:00',
                    label: '2014-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-07-01T00:00:00-07:00',
                    lt: '2014-08-01T00:00:00-07:00',
                    name: '2014-07-01T00:00:00-07:00',
                    label: '2014-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-08-01T00:00:00-07:00',
                    lt: '2014-09-01T00:00:00-07:00',
                    name: '2014-08-01T00:00:00-07:00',
                    label: '2014-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-09-01T00:00:00-07:00',
                    lt: '2014-10-01T00:00:00-07:00',
                    name: '2014-09-01T00:00:00-07:00',
                    label: '2014-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-10-01T00:00:00-07:00',
                    lt: '2014-11-01T00:00:00-07:00',
                    name: '2014-10-01T00:00:00-07:00',
                    label: '2014-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-11-01T00:00:00-07:00',
                    lt: '2014-12-01T00:00:00-08:00',
                    name: '2014-11-01T00:00:00-07:00',
                    label: '2014-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-12-01T00:00:00-08:00',
                    lt: '2015-01-01T00:00:00-08:00',
                    name: '2014-12-01T00:00:00-08:00',
                    label: '2014-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-01-01T00:00:00-08:00',
                    lt: '2015-02-01T00:00:00-08:00',
                    name: '2015-01-01T00:00:00-08:00',
                    label: '2015-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-02-01T00:00:00-08:00',
                    lt: '2015-03-01T00:00:00-08:00',
                    name: '2015-02-01T00:00:00-08:00',
                    label: '2015-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-03-01T00:00:00-08:00',
                    lt: '2015-04-01T00:00:00-07:00',
                    name: '2015-03-01T00:00:00-08:00',
                    label: '2015-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-04-01T00:00:00-07:00',
                    lt: '2015-05-01T00:00:00-07:00',
                    name: '2015-04-01T00:00:00-07:00',
                    label: '2015-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-05-01T00:00:00-07:00',
                    lt: '2015-06-01T00:00:00-07:00',
                    name: '2015-05-01T00:00:00-07:00',
                    label: '2015-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-06-01T00:00:00-07:00',
                    lt: '2015-07-01T00:00:00-07:00',
                    name: '2015-06-01T00:00:00-07:00',
                    label: '2015-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-07-01T00:00:00-07:00',
                    lt: '2015-08-01T00:00:00-07:00',
                    name: '2015-07-01T00:00:00-07:00',
                    label: '2015-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-08-01T00:00:00-07:00',
                    lt: '2015-09-01T00:00:00-07:00',
                    name: '2015-08-01T00:00:00-07:00',
                    label: '2015-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-09-01T00:00:00-07:00',
                    lt: '2015-10-01T00:00:00-07:00',
                    name: '2015-09-01T00:00:00-07:00',
                    label: '2015-09-01T00:00:00-07:00'
                  }
                ]
              }
            }
          ]
        }
      },
      shadow: undefined,
      pageStart: 1,
      pageLength: 10,
      optionsName: 'questions',
      transform: 'search-response',
      view: 'all'
    },
    docsQueryResult: [
      {
        'snippet-format': 'snippet',
        total: 1904,
        start: 1,
        'page-length': 10,
        results: [
          {
            index: 1,
            uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
            path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")',
            score: 15360,
            confidence: 0.2095163,
            fitness: 0.6312799,
            href: '/v1/documents?uri=%2Fquestions%2F8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 2
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          },
          {
            index: 2,
            uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
            path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")',
            score: 17408,
            confidence: 0.2230471,
            fitness: 0.6720487,
            href: '/v1/documents?uri=%2Fquestions%2Fd541761f-790b-4ce6-8923-580d62f946f1.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 2
                  }
                ]
              }
            ]
          },
          {
            index: 3,
            uri: '/questions/soq11452911.json',
            path: 'fn:doc("/questions/soq11452911.json")',
            score: 9216,
            confidence: 0.1622906,
            fitness: 0.4889873,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq11452911.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/soq11452911.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 9
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/soq11452911.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          },
          {
            index: 4,
            uri: '/questions/soq25807100.json',
            path: 'fn:doc("/questions/soq25807100.json")',
            score: 9216,
            confidence: 0.1622906,
            fitness: 0.4889873,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq25807100.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/soq25807100.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 1
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/soq25807100.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          },
          {
            index: 5,
            uri: '/questions/soq25787538.json',
            path: 'fn:doc("/questions/soq25787538.json")',
            score: 9216,
            confidence: 0.1622906,
            fitness: 0.4889873,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq25787538.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/soq25787538.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 1
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/soq25787538.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          },
          {
            index: 6,
            uri: '/questions/soq25774302.json',
            path: 'fn:doc("/questions/soq25774302.json")',
            score: 9216,
            confidence: 0.1622906,
            fitness: 0.4889873,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq25774302.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/soq25774302.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/soq25774302.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          },
          {
            index: 7,
            uri: '/questions/soq25772565.json',
            path: 'fn:doc("/questions/soq25772565.json")',
            score: 9216,
            confidence: 0.1622906,
            fitness: 0.4889873,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq25772565.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/soq25772565.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 1
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/soq25772565.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          },
          {
            index: 8,
            uri: '/questions/soq25772163.json',
            path: 'fn:doc("/questions/soq25772163.json")',
            score: 9216,
            confidence: 0.1622906,
            fitness: 0.4889873,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq25772163.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/soq25772163.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/soq25772163.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          },
          {
            index: 9,
            uri: '/questions/soq25748328.json',
            path: 'fn:doc("/questions/soq25748328.json")',
            score: 9216,
            confidence: 0.1622906,
            fitness: 0.4889873,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq25748328.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/soq25748328.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/soq25748328.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          },
          {
            index: 10,
            uri: '/questions/soq25753438.json',
            path: 'fn:doc("/questions/soq25753438.json")',
            score: 11264,
            confidence: 0.179419,
            fitness: 0.5405958,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq25753438.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/soq25753438.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 2
                  }
                ]
              },
              {
                path: 'fn:doc("/questions/soq25753438.json")/boolean-node("accepted")',
                'match-text': [
                  {
                    highlight: true
                  }
                ]
              }
            ]
          }
        ],
        facets: {
          date: {
            type: 'bucketed',
            facetValues: [
              {
                name: '2009-06-01T00:00:00-07:00',
                count: 1,
                value: '2009-06-01T00:00:00-07:00'
              },
              {
                name: '2009-07-01T00:00:00-07:00',
                count: 1,
                value: '2009-07-01T00:00:00-07:00'
              },
              {
                name: '2009-08-01T00:00:00-07:00',
                count: 4,
                value: '2009-08-01T00:00:00-07:00'
              },
              {
                name: '2009-09-01T00:00:00-07:00',
                count: 2,
                value: '2009-09-01T00:00:00-07:00'
              },
              {
                name: '2009-10-01T00:00:00-07:00',
                count: 2,
                value: '2009-10-01T00:00:00-07:00'
              },
              {
                name: '2009-11-01T00:00:00-07:00',
                count: 3,
                value: '2009-11-01T00:00:00-07:00'
              },
              {
                name: '2009-12-01T00:00:00-08:00',
                count: 3,
                value: '2009-12-01T00:00:00-08:00'
              },
              {
                name: '2010-01-01T00:00:00-08:00',
                count: 5,
                value: '2010-01-01T00:00:00-08:00'
              },
              {
                name: '2010-02-01T00:00:00-08:00',
                count: 10,
                value: '2010-02-01T00:00:00-08:00'
              },
              {
                name: '2010-03-01T00:00:00-08:00',
                count: 8,
                value: '2010-03-01T00:00:00-08:00'
              },
              {
                name: '2010-04-01T00:00:00-07:00',
                count: 11,
                value: '2010-04-01T00:00:00-07:00'
              },
              {
                name: '2010-05-01T00:00:00-07:00',
                count: 5,
                value: '2010-05-01T00:00:00-07:00'
              },
              {
                name: '2010-06-01T00:00:00-07:00',
                count: 11,
                value: '2010-06-01T00:00:00-07:00'
              },
              {
                name: '2010-07-01T00:00:00-07:00',
                count: 6,
                value: '2010-07-01T00:00:00-07:00'
              },
              {
                name: '2010-08-01T00:00:00-07:00',
                count: 6,
                value: '2010-08-01T00:00:00-07:00'
              },
              {
                name: '2010-09-01T00:00:00-07:00',
                count: 13,
                value: '2010-09-01T00:00:00-07:00'
              },
              {
                name: '2010-10-01T00:00:00-07:00',
                count: 16,
                value: '2010-10-01T00:00:00-07:00'
              },
              {
                name: '2010-11-01T00:00:00-07:00',
                count: 13,
                value: '2010-11-01T00:00:00-07:00'
              },
              {
                name: '2010-12-01T00:00:00-08:00',
                count: 14,
                value: '2010-12-01T00:00:00-08:00'
              },
              {
                name: '2011-01-01T00:00:00-08:00',
                count: 14,
                value: '2011-01-01T00:00:00-08:00'
              },
              {
                name: '2011-02-01T00:00:00-08:00',
                count: 16,
                value: '2011-02-01T00:00:00-08:00'
              },
              {
                name: '2011-03-01T00:00:00-08:00',
                count: 14,
                value: '2011-03-01T00:00:00-08:00'
              },
              {
                name: '2011-04-01T00:00:00-07:00',
                count: 15,
                value: '2011-04-01T00:00:00-07:00'
              },
              {
                name: '2011-05-01T00:00:00-07:00',
                count: 26,
                value: '2011-05-01T00:00:00-07:00'
              },
              {
                name: '2011-06-01T00:00:00-07:00',
                count: 24,
                value: '2011-06-01T00:00:00-07:00'
              },
              {
                name: '2011-07-01T00:00:00-07:00',
                count: 28,
                value: '2011-07-01T00:00:00-07:00'
              },
              {
                name: '2011-08-01T00:00:00-07:00',
                count: 26,
                value: '2011-08-01T00:00:00-07:00'
              },
              {
                name: '2011-09-01T00:00:00-07:00',
                count: 21,
                value: '2011-09-01T00:00:00-07:00'
              },
              {
                name: '2011-10-01T00:00:00-07:00',
                count: 23,
                value: '2011-10-01T00:00:00-07:00'
              },
              {
                name: '2011-11-01T00:00:00-07:00',
                count: 30,
                value: '2011-11-01T00:00:00-07:00'
              },
              {
                name: '2011-12-01T00:00:00-08:00',
                count: 31,
                value: '2011-12-01T00:00:00-08:00'
              },
              {
                name: '2012-01-01T00:00:00-08:00',
                count: 23,
                value: '2012-01-01T00:00:00-08:00'
              },
              {
                name: '2012-02-01T00:00:00-08:00',
                count: 36,
                value: '2012-02-01T00:00:00-08:00'
              },
              {
                name: '2012-03-01T00:00:00-08:00',
                count: 43,
                value: '2012-03-01T00:00:00-08:00'
              },
              {
                name: '2012-04-01T00:00:00-07:00',
                count: 27,
                value: '2012-04-01T00:00:00-07:00'
              },
              {
                name: '2012-05-01T00:00:00-07:00',
                count: 41,
                value: '2012-05-01T00:00:00-07:00'
              },
              {
                name: '2012-06-01T00:00:00-07:00',
                count: 36,
                value: '2012-06-01T00:00:00-07:00'
              },
              {
                name: '2012-07-01T00:00:00-07:00',
                count: 43,
                value: '2012-07-01T00:00:00-07:00'
              },
              {
                name: '2012-08-01T00:00:00-07:00',
                count: 52,
                value: '2012-08-01T00:00:00-07:00'
              },
              {
                name: '2012-09-01T00:00:00-07:00',
                count: 31,
                value: '2012-09-01T00:00:00-07:00'
              },
              {
                name: '2012-10-01T00:00:00-07:00',
                count: 37,
                value: '2012-10-01T00:00:00-07:00'
              },
              {
                name: '2012-11-01T00:00:00-07:00',
                count: 41,
                value: '2012-11-01T00:00:00-07:00'
              },
              {
                name: '2012-12-01T00:00:00-08:00',
                count: 29,
                value: '2012-12-01T00:00:00-08:00'
              },
              {
                name: '2013-01-01T00:00:00-08:00',
                count: 38,
                value: '2013-01-01T00:00:00-08:00'
              },
              {
                name: '2013-02-01T00:00:00-08:00',
                count: 36,
                value: '2013-02-01T00:00:00-08:00'
              },
              {
                name: '2013-03-01T00:00:00-08:00',
                count: 44,
                value: '2013-03-01T00:00:00-08:00'
              },
              {
                name: '2013-04-01T00:00:00-07:00',
                count: 53,
                value: '2013-04-01T00:00:00-07:00'
              },
              {
                name: '2013-05-01T00:00:00-07:00',
                count: 57,
                value: '2013-05-01T00:00:00-07:00'
              },
              {
                name: '2013-06-01T00:00:00-07:00',
                count: 47,
                value: '2013-06-01T00:00:00-07:00'
              },
              {
                name: '2013-07-01T00:00:00-07:00',
                count: 53,
                value: '2013-07-01T00:00:00-07:00'
              },
              {
                name: '2013-08-01T00:00:00-07:00',
                count: 52,
                value: '2013-08-01T00:00:00-07:00'
              },
              {
                name: '2013-09-01T00:00:00-07:00',
                count: 44,
                value: '2013-09-01T00:00:00-07:00'
              },
              {
                name: '2013-10-01T00:00:00-07:00',
                count: 54,
                value: '2013-10-01T00:00:00-07:00'
              },
              {
                name: '2013-11-01T00:00:00-07:00',
                count: 51,
                value: '2013-11-01T00:00:00-07:00'
              },
              {
                name: '2013-12-01T00:00:00-08:00',
                count: 62,
                value: '2013-12-01T00:00:00-08:00'
              },
              {
                name: '2014-01-01T00:00:00-08:00',
                count: 67,
                value: '2014-01-01T00:00:00-08:00'
              },
              {
                name: '2014-02-01T00:00:00-08:00',
                count: 57,
                value: '2014-02-01T00:00:00-08:00'
              },
              {
                name: '2014-03-01T00:00:00-08:00',
                count: 72,
                value: '2014-03-01T00:00:00-08:00'
              },
              {
                name: '2014-04-01T00:00:00-07:00',
                count: 48,
                value: '2014-04-01T00:00:00-07:00'
              },
              {
                name: '2014-05-01T00:00:00-07:00',
                count: 57,
                value: '2014-05-01T00:00:00-07:00'
              },
              {
                name: '2014-06-01T00:00:00-07:00',
                count: 50,
                value: '2014-06-01T00:00:00-07:00'
              },
              {
                name: '2014-07-01T00:00:00-07:00',
                count: 35,
                value: '2014-07-01T00:00:00-07:00'
              },
              {
                name: '2014-08-01T00:00:00-07:00',
                count: 58,
                value: '2014-08-01T00:00:00-07:00'
              },
              {
                name: '2014-09-01T00:00:00-07:00',
                count: 26,
                value: '2014-09-01T00:00:00-07:00'
              },
              {
                name: '2015-08-01T00:00:00-07:00',
                count: 2,
                value: '2015-08-01T00:00:00-07:00'
              }
            ]
          },
          tag: {
            type: 'xs:string',
            facetValues: [
              {
                name: 'javascript',
                count: 1041,
                value: 'javascript'
              },
              {
                name: 'jquery',
                count: 697,
                value: 'jquery'
              },
              {
                name: 'html',
                count: 261,
                value: 'html'
              },
              {
                name: 'marklogic',
                count: 217,
                value: 'marklogic'
              },
              {
                name: 'php',
                count: 158,
                value: 'php'
              },
              {
                name: 'xquery',
                count: 144,
                value: 'xquery'
              },
              {
                name: 'css',
                count: 100,
                value: 'css'
              },
              {
                name: 'ajax',
                count: 98,
                value: 'ajax'
              },
              {
                name: 'xml',
                count: 93,
                value: 'xml'
              },
              {
                name: 'json',
                count: 91,
                value: 'json'
              }
            ]
          }
        },
        query: {
          'and-query': [
            {
              'json-property-value-query': {
                property: 'accepted',
                value: [
                  {
                    type: 'xs:boolean',
                    _value: true
                  }
                ]
              },
              'directory-query': [
                {
                  uri: '/questions/'
                }
              ],
              annotation: [
                {
                  'operator-ref': 'sort',
                  'state-ref': 'active'
                }
              ]
            }
          ]
        },
        qtext: 'sort:active',
        report: '(cts:search(fn:collection(), cts:and-query((cts:json-property-value-query("accepted", fn:true(), ("lang=en"), 1), cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:index-order(cts:json-property-reference("lastActivityDate",("type=dateTime")), "descending")), 1))[1 to 10]',
        metrics: {
          'query-resolution-time': 'PT0.076605S',
          'facet-resolution-time': 'PT0.093762S',
          'snippet-resolution-time': 'PT0.043077S',
          'total-time': 'PT0.51958S'
        }
      },
      {
        uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '624',
        content: {
          creationDate: '2014-10-01T08:59:08.824Z',
          id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019',
          itemTally: 1,
          lastActivityDate: '2015-08-03T07:50:35.261Z',
          owner: {
            id: '9611450a-0663-45a5-8a08-f1c71320475e',
            reputation: 104,
            userName: 'mary@example.com',
            displayName: 'MaryAdmin'
          },
          tags: [
            'ada',
            'seed-data'
          ],
          text: 'I, Mary, had a question about the word abyss and the number 0',
          title: 'Mary\'s Question Number 0',
          voteCount: 2,
          acceptedAnswerId: 'ef376cf4-3a30-44af-b2c5-722e6439723d',
          accepted: true,
          answerCount: 2,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '543',
        content: {
          accepted: true,
          acceptedAnswerId: '3b003576-da9c-496b-8b35-fda663da2cd9',
          answerCount: 1,
          creationDate: '2015-07-15T14:42:50.608-0700',
          id: 'd541761f-790b-4ce6-8923-580d62f946f1',
          itemTally: 1,
          lastActivityDate: '2015-08-01T09:00:48.560Z',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          },
          tags: [

          ],
          text: '**test**',
          title: 'mine only test',
          voteCount: 2,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/soq11452911.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '1244',
        content: {
          tags: [
            'xquery',
            'marklogic'
          ],
          originalId: '11452911',
          owner: {
            id: 'sou38522',
            reputation: 6843,
            originalId: '38522',
            userName: 'souser38522@example.com',
            displayName: 'Ben'
          },
          lastActivityDate: '2014-09-12T15:13:11.803Z',
          id: 'soq11452911',
          answerCount: 4,
          voteCount: 9,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I would like to delete all documents matching some predicates. The query I have come up with is as follows, but nothing is deleted from the database.\n\nI suspect this is because the $doc is set to the XML value of the document rather than the document itself. Can anyone shed any light on this?\n\n\txquery version "1.0-ml";\n\tfor $doc in cts:search(fn:collection("MYCOLLECTIONNAME")/MyDocumentRoot,\n\t    cts:or-query((\n\t    cts:element-range-query (xs:QName("MyElement"), "=", "MyElementValue"),\n\t    )), "unfiltered" )\n\t    return xdmp:document-delete($doc);\n\t\n\nThe document looks like\n\n\t<MyDocumentRoot>\n\t  <MyElementName>MyElementValue</MyElementName>\n\t</MyDocumentRoot>\n\t',
          creationDate: '2012-07-12T13:30:08.400Z',
          itemTally: 2,
          upvotingContributorIds: [
            'unknown',
            'unknown'
          ],
          title: 'Delete all documents matching a query?',
          acceptedAnswerId: 'soa11456461'
        }
      },
      {
        uri: '/questions/soq25807100.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '1614',
        content: {
          tags: [
            'marklogic'
          ],
          originalId: '25807100',
          owner: {
            id: 'sou1014073',
            reputation: 17,
            originalId: '1014073',
            userName: 'souser1014073@example.com',
            displayName: 'M_breeb'
          },
          lastActivityDate: '2014-09-12T13:10:06.110Z',
          id: 'soq25807100',
          answerCount: 2,
          voteCount: 1,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I\'ve been adding a number of search constraints to my Marklogic 6 REST server instance. When using a database module for the REST server, I can see an XML configuration file with the database URL (for example /15946974354972814010/rest-api/options/sgd-identifier.xml). \n\nWhen I move the modules for the REST server from the database to the filesystem, I can no longer access the sgd-identifier.xml or default.xml files, which does make sense because the database is no longer used. So I thought I would have to copy those files to the folder on my filesystem.\n\nBut I cannot get it going. I\'ve been trying stuff to put ' +
            'default.xml in all kinds of folders, including creating a rest-api/options folder. It doesn\'t get picked up. Is this impossible?\n\nUpdate: now I understand that it is not possible. Would be nice if Marklogic improves error message and / or documentation because a http 500 error when doing a curl upload to server is not really helpful. I\'ll accept Dave Cassell\'s answer, even thought grtjn is also helping out by making it a bit clearer - can\'t accept both... ',
          creationDate: '2014-09-12T11:19:57.570Z',
          itemTally: 0,
          upvotingContributorIds: [

          ],
          title: 'Marklogic: REST query options file location on filesystem',
          acceptedAnswerId: 'soa25807676'
        }
      },
      {
        uri: '/questions/soq25787538.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '1474',
        content: {
          tags: [
            'http',
            'http-status-code-404',
            'uri',
            'xquery',
            'marklogic'
          ],
          originalId: '25787538',
          owner: {
            id: 'sou3087162',
            reputation: 44,
            originalId: '3087162',
            userName: 'souser3087162@example.com',
            displayName: 'cascavel'
          },
          lastActivityDate: '2014-09-11T15:13:12.890Z',
          id: 'soq25787538',
          answerCount: 2,
          voteCount: 1,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I\'m developing a REST application, which uses a uri rewriter, which points to an options element that defines the route. Everything works apart from the 404 response: the right page is returned but with a 200 header, not 404.\n\nIf I return a string instead of the html page, the 404 header is sent. How can I return a html page with a 404 response?\n\nThis is what I currently have:\n\n\txquery version "1.0-ml";\n\t\n\timport module namespace rest = "http://marklogic.com/appservices/rest"\n\t at "/MarkLogic/appservices/utils/rest.xqy"; \n\t\n\timport module namespace requests =   "http://myrequests"\n\t at "requests.xqy";\n\t\n\tdeclare option xdmp:mapping "false";\n\t\n\tdeclare variable $result := rest:rewrite($requests:options) ;\n\t  if (empty($result))\n\t    then (xdmp:set-response-code(404, "Not found"), \'/FAIL.html\' )\n\t   else\n\t      $result\n\t',
          creationDate: '2014-09-11T12:31:41.573Z',
          itemTally: 0,
          upvotingContributorIds: [

          ],
          title: 'MarkLogic: how to return a html page from ML server with a 404 header?',
          acceptedAnswerId: 'soa25788698'
        }
      },
      {
        uri: '/questions/soq25774302.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '2719',
        content: {
          tags: [
            'javascript',
            'json'
          ],
          originalId: '25774302',
          owner: {
            id: 'sou4028275',
            reputation: 3,
            originalId: '4028275',
            userName: 'souser4028275@example.com',
            displayName: 'Dan D'
          },
          lastActivityDate: '2014-09-10T20:16:59.430Z',
          id: 'soq25774302',
          answerCount: 1,
          voteCount: 0,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I\'m trying to load data from a JSON file that is based off of the option that is selected by the user. I have it working but I know it can be written much more efficient and I\'m having a hard time finding a good place to start. I\'ll include an example of my code below, but it\'s pulling in various counties based off of the state you choose. You\'ll notice though that I\'m checking each value with an else if statement to load in the correct data. I\'m sure there has to be a way to load what I need but without 49 other else if statements. \n\nHTML: \n\n\t<select id=\'test-select\'>\n\t    <option>AL</option>\n\t    <option>AK</option>\n\t    <option>AZ</option>\n\t</select>\n\t\n\nJS:\n\n\tvar cities = [];\n\t    $.getJSON(\'/assets/shared/misc/counties.json\', function (json)' +
                ' {\n\t        // push json to data to cities array\n\t        cities.push(json);\n\t\n\t        // map over each item item \n\t        $(\'.state-names\').map(function (index) {\n\t\n\t            // load in json data based off of select option\n\t            $(\'#test-select\').on(\'change\', function () {\n\t                var target = $(\'#test-select option:selected\').val();\n\t                console.log(target);\n\t                if (target == \'AL\') {\n\t                    $(\'.state-names\').text(cities[0].AL);\n\t                } else if (target == \'AK\') {\n\t                    $(\'.state-names\').text(cities[0].AK);\n\t                } else if (target == \'AZ\') {\n\t                    $(\'.state-names\').text(cities[0].AZ);\n\t                } else if ' +
                  '(target == \'AR\') {\n\t                    $(\'.state-names\').text(cities[0].AR);\n\t                } // end else if block\n\t            }); // end test select function\n\t        }); // end map function\n\t\n\t        console.log(cities);\n\t\n\t    }); // end getJSON call\n\t\n\nThis is just the condensed version, but it\'s basically this plus many more options and else if\'s. Is there a way I can somehow set an index to whatever state is selected to match the key in the JSON file without having to make so many calls? Any help is greatly appreciated. If I left out any important details I can certainly share more information. Thanks guys.',
          creationDate: '2014-09-10T20:15:22.083Z',
          itemTally: 0,
          upvotingContributorIds: [

          ],
          title: 'Load JSON data into div based off of select option value',
          acceptedAnswerId: 'soa25774330'
        }
      },
      {
        uri: '/questions/soq25772565.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '913',
        content: {
          tags: [
            'javascript',
            'jquery'
          ],
          originalId: '25772565',
          owner: {
            id: 'sou916535',
            reputation: 3901,
            originalId: '916535',
            userName: 'souser916535@example.com',
            displayName: 'Zee Tee'
          },
          lastActivityDate: '2014-09-10T19:01:20.567Z',
          id: 'soq25772565',
          answerCount: 4,
          voteCount: 1,
          accepted: true,
          downvotingContributorIds: [
            'unknown',
            'unknown',
            'unknown'
          ],
          text: 'This doesn\'t seem to be working, I get an `Uncaught Type` error on the `.remove()` line:\n\nJS:\n\n\tvar str = $("a").html();\n\tvar $html = $.parseHTML(str);\n\t$("i",$html).remove();  \n\t\n\t$("div").html($html);\n\t\n\nHTML:\n\n\t<a href="#">Hello <i>Bob</i></a>\n\t<div></div>\n\t\n\nHow to get this to work?',
          creationDate: '2014-09-10T18:30:28.753Z',
          itemTally: -2,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          title: 'How to remove element from HTML string?',
          acceptedAnswerId: 'soa25772804'
        }
      },
      {
        uri: '/questions/soq25772163.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '2559',
        content: {
          tags: [
            'javascript',
            'jquery'
          ],
          originalId: '25772163',
          owner: {
            id: 'sou1734929',
            reputation: 350,
            originalId: '1734929',
            userName: 'souser1734929@example.com',
            displayName: 'anders'
          },
          lastActivityDate: '2014-09-10T18:24:07.220Z',
          id: 'soq25772163',
          answerCount: 2,
          voteCount: 0,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I have a function that loops through an object.\n\nI want data on the form\n\n\tgroup1:Array[1,2,3]\n\t\n\tgroup2:Array[4,5,6]\n\t\n\tgroup2:Array[7,8,9]\n\t\n\nBut instead I get the data on the form\n\n\tgroup1:Array[1,2,3,4,5,6,7,8,9]\n\t\n\tgroup2:Array[1,2,3,4,5,6,7,8,9]\n\t\n\tgroup2:Array[1,2,3,4,5,6,7,8,9]\n\t\n\nThat is it copies the values in the first group that I loop through and then add those values to the rest of the groups ' +
                'and I don\'t want that.\nIt gets wrong in the function call\n\n`for (var resultGroupElement in value[resultKey].DCTRecord.DCT[resultGroup])`\n\nAnd I don\'t know how to fix it. Do you guys perhapse know how to fix it? I have tried to delete the variables without any luck.\n\nThanks in advance.\n\n\tgetData: function (value) {\n\t    var dataArray = [];\n\t    var dataArrayHolder = [];\n\t\n\t    for (var resultKey in value) {\n\t        var ' +
                'stopTimeConverted = $.extend(true, {}, convertDateToWorkWithAllBrowsers(value[resultKey].StopTime));\n\t        var resultGroups = value[resultKey].DCTRecord.DCT;\n\t        for (var resultGroup in resultGroups) {\n\t            for (var resultGroupElement in value[resultKey].DCTRecord.DCT[resultGroup]) {//Here is where its going wrong\n\t\n\t                if (dataArray[resultGroupElement] != null) {\n\t                    var curResultGroupDCT' +
                ' = dataArray[resultGroupElement];\n\t                }\n\t                else {\n\t                    var curResultGroupDCT = [];\n\t                }\n\t\n\t                    curResultGroupDCT.push(\n\t                            [\n\t                                new Date(stopTimeConverted),\n\t                                11\n\t                            ]\n\t                            );\n\t                    dataArray[resultGroupElement] = curResultGroupDCT;\n\t                    delete curResultGroupDCT;\n\t            }\n\t            dataArrayHolder[resultGroup] = dataArray;\n\t            delete dataArray;\n\t        }\n\t    }\n\t    console.log(dataArrayHolder);\n\t}\n\t',
          creationDate: '2014-09-10T18:05:56.843Z',
          itemTally: 0,
          upvotingContributorIds: [

          ],
          title: 'Having issue with array/object looping',
          acceptedAnswerId: 'soa25772398'
        }
      },
      {
        uri: '/questions/soq25748328.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '2381',
        content: {
          tags: [
            'javascript',
            'json'
          ],
          originalId: '25748328',
          owner: {
            id: 'sou4022885',
            reputation: 6,
            originalId: '4022885',
            userName: 'souser4022885@example.com',
            displayName: 'Cunctator03'
          },
          lastActivityDate: '2014-09-10T00:06:40.143Z',
          id: 'soq25748328',
          answerCount: 1,
          voteCount: 0,
          accepted: true,
          downvotingContributorIds: [
            'unknown'
          ],
          text: 'I\'m trying to set up a newsletter which gets its contents from a JSON file with a number of articles consisting of a title and a text. Using JavaScript, I want the HTML page to display a list with all the titles. When a user clicks on one of the titles, the corresponding text should be displayed ' +
                '(and, ideally, when he or she clicks on another title, the former text should be hidden and only the new one should be visible - but it may all be in another iteration).\n\nThe script lists the titles, but so far I\'ve only been able to make them into HTML links sending the user to a non-existing page ' +
                'where I had hoped instead to show the texts in a div by means of innerHTML. I\'m rather new to JavaScript (and ignorant about jQuery) so I\'d be glad if somebody could tell me how to get the text elements from the JSON file and display them, one at a time.\n\nMy JSON data:\n\n\tvar article = [\n\t    ' +
                '{\n\t        "title": "This is title no. 1",\n\t        "text": "Here is the text of the first article"\n\t    },\n\t    {\n\t        "title": "This is title no. 2",\n\t        "text": "Here is the text of the second article"\n\t    },\n\t    {\n\t        "title": "This is title no. 3",\n\t        "text": ' +
                '"Here is the text of the third article"\n\t\n\t    }\n\t]\n\t\n\nMy HTML:\n\n\t<!DOCTYPE html>\n\t<html>\n\t<head>\n\t    <script type="text/javascript" src="newsletter.json"></script>\n\t    <script type="text/javascript">\n\t        function getData() {\n\t            for(i = 0; i < article.length; i++) {\n\t                document.getElementById("showData").innerHTML += "<li>" + article[i].title.link(article[i].text) + "</li>";\n\t            }\n\t        }\n\t    </script>\n\t</head>\n\t<body onload="getData()">\n\t    <div id="showData"></div>\n\t</body>\n\t</html>\n\t',
          creationDate: '2014-09-09T15:20:40.930Z',
          itemTally: 0,
          upvotingContributorIds: [
            'unknown'
          ],
          title: 'How to display a second JSON element in JavaScript?',
          acceptedAnswerId: 'soa25755379'
        }
      },
      {
        uri: '/questions/soq25753438.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '1218',
        content: {
          tags: [
            'handlebars.js',
            'handlebars'
          ],
          originalId: '25753438',
          owner: {
            id: 'sou430062',
            reputation: 4537,
            originalId: '430062',
            userName: 'souser430062@example.com',
            displayName: 'Theodore R. Smith'
          },
          lastActivityDate: '2014-09-09T21:43:06.183Z',
          id: 'soq25753438',
          answerCount: 1,
          voteCount: 2,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I have the data:\n\n\tpriceGroups:\n\t[\n\t  {\n\t    label: \'rate1",\n\t    price: 1.00,\n\t    numPeople: 1\n\t  },\n\t  {\n\t    label: \'rate 2",\n\t    price: 2.00,\n\t    numPeople: 2\n\t  },\n\t  {\n\t    label: \'rate 3",\n\t    price: 15.00,\n\t    numPeople: 4\n\t  },\n\t];\n\t\n\nand\n\n\tlabels:\n\t[\n\t  \'Solo\',\n\t  \'Duo\',\n\t  \'Trio\'\n\t  \'4 People\',\n\t  \'5 People\n\t];\n\t\n\nI want to be able to do this:\n\n\t{{#priceGroups}}\n\t   {{for (a = 1; a <= {{this.numPeople}}; ++a)}}\n\t      <th>{{label[a]}}</th>\n\t   {{/for}}\n\t{{/priceGroups}}\n\t\n\nI have tried so much and nothing works.\n\nPlease help. It is important.',
          creationDate: '2014-09-09T20:57:02.823Z',
          itemTally: 0,
          upvotingContributorIds: [

          ],
          title: 'Accessing a multidimensional array from a parent each\'s id in Handlebars',
          acceptedAnswerId: 'soa25753990'
        }
      }
    ],
    ret: {
      'snippet-format': 'snippet',
      total: 1904,
      start: 1,
      'page-length': 10,
      results: [
        {
          index: 1,
          uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
          path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")',
          score: 15360,
          confidence: 0.2095163,
          fitness: 0.6312799,
          href: '/v1/documents?uri=%2Fquestions%2F8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            creationDate: '2014-10-01T08:59:08.824Z',
            id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019',
            itemTally: 1,
            lastActivityDate: '2015-08-03T07:50:35.261Z',
            owner: {
              id: '9611450a-0663-45a5-8a08-f1c71320475e',
              reputation: 104,
              userName: 'mary@example.com',
              displayName: 'MaryAdmin'
            },
            tags: [
              'ada',
              'seed-data'
            ],
            text: 'I, Mary, had a question about the word abyss and the number 0',
            title: 'Mary\'s Question Number 0',
            voteCount: 2,
            acceptedAnswerId: 'ef376cf4-3a30-44af-b2c5-722e6439723d',
            accepted: true,
            answerCount: 2,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 2,
          uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
          path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")',
          score: 17408,
          confidence: 0.2230471,
          fitness: 0.6720487,
          href: '/v1/documents?uri=%2Fquestions%2Fd541761f-790b-4ce6-8923-580d62f946f1.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: true,
            acceptedAnswerId: '3b003576-da9c-496b-8b35-fda663da2cd9',
            answerCount: 1,
            creationDate: '2015-07-15T14:42:50.608-0700',
            id: 'd541761f-790b-4ce6-8923-580d62f946f1',
            itemTally: 1,
            lastActivityDate: '2015-08-01T09:00:48.560Z',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            },
            tags: [

            ],
            text: '**test**',
            title: 'mine only test',
            voteCount: 2,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 3,
          uri: '/questions/soq11452911.json',
          path: 'fn:doc("/questions/soq11452911.json")',
          score: 9216,
          confidence: 0.1622906,
          fitness: 0.4889873,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq11452911.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'xquery',
              'marklogic'
            ],
            originalId: '11452911',
            owner: {
              id: 'sou38522',
              reputation: 6843,
              originalId: '38522',
              userName: 'souser38522@example.com',
              displayName: 'Ben'
            },
            lastActivityDate: '2014-09-12T15:13:11.803Z',
            id: 'soq11452911',
            answerCount: 4,
            voteCount: 9,
            accepted: true,
            downvotingContributorIds: [

            ],
            text: 'I would like to delete all documents matching some predicates. The query I have come up with is as follows, but nothing is deleted from the database.\n\nI suspect this is because the $doc is set to the XML value of the document rather than the document itself. Can anyone shed any light on this?\n\n\txquery version "1.0-ml";\n\tfor $doc in cts:search(fn:collection("MYCOLLECTIONNAME")/MyDocumentRoot,\n\t    cts:or-query((\n\t    cts:element-range-query (xs:QName("MyElement"), "=", "MyElementValue"),\n\t    )), "unfiltered" )\n\t    return xdmp:document-delete($doc);\n\t\n\nThe document looks like\n\n\t<MyDocumentRoot>\n\t  <MyElementName>MyElementValue</MyElementName>\n\t</MyDocumentRoot>\n\t',
            creationDate: '2012-07-12T13:30:08.400Z',
            itemTally: 2,
            upvotingContributorIds: [
              'unknown',
              'unknown'
            ],
            title: 'Delete all documents matching a query?',
            acceptedAnswerId: 'soa11456461'
          }
        },
        {
          index: 4,
          uri: '/questions/soq25807100.json',
          path: 'fn:doc("/questions/soq25807100.json")',
          score: 9216,
          confidence: 0.1622906,
          fitness: 0.4889873,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq25807100.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'marklogic'
            ],
            originalId: '25807100',
            owner: {
              id: 'sou1014073',
              reputation: 17,
              originalId: '1014073',
              userName: 'souser1014073@example.com',
              displayName: 'M_breeb'
            },
            lastActivityDate: '2014-09-12T13:10:06.110Z',
            id: 'soq25807100',
            answerCount: 2,
            voteCount: 1,
            accepted: true,
            downvotingContributorIds: [

            ],
            text: 'I\'ve been adding a number of search constraints to my Marklogic 6 REST server instance. When using a database module for the REST server, I can see an XML configuration file with the database URL (for example /15946974354972814010/rest-api/options/sgd-identifier.xml). \n\nWhen I move the modules for the REST server from the database to the filesystem' +
                  ', I can no longer access the sgd-identifier.xml or default.xml files, which does make sense because the database is no longer used. So I thought I would have to copy those files to the folder on my filesystem.\n\nBut I cannot get it going. I\'ve been trying stuff to put default.xml in all kinds of folders, including creating a rest-api/options folder. ' +
                  'It doesn\'t get picked up. Is this impossible?\n\nUpdate: now I understand that it is not possible. Would be nice if Marklogic improves error message and / or documentation because a http 500 error when doing a curl upload to server is not really helpful. I\'ll accept Dave Cassell\'s answer, even thought grtjn is also helping out by making it a bit clearer' +
                  ' - can\'t accept both... ',
            creationDate: '2014-09-12T11:19:57.570Z',
            itemTally: 0,
            upvotingContributorIds: [

            ],
            title: 'Marklogic: REST query options file location on filesystem',
            acceptedAnswerId: 'soa25807676'
          }
        },
        {
          index: 5,
          uri: '/questions/soq25787538.json',
          path: 'fn:doc("/questions/soq25787538.json")',
          score: 9216,
          confidence: 0.1622906,
          fitness: 0.4889873,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq25787538.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'http',
              'http-status-code-404',
              'uri',
              'xquery',
              'marklogic'
            ],
            originalId: '25787538',
            owner: {
              id: 'sou3087162',
              reputation: 44,
              originalId: '3087162',
              userName: 'souser3087162@example.com',
              displayName: 'cascavel'
            },
            lastActivityDate: '2014-09-11T15:13:12.890Z',
            id: 'soq25787538',
            answerCount: 2,
            voteCount: 1,
            accepted: true,
            downvotingContributorIds: [

            ],
            text: 'I\'m developing a REST application, which uses a uri rewriter, which points to an options element that defines the route. Everything works apart from the 404 response: the right page is returned but with a 200 header, not 404.\n\nIf I return a string instead of the html page, the 404 header is sent. How can I return a html page with a 404 response?\n\nThis is what I currently have:\n\n\txquery version "1.0-ml";\n\t\n\timport module namespace rest = "http://marklogic.com/appservices/rest"\n\t at "/MarkLogic/appservices/utils/rest.xqy"; \n\t\n\timport module namespace requests =   "http://myrequests"\n\t at "requests.xqy";\n\t\n\tdeclare option xdmp:mapping "false";\n\t\n\tdeclare variable $result := rest:rewrite($requests:options) ;\n\t  if (empty($result))\n\t    then (xdmp:set-response-code(404, "Not found"), \'/FAIL.html\' )\n\t   else\n\t      $result\n\t',
            creationDate: '2014-09-11T12:31:41.573Z',
            itemTally: 0,
            upvotingContributorIds: [

            ],
            title: 'MarkLogic: how to return a html page from ML server with a 404 header?',
            acceptedAnswerId: 'soa25788698'
          }
        },
        {
          index: 6,
          uri: '/questions/soq25774302.json',
          path: 'fn:doc("/questions/soq25774302.json")',
          score: 9216,
          confidence: 0.1622906,
          fitness: 0.4889873,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq25774302.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'javascript',
              'json'
            ],
            originalId: '25774302',
            owner: {
              id: 'sou4028275',
              reputation: 3,
              originalId: '4028275',
              userName: 'souser4028275@example.com',
              displayName: 'Dan D'
            },
            lastActivityDate: '2014-09-10T20:16:59.430Z',
            id: 'soq25774302',
            answerCount: 1,
            voteCount: 0,
            accepted: true,
            downvotingContributorIds: [

            ],
            text: 'I\'m trying to load data from a JSON file that is based off of the option that is selected by the user. I have it working but I know it can be written much more efficient and I\'m having a hard time finding a good place to start. I\'ll include an example of my code below, but it\'s pulling in various counties based off of the state you choose.' +
                  ' You\'ll notice though that I\'m checking each value with an else if statement to load in the correct data. I\'m sure there has to be a way to load what I need but without 49 other else if statements. \n\nHTML: \n\n\t<select id=\'test-select\'>\n\t    <option>AL</option>\n\t    <option>AK</option>\n\t    <option>AZ</option>\n\t</select>\n\t\n\n' +
                  'JS:\n\n\tvar cities = [];\n\t    $.getJSON(\'/assets/shared/misc/counties.json\', function (json) {\n\t        // push json to data to cities array\n\t        cities.push(json);\n\t\n\t        // map over each item item \n\t        $(\'.state-names\').map(function (index) {\n\t\n\t            // load in json data based off of select option' +
                  '\n\t            $(\'#test-select\').on(\'change\', function () {\n\t                var target = $(\'#test-select option:selected\').val();\n\t                console.log(target);\n\t                if (target == \'AL\') {\n\t                    $(\'.state-names\').text(cities[0].AL);\n\t                } else if (target == \'AK\') {' +
                  '\n\t                    $(\'.state-names\').text(cities[0].AK);\n\t                } else if (target == \'AZ\') {\n\t                    $(\'.state-names\').text(cities[0].AZ);\n\t                } else if (target == \'AR\') {\n\t                    $(\'.state-names\').text(cities[0].AR);\n\t                } // end else if block' +
                  '\n\t            }); // end test select function\n\t        }); // end map function\n\t\n\t        console.log(cities);\n\t\n\t    }); // end getJSON call\n\t\n\nThis is just the condensed version, but it\'s basically this plus many more options and else if\'s. Is there a way I can somehow set an index to whatever state is selected to ' +
                  'match the key in the JSON file without having to make so many calls? Any help is greatly appreciated. If I left out any important details I can certainly share more information. Thanks guys.',
            creationDate: '2014-09-10T20:15:22.083Z',
            itemTally: 0,
            upvotingContributorIds: [

            ],
            title: 'Load JSON data into div based off of select option value',
            acceptedAnswerId: 'soa25774330'
          }
        },
        {
          index: 7,
          uri: '/questions/soq25772565.json',
          path: 'fn:doc("/questions/soq25772565.json")',
          score: 9216,
          confidence: 0.1622906,
          fitness: 0.4889873,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq25772565.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'javascript',
              'jquery'
            ],
            originalId: '25772565',
            owner: {
              id: 'sou916535',
              reputation: 3901,
              originalId: '916535',
              userName: 'souser916535@example.com',
              displayName: 'Zee Tee'
            },
            lastActivityDate: '2014-09-10T19:01:20.567Z',
            id: 'soq25772565',
            answerCount: 4,
            voteCount: 1,
            accepted: true,
            downvotingContributorIds: [
              'unknown',
              'unknown',
              'unknown'
            ],
            text: 'This doesn\'t seem to be working, I get an `Uncaught Type` error on the `.remove()` line:\n\nJS:\n\n\tvar str = $("a").html();\n\tvar $html = $.parseHTML(str);\n\t$("i",$html).remove();  \n\t\n\t$("div").html($html);\n\t\n\nHTML:\n\n\t<a href="#">Hello <i>Bob</i></a>\n\t<div></div>\n\t\n\nHow to get this to work?',
            creationDate: '2014-09-10T18:30:28.753Z',
            itemTally: -2,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            title: 'How to remove element from HTML string?',
            acceptedAnswerId: 'soa25772804'
          }
        },
        {
          index: 8,
          uri: '/questions/soq25772163.json',
          path: 'fn:doc("/questions/soq25772163.json")',
          score: 9216,
          confidence: 0.1622906,
          fitness: 0.4889873,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq25772163.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'javascript',
              'jquery'
            ],
            originalId: '25772163',
            owner: {
              id: 'sou1734929',
              reputation: 350,
              originalId: '1734929',
              userName: 'souser1734929@example.com',
              displayName: 'anders'
            },
            lastActivityDate: '2014-09-10T18:24:07.220Z',
            id: 'soq25772163',
            answerCount: 2,
            voteCount: 0,
            accepted: true,
            downvotingContributorIds: [

            ],
            text: 'I have a function that loops through an object.\n\nI want data on the form\n\n\tgroup1:Array[1,2,3]\n\t\n\tgroup2:Array[4,5,6]\n\t\n\tgroup2:Array[7,8,9]\n\t\n\nBut instead I get the data on the form\n\n\tgroup1:Array[1,2,3,4,5,6,7,8,9]\n\t\n\tgroup2:Array[1,2,3,4,5,6,7,8,9]\n\t\n\tgroup2:Array[1,2,3,4,5,6,7,8,9]\n\t\n\nThat is it copies the values in the first group that I loop through and then add those values to the rest of the groups and I' +
                  ' don\'t want that.\nIt gets wrong in the function call\n\n`for (var resultGroupElement in value[resultKey].DCTRecord.DCT[resultGroup])`\n\nAnd I don\'t know how to fix it. Do you guys perhapse know how to fix it? I have tried to delete the variables without any luck.\n\nThanks in advance.\n\n\tgetData: function (value) {\n\t    var dataArray = [];\n\t    var dataArrayHolder = [];\n\t\n\t    for (var resultKey in value) {\n\t        var ' +
                  'stopTimeConverted = $.extend(true, {}, convertDateToWorkWithAllBrowsers(value[resultKey].StopTime));\n\t        var resultGroups = value[resultKey].DCTRecord.DCT;\n\t        for (var resultGroup in resultGroups) {\n\t            for (var resultGroupElement in value[resultKey].DCTRecord.DCT[resultGroup]) {//Here is where its going wrong\n\t\n\t                if (dataArray[resultGroupElement] != null) {\n\t                    var curResultGroupDCT' +
                  ' = dataArray[resultGroupElement];\n\t                }\n\t                else {\n\t                    var curResultGroupDCT = [];\n\t                }\n\t\n\t                    curResultGroupDCT.push(\n\t                            [\n\t                                new Date(stopTimeConverted),\n\t                                11\n\t                            ]\n\t                            );\n\t                    dataArray[resultGroupElement]' +
                  ' = curResultGroupDCT;\n\t                    delete curResultGroupDCT;\n\t            }\n\t            dataArrayHolder[resultGroup] = dataArray;\n\t            delete dataArray;\n\t        }\n\t    }\n\t    console.log(dataArrayHolder);\n\t}\n\t',
            creationDate: '2014-09-10T18:05:56.843Z',
            itemTally: 0,
            upvotingContributorIds: [

            ],
            title: 'Having issue with array/object looping',
            acceptedAnswerId: 'soa25772398'
          }
        },
        {
          index: 9,
          uri: '/questions/soq25748328.json',
          path: 'fn:doc("/questions/soq25748328.json")',
          score: 9216,
          confidence: 0.1622906,
          fitness: 0.4889873,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq25748328.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'javascript',
              'json'
            ],
            originalId: '25748328',
            owner: {
              id: 'sou4022885',
              reputation: 6,
              originalId: '4022885',
              userName: 'souser4022885@example.com',
              displayName: 'Cunctator03'
            },
            lastActivityDate: '2014-09-10T00:06:40.143Z',
            id: 'soq25748328',
            answerCount: 1,
            voteCount: 0,
            accepted: true,
            downvotingContributorIds: [
              'unknown'
            ],
            text: 'I\'m trying to set up a newsletter which gets its contents from a JSON file with a number of articles consisting of a title and a text. Using JavaScript, I want the HTML page to display a list with all the titles. When a user clicks on one of the titles, the corresponding text should be displayed (and, ideally, when he or she clicks on another title, the former text should be hidden and only the new one should be visible - but it may all be in another iteration).\n\nThe script lists the titles, but so far I\'ve only been able to make them into HTML links sending the user to a non-existing ' +
                  'page where I had hoped instead to show the texts in a div by means of innerHTML. I\'m rather new to JavaScript (and ignorant about jQuery) so I\'d be glad if somebody could tell me how to get the text elements from the JSON file and display them, one at a time.\n\nMy JSON data:\n\n\tvar article = [\n\t    {\n\t        "title": "This is title no. 1",\n\t        "text": "Here is the text of the first article"\n\t    },\n\t    {\n\t        "title": "This is title no. 2",\n\t        "text": "Here is the text of the second article"\n\t    },\n\t    {\n\t        "title": "This is title no. 3",\n\t' +
                  '        "text": "Here is the text of the third article"\n\t\n\t    }\n\t]\n\t\n\nMy HTML:\n\n\t<!DOCTYPE html>\n\t<html>\n\t<head>\n\t    <script type="text/javascript" src="newsletter.json"></script>\n\t    <script type="text/javascript">\n\t        function getData() {\n\t            for(i = 0; i < article.length; i++) {\n\t                document.getElementById("showData").innerHTML += "<li>" + article[i].title.link(article[i].text) + "</li>";\n\t            }\n\t        }\n\t    </script>\n\t</head>\n\t<body onload="getData()">\n\t    <div id="showData"></div>\n\t</body>\n\t</html>\n\t',
            creationDate: '2014-09-09T15:20:40.930Z',
            itemTally: 0,
            upvotingContributorIds: [
              'unknown'
            ],
            title: 'How to display a second JSON element in JavaScript?',
            acceptedAnswerId: 'soa25755379'
          }
        },
        {
          index: 10,
          uri: '/questions/soq25753438.json',
          path: 'fn:doc("/questions/soq25753438.json")',
          score: 11264,
          confidence: 0.179419,
          fitness: 0.5405958,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq25753438.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'handlebars.js',
              'handlebars'
            ],
            originalId: '25753438',
            owner: {
              id: 'sou430062',
              reputation: 4537,
              originalId: '430062',
              userName: 'souser430062@example.com',
              displayName: 'Theodore R. Smith'
            },
            lastActivityDate: '2014-09-09T21:43:06.183Z',
            id: 'soq25753438',
            answerCount: 1,
            voteCount: 2,
            accepted: true,
            downvotingContributorIds: [

            ],
            text: 'I have the data:\n\n\tpriceGroups:\n\t[\n\t  {\n\t    label: \'rate1",\n\t    price: 1.00,\n\t    numPeople: 1\n\t  },\n\t  {\n\t    label: \'rate 2",\n\t    price: 2.00,\n\t    numPeople: 2\n\t  },\n\t  {\n\t    label: \'rate 3",\n\t    price: 15.00,\n\t    numPeople: 4\n\t  },\n\t];\n\t\n\nand\n\n\tlabels:\n\t[\n\t  \'Solo\',\n\t  \'Duo\',\n\t  \'Trio\'\n\t  \'4 People\',\n\t  \'5 People\n\t];\n\t\n\nI want to be able to do this:\n\n\t{{#priceGroups}}\n\t   {{for (a = 1; a <= {{this.numPeople}}; ++a)}}\n\t      <th>{{label[a]}}</th>\n\t   {{/for}}\n\t{{/priceGroups}}\n\t\n\nI have tried so much and nothing works.\n\nPlease help. It is important.',
            creationDate: '2014-09-09T20:57:02.823Z',
            itemTally: 0,
            upvotingContributorIds: [

            ],
            title: 'Accessing a multidimensional array from a parent each\'s id in Handlebars',
            acceptedAnswerId: 'soa25753990'
          }
        }
      ],
      facets: {
        date: {
          type: 'bucketed',
          facetValues: [
            {
              name: '2009-06-01T00:00:00-07:00',
              count: 1,
              value: '2009-06-01T00:00:00-07:00'
            },
            {
              name: '2009-07-01T00:00:00-07:00',
              count: 1,
              value: '2009-07-01T00:00:00-07:00'
            },
            {
              name: '2009-08-01T00:00:00-07:00',
              count: 4,
              value: '2009-08-01T00:00:00-07:00'
            },
            {
              name: '2009-09-01T00:00:00-07:00',
              count: 2,
              value: '2009-09-01T00:00:00-07:00'
            },
            {
              name: '2009-10-01T00:00:00-07:00',
              count: 2,
              value: '2009-10-01T00:00:00-07:00'
            },
            {
              name: '2009-11-01T00:00:00-07:00',
              count: 3,
              value: '2009-11-01T00:00:00-07:00'
            },
            {
              name: '2009-12-01T00:00:00-08:00',
              count: 3,
              value: '2009-12-01T00:00:00-08:00'
            },
            {
              name: '2010-01-01T00:00:00-08:00',
              count: 5,
              value: '2010-01-01T00:00:00-08:00'
            },
            {
              name: '2010-02-01T00:00:00-08:00',
              count: 10,
              value: '2010-02-01T00:00:00-08:00'
            },
            {
              name: '2010-03-01T00:00:00-08:00',
              count: 8,
              value: '2010-03-01T00:00:00-08:00'
            },
            {
              name: '2010-04-01T00:00:00-07:00',
              count: 11,
              value: '2010-04-01T00:00:00-07:00'
            },
            {
              name: '2010-05-01T00:00:00-07:00',
              count: 5,
              value: '2010-05-01T00:00:00-07:00'
            },
            {
              name: '2010-06-01T00:00:00-07:00',
              count: 11,
              value: '2010-06-01T00:00:00-07:00'
            },
            {
              name: '2010-07-01T00:00:00-07:00',
              count: 6,
              value: '2010-07-01T00:00:00-07:00'
            },
            {
              name: '2010-08-01T00:00:00-07:00',
              count: 6,
              value: '2010-08-01T00:00:00-07:00'
            },
            {
              name: '2010-09-01T00:00:00-07:00',
              count: 13,
              value: '2010-09-01T00:00:00-07:00'
            },
            {
              name: '2010-10-01T00:00:00-07:00',
              count: 16,
              value: '2010-10-01T00:00:00-07:00'
            },
            {
              name: '2010-11-01T00:00:00-07:00',
              count: 13,
              value: '2010-11-01T00:00:00-07:00'
            },
            {
              name: '2010-12-01T00:00:00-08:00',
              count: 14,
              value: '2010-12-01T00:00:00-08:00'
            },
            {
              name: '2011-01-01T00:00:00-08:00',
              count: 14,
              value: '2011-01-01T00:00:00-08:00'
            },
            {
              name: '2011-02-01T00:00:00-08:00',
              count: 16,
              value: '2011-02-01T00:00:00-08:00'
            },
            {
              name: '2011-03-01T00:00:00-08:00',
              count: 14,
              value: '2011-03-01T00:00:00-08:00'
            },
            {
              name: '2011-04-01T00:00:00-07:00',
              count: 15,
              value: '2011-04-01T00:00:00-07:00'
            },
            {
              name: '2011-05-01T00:00:00-07:00',
              count: 26,
              value: '2011-05-01T00:00:00-07:00'
            },
            {
              name: '2011-06-01T00:00:00-07:00',
              count: 24,
              value: '2011-06-01T00:00:00-07:00'
            },
            {
              name: '2011-07-01T00:00:00-07:00',
              count: 28,
              value: '2011-07-01T00:00:00-07:00'
            },
            {
              name: '2011-08-01T00:00:00-07:00',
              count: 26,
              value: '2011-08-01T00:00:00-07:00'
            },
            {
              name: '2011-09-01T00:00:00-07:00',
              count: 21,
              value: '2011-09-01T00:00:00-07:00'
            },
            {
              name: '2011-10-01T00:00:00-07:00',
              count: 23,
              value: '2011-10-01T00:00:00-07:00'
            },
            {
              name: '2011-11-01T00:00:00-07:00',
              count: 30,
              value: '2011-11-01T00:00:00-07:00'
            },
            {
              name: '2011-12-01T00:00:00-08:00',
              count: 31,
              value: '2011-12-01T00:00:00-08:00'
            },
            {
              name: '2012-01-01T00:00:00-08:00',
              count: 23,
              value: '2012-01-01T00:00:00-08:00'
            },
            {
              name: '2012-02-01T00:00:00-08:00',
              count: 36,
              value: '2012-02-01T00:00:00-08:00'
            },
            {
              name: '2012-03-01T00:00:00-08:00',
              count: 43,
              value: '2012-03-01T00:00:00-08:00'
            },
            {
              name: '2012-04-01T00:00:00-07:00',
              count: 27,
              value: '2012-04-01T00:00:00-07:00'
            },
            {
              name: '2012-05-01T00:00:00-07:00',
              count: 41,
              value: '2012-05-01T00:00:00-07:00'
            },
            {
              name: '2012-06-01T00:00:00-07:00',
              count: 36,
              value: '2012-06-01T00:00:00-07:00'
            },
            {
              name: '2012-07-01T00:00:00-07:00',
              count: 43,
              value: '2012-07-01T00:00:00-07:00'
            },
            {
              name: '2012-08-01T00:00:00-07:00',
              count: 52,
              value: '2012-08-01T00:00:00-07:00'
            },
            {
              name: '2012-09-01T00:00:00-07:00',
              count: 31,
              value: '2012-09-01T00:00:00-07:00'
            },
            {
              name: '2012-10-01T00:00:00-07:00',
              count: 37,
              value: '2012-10-01T00:00:00-07:00'
            },
            {
              name: '2012-11-01T00:00:00-07:00',
              count: 41,
              value: '2012-11-01T00:00:00-07:00'
            },
            {
              name: '2012-12-01T00:00:00-08:00',
              count: 29,
              value: '2012-12-01T00:00:00-08:00'
            },
            {
              name: '2013-01-01T00:00:00-08:00',
              count: 38,
              value: '2013-01-01T00:00:00-08:00'
            },
            {
              name: '2013-02-01T00:00:00-08:00',
              count: 36,
              value: '2013-02-01T00:00:00-08:00'
            },
            {
              name: '2013-03-01T00:00:00-08:00',
              count: 44,
              value: '2013-03-01T00:00:00-08:00'
            },
            {
              name: '2013-04-01T00:00:00-07:00',
              count: 53,
              value: '2013-04-01T00:00:00-07:00'
            },
            {
              name: '2013-05-01T00:00:00-07:00',
              count: 57,
              value: '2013-05-01T00:00:00-07:00'
            },
            {
              name: '2013-06-01T00:00:00-07:00',
              count: 47,
              value: '2013-06-01T00:00:00-07:00'
            },
            {
              name: '2013-07-01T00:00:00-07:00',
              count: 53,
              value: '2013-07-01T00:00:00-07:00'
            },
            {
              name: '2013-08-01T00:00:00-07:00',
              count: 52,
              value: '2013-08-01T00:00:00-07:00'
            },
            {
              name: '2013-09-01T00:00:00-07:00',
              count: 44,
              value: '2013-09-01T00:00:00-07:00'
            },
            {
              name: '2013-10-01T00:00:00-07:00',
              count: 54,
              value: '2013-10-01T00:00:00-07:00'
            },
            {
              name: '2013-11-01T00:00:00-07:00',
              count: 51,
              value: '2013-11-01T00:00:00-07:00'
            },
            {
              name: '2013-12-01T00:00:00-08:00',
              count: 62,
              value: '2013-12-01T00:00:00-08:00'
            },
            {
              name: '2014-01-01T00:00:00-08:00',
              count: 67,
              value: '2014-01-01T00:00:00-08:00'
            },
            {
              name: '2014-02-01T00:00:00-08:00',
              count: 57,
              value: '2014-02-01T00:00:00-08:00'
            },
            {
              name: '2014-03-01T00:00:00-08:00',
              count: 72,
              value: '2014-03-01T00:00:00-08:00'
            },
            {
              name: '2014-04-01T00:00:00-07:00',
              count: 48,
              value: '2014-04-01T00:00:00-07:00'
            },
            {
              name: '2014-05-01T00:00:00-07:00',
              count: 57,
              value: '2014-05-01T00:00:00-07:00'
            },
            {
              name: '2014-06-01T00:00:00-07:00',
              count: 50,
              value: '2014-06-01T00:00:00-07:00'
            },
            {
              name: '2014-07-01T00:00:00-07:00',
              count: 35,
              value: '2014-07-01T00:00:00-07:00'
            },
            {
              name: '2014-08-01T00:00:00-07:00',
              count: 58,
              value: '2014-08-01T00:00:00-07:00'
            },
            {
              name: '2014-09-01T00:00:00-07:00',
              count: 26,
              value: '2014-09-01T00:00:00-07:00'
            },
            {
              name: '2015-08-01T00:00:00-07:00',
              count: 2,
              value: '2015-08-01T00:00:00-07:00'
            }
          ]
        },
        tag: {
          type: 'xs:string',
          facetValues: [
            {
              name: 'javascript',
              count: 1041,
              value: 'javascript'
            },
            {
              name: 'jquery',
              count: 697,
              value: 'jquery'
            },
            {
              name: 'html',
              count: 261,
              value: 'html'
            },
            {
              name: 'marklogic',
              count: 217,
              value: 'marklogic'
            },
            {
              name: 'php',
              count: 158,
              value: 'php'
            },
            {
              name: 'xquery',
              count: 144,
              value: 'xquery'
            },
            {
              name: 'css',
              count: 100,
              value: 'css'
            },
            {
              name: 'ajax',
              count: 98,
              value: 'ajax'
            },
            {
              name: 'xml',
              count: 93,
              value: 'xml'
            },
            {
              name: 'json',
              count: 91,
              value: 'json'
            }
          ]
        }
      },
      query: {
        'and-query': [
          {
            'json-property-value-query': {
              property: 'accepted',
              value: [
                {
                  type: 'xs:boolean',
                  _value: true
                }
              ]
            },
            'directory-query': [
              {
                uri: '/questions/'
              }
            ],
            annotation: [
              {
                'operator-ref': 'sort',
                'state-ref': 'active'
              }
            ]
          }
        ]
      },
      qtext: 'sort:active',
      report: '(cts:search(fn:collection(), cts:and-query((cts:json-property-value-query("accepted", fn:true(), ("lang=en"), 1), cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:index-order(cts:json-property-reference("lastActivityDate",("type=dateTime")), "descending")), 1))[1 to 10]',
      metrics: {
        'query-resolution-time': 'PT0.076605S',
        'facet-resolution-time': 'PT0.093762S',
        'snippet-resolution-time': 'PT0.043077S',
        'total-time': 'PT0.51958S'
      }
    }
  },
  'searchAcc': {
    spec: {
      search: {
        qtext: [
          '',
          'sort:active'
        ],
        start: 1,
        timezone: 'America/Los_Angeles'
      },
      shadow: undefined
    },
    docsQuery: {
      search: {
        qtext: [
          '',
          'sort:active'
        ],
        timezone: 'America/Los_Angeles',
        query: {
          'and-query': {
            queries: [
              {
                'directory-query': {
                  uri: [
                    '/questions/'
                  ]
                }
              }
            ]
          }
        },
        options: {
          constraint: [
            {
              name: 'date',
              range: {
                facet: true,
                'json-property': 'lastActivityDate',
                type: 'xs:dateTime',
                bucket: [
                  {
                    ge: '2009-05-01T00:00:00-07:00',
                    lt: '2009-06-01T00:00:00-07:00',
                    name: '2009-05-01T00:00:00-07:00',
                    label: '2009-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-06-01T00:00:00-07:00',
                    lt: '2009-07-01T00:00:00-07:00',
                    name: '2009-06-01T00:00:00-07:00',
                    label: '2009-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-07-01T00:00:00-07:00',
                    lt: '2009-08-01T00:00:00-07:00',
                    name: '2009-07-01T00:00:00-07:00',
                    label: '2009-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-08-01T00:00:00-07:00',
                    lt: '2009-09-01T00:00:00-07:00',
                    name: '2009-08-01T00:00:00-07:00',
                    label: '2009-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-09-01T00:00:00-07:00',
                    lt: '2009-10-01T00:00:00-07:00',
                    name: '2009-09-01T00:00:00-07:00',
                    label: '2009-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-10-01T00:00:00-07:00',
                    lt: '2009-11-01T00:00:00-07:00',
                    name: '2009-10-01T00:00:00-07:00',
                    label: '2009-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-11-01T00:00:00-07:00',
                    lt: '2009-12-01T00:00:00-08:00',
                    name: '2009-11-01T00:00:00-07:00',
                    label: '2009-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-12-01T00:00:00-08:00',
                    lt: '2010-01-01T00:00:00-08:00',
                    name: '2009-12-01T00:00:00-08:00',
                    label: '2009-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-01-01T00:00:00-08:00',
                    lt: '2010-02-01T00:00:00-08:00',
                    name: '2010-01-01T00:00:00-08:00',
                    label: '2010-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-02-01T00:00:00-08:00',
                    lt: '2010-03-01T00:00:00-08:00',
                    name: '2010-02-01T00:00:00-08:00',
                    label: '2010-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-03-01T00:00:00-08:00',
                    lt: '2010-04-01T00:00:00-07:00',
                    name: '2010-03-01T00:00:00-08:00',
                    label: '2010-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-04-01T00:00:00-07:00',
                    lt: '2010-05-01T00:00:00-07:00',
                    name: '2010-04-01T00:00:00-07:00',
                    label: '2010-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-05-01T00:00:00-07:00',
                    lt: '2010-06-01T00:00:00-07:00',
                    name: '2010-05-01T00:00:00-07:00',
                    label: '2010-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-06-01T00:00:00-07:00',
                    lt: '2010-07-01T00:00:00-07:00',
                    name: '2010-06-01T00:00:00-07:00',
                    label: '2010-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-07-01T00:00:00-07:00',
                    lt: '2010-08-01T00:00:00-07:00',
                    name: '2010-07-01T00:00:00-07:00',
                    label: '2010-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-08-01T00:00:00-07:00',
                    lt: '2010-09-01T00:00:00-07:00',
                    name: '2010-08-01T00:00:00-07:00',
                    label: '2010-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-09-01T00:00:00-07:00',
                    lt: '2010-10-01T00:00:00-07:00',
                    name: '2010-09-01T00:00:00-07:00',
                    label: '2010-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-10-01T00:00:00-07:00',
                    lt: '2010-11-01T00:00:00-07:00',
                    name: '2010-10-01T00:00:00-07:00',
                    label: '2010-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-11-01T00:00:00-07:00',
                    lt: '2010-12-01T00:00:00-08:00',
                    name: '2010-11-01T00:00:00-07:00',
                    label: '2010-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-12-01T00:00:00-08:00',
                    lt: '2011-01-01T00:00:00-08:00',
                    name: '2010-12-01T00:00:00-08:00',
                    label: '2010-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-01-01T00:00:00-08:00',
                    lt: '2011-02-01T00:00:00-08:00',
                    name: '2011-01-01T00:00:00-08:00',
                    label: '2011-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-02-01T00:00:00-08:00',
                    lt: '2011-03-01T00:00:00-08:00',
                    name: '2011-02-01T00:00:00-08:00',
                    label: '2011-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-03-01T00:00:00-08:00',
                    lt: '2011-04-01T00:00:00-07:00',
                    name: '2011-03-01T00:00:00-08:00',
                    label: '2011-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-04-01T00:00:00-07:00',
                    lt: '2011-05-01T00:00:00-07:00',
                    name: '2011-04-01T00:00:00-07:00',
                    label: '2011-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-05-01T00:00:00-07:00',
                    lt: '2011-06-01T00:00:00-07:00',
                    name: '2011-05-01T00:00:00-07:00',
                    label: '2011-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-06-01T00:00:00-07:00',
                    lt: '2011-07-01T00:00:00-07:00',
                    name: '2011-06-01T00:00:00-07:00',
                    label: '2011-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-07-01T00:00:00-07:00',
                    lt: '2011-08-01T00:00:00-07:00',
                    name: '2011-07-01T00:00:00-07:00',
                    label: '2011-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-08-01T00:00:00-07:00',
                    lt: '2011-09-01T00:00:00-07:00',
                    name: '2011-08-01T00:00:00-07:00',
                    label: '2011-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-09-01T00:00:00-07:00',
                    lt: '2011-10-01T00:00:00-07:00',
                    name: '2011-09-01T00:00:00-07:00',
                    label: '2011-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-10-01T00:00:00-07:00',
                    lt: '2011-11-01T00:00:00-07:00',
                    name: '2011-10-01T00:00:00-07:00',
                    label: '2011-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-11-01T00:00:00-07:00',
                    lt: '2011-12-01T00:00:00-08:00',
                    name: '2011-11-01T00:00:00-07:00',
                    label: '2011-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-12-01T00:00:00-08:00',
                    lt: '2012-01-01T00:00:00-08:00',
                    name: '2011-12-01T00:00:00-08:00',
                    label: '2011-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-01-01T00:00:00-08:00',
                    lt: '2012-02-01T00:00:00-08:00',
                    name: '2012-01-01T00:00:00-08:00',
                    label: '2012-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-02-01T00:00:00-08:00',
                    lt: '2012-03-01T00:00:00-08:00',
                    name: '2012-02-01T00:00:00-08:00',
                    label: '2012-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-03-01T00:00:00-08:00',
                    lt: '2012-04-01T00:00:00-07:00',
                    name: '2012-03-01T00:00:00-08:00',
                    label: '2012-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-04-01T00:00:00-07:00',
                    lt: '2012-05-01T00:00:00-07:00',
                    name: '2012-04-01T00:00:00-07:00',
                    label: '2012-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-05-01T00:00:00-07:00',
                    lt: '2012-06-01T00:00:00-07:00',
                    name: '2012-05-01T00:00:00-07:00',
                    label: '2012-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-06-01T00:00:00-07:00',
                    lt: '2012-07-01T00:00:00-07:00',
                    name: '2012-06-01T00:00:00-07:00',
                    label: '2012-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-07-01T00:00:00-07:00',
                    lt: '2012-08-01T00:00:00-07:00',
                    name: '2012-07-01T00:00:00-07:00',
                    label: '2012-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-08-01T00:00:00-07:00',
                    lt: '2012-09-01T00:00:00-07:00',
                    name: '2012-08-01T00:00:00-07:00',
                    label: '2012-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-09-01T00:00:00-07:00',
                    lt: '2012-10-01T00:00:00-07:00',
                    name: '2012-09-01T00:00:00-07:00',
                    label: '2012-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-10-01T00:00:00-07:00',
                    lt: '2012-11-01T00:00:00-07:00',
                    name: '2012-10-01T00:00:00-07:00',
                    label: '2012-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-11-01T00:00:00-07:00',
                    lt: '2012-12-01T00:00:00-08:00',
                    name: '2012-11-01T00:00:00-07:00',
                    label: '2012-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-12-01T00:00:00-08:00',
                    lt: '2013-01-01T00:00:00-08:00',
                    name: '2012-12-01T00:00:00-08:00',
                    label: '2012-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-01-01T00:00:00-08:00',
                    lt: '2013-02-01T00:00:00-08:00',
                    name: '2013-01-01T00:00:00-08:00',
                    label: '2013-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-02-01T00:00:00-08:00',
                    lt: '2013-03-01T00:00:00-08:00',
                    name: '2013-02-01T00:00:00-08:00',
                    label: '2013-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-03-01T00:00:00-08:00',
                    lt: '2013-04-01T00:00:00-07:00',
                    name: '2013-03-01T00:00:00-08:00',
                    label: '2013-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-04-01T00:00:00-07:00',
                    lt: '2013-05-01T00:00:00-07:00',
                    name: '2013-04-01T00:00:00-07:00',
                    label: '2013-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-05-01T00:00:00-07:00',
                    lt: '2013-06-01T00:00:00-07:00',
                    name: '2013-05-01T00:00:00-07:00',
                    label: '2013-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-06-01T00:00:00-07:00',
                    lt: '2013-07-01T00:00:00-07:00',
                    name: '2013-06-01T00:00:00-07:00',
                    label: '2013-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-07-01T00:00:00-07:00',
                    lt: '2013-08-01T00:00:00-07:00',
                    name: '2013-07-01T00:00:00-07:00',
                    label: '2013-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-08-01T00:00:00-07:00',
                    lt: '2013-09-01T00:00:00-07:00',
                    name: '2013-08-01T00:00:00-07:00',
                    label: '2013-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-09-01T00:00:00-07:00',
                    lt: '2013-10-01T00:00:00-07:00',
                    name: '2013-09-01T00:00:00-07:00',
                    label: '2013-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-10-01T00:00:00-07:00',
                    lt: '2013-11-01T00:00:00-07:00',
                    name: '2013-10-01T00:00:00-07:00',
                    label: '2013-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-11-01T00:00:00-07:00',
                    lt: '2013-12-01T00:00:00-08:00',
                    name: '2013-11-01T00:00:00-07:00',
                    label: '2013-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-12-01T00:00:00-08:00',
                    lt: '2014-01-01T00:00:00-08:00',
                    name: '2013-12-01T00:00:00-08:00',
                    label: '2013-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-01-01T00:00:00-08:00',
                    lt: '2014-02-01T00:00:00-08:00',
                    name: '2014-01-01T00:00:00-08:00',
                    label: '2014-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-02-01T00:00:00-08:00',
                    lt: '2014-03-01T00:00:00-08:00',
                    name: '2014-02-01T00:00:00-08:00',
                    label: '2014-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-03-01T00:00:00-08:00',
                    lt: '2014-04-01T00:00:00-07:00',
                    name: '2014-03-01T00:00:00-08:00',
                    label: '2014-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-04-01T00:00:00-07:00',
                    lt: '2014-05-01T00:00:00-07:00',
                    name: '2014-04-01T00:00:00-07:00',
                    label: '2014-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-05-01T00:00:00-07:00',
                    lt: '2014-06-01T00:00:00-07:00',
                    name: '2014-05-01T00:00:00-07:00',
                    label: '2014-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-06-01T00:00:00-07:00',
                    lt: '2014-07-01T00:00:00-07:00',
                    name: '2014-06-01T00:00:00-07:00',
                    label: '2014-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-07-01T00:00:00-07:00',
                    lt: '2014-08-01T00:00:00-07:00',
                    name: '2014-07-01T00:00:00-07:00',
                    label: '2014-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-08-01T00:00:00-07:00',
                    lt: '2014-09-01T00:00:00-07:00',
                    name: '2014-08-01T00:00:00-07:00',
                    label: '2014-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-09-01T00:00:00-07:00',
                    lt: '2014-10-01T00:00:00-07:00',
                    name: '2014-09-01T00:00:00-07:00',
                    label: '2014-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-10-01T00:00:00-07:00',
                    lt: '2014-11-01T00:00:00-07:00',
                    name: '2014-10-01T00:00:00-07:00',
                    label: '2014-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-11-01T00:00:00-07:00',
                    lt: '2014-12-01T00:00:00-08:00',
                    name: '2014-11-01T00:00:00-07:00',
                    label: '2014-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-12-01T00:00:00-08:00',
                    lt: '2015-01-01T00:00:00-08:00',
                    name: '2014-12-01T00:00:00-08:00',
                    label: '2014-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-01-01T00:00:00-08:00',
                    lt: '2015-02-01T00:00:00-08:00',
                    name: '2015-01-01T00:00:00-08:00',
                    label: '2015-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-02-01T00:00:00-08:00',
                    lt: '2015-03-01T00:00:00-08:00',
                    name: '2015-02-01T00:00:00-08:00',
                    label: '2015-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-03-01T00:00:00-08:00',
                    lt: '2015-04-01T00:00:00-07:00',
                    name: '2015-03-01T00:00:00-08:00',
                    label: '2015-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-04-01T00:00:00-07:00',
                    lt: '2015-05-01T00:00:00-07:00',
                    name: '2015-04-01T00:00:00-07:00',
                    label: '2015-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-05-01T00:00:00-07:00',
                    lt: '2015-06-01T00:00:00-07:00',
                    name: '2015-05-01T00:00:00-07:00',
                    label: '2015-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-06-01T00:00:00-07:00',
                    lt: '2015-07-01T00:00:00-07:00',
                    name: '2015-06-01T00:00:00-07:00',
                    label: '2015-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-07-01T00:00:00-07:00',
                    lt: '2015-08-01T00:00:00-07:00',
                    name: '2015-07-01T00:00:00-07:00',
                    label: '2015-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-08-01T00:00:00-07:00',
                    lt: '2015-09-01T00:00:00-07:00',
                    name: '2015-08-01T00:00:00-07:00',
                    label: '2015-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-09-01T00:00:00-07:00',
                    lt: '2015-10-01T00:00:00-07:00',
                    name: '2015-09-01T00:00:00-07:00',
                    label: '2015-09-01T00:00:00-07:00'
                  }
                ]
              }
            }
          ]
        }
      },
      shadow: undefined,
      pageStart: 1,
      pageLength: 10,
      optionsName: 'questions',
      transform: 'search-response',
      view: 'all'
    },
    docsQueryResult: [
      {
        'snippet-format': 'snippet',
        total: 3001,
        start: 1,
        'page-length': 10,
        results: [
          {
            index: 1,
            uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
            path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2F8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 2
                  }
                ]
              }
            ]
          },
          {
            index: 2,
            uri: '/questions/b8497318-21d1-4ce2-9e40-4c4846e28930.json',
            path: 'fn:doc("/questions/b8497318-21d1-4ce2-9e40-4c4846e28930.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2Fb8497318-21d1-4ce2-9e40-4c4846e28930.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/b8497318-21d1-4ce2-9e40-4c4846e28930.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              }
            ]
          },
          {
            index: 3,
            uri: '/questions/fad160b3-b39d-43ea-8370-c1a80aed0d0a.json',
            path: 'fn:doc("/questions/fad160b3-b39d-43ea-8370-c1a80aed0d0a.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2Ffad160b3-b39d-43ea-8370-c1a80aed0d0a.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/fad160b3-b39d-43ea-8370-c1a80aed0d0a.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              }
            ]
          },
          {
            index: 4,
            uri: '/questions/8941180e-d6fe-41bb-bd8a-1cbb4647a416.json',
            path: 'fn:doc("/questions/8941180e-d6fe-41bb-bd8a-1cbb4647a416.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2F8941180e-d6fe-41bb-bd8a-1cbb4647a416.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/8941180e-d6fe-41bb-bd8a-1cbb4647a416.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              }
            ]
          },
          {
            index: 5,
            uri: '/questions/99753e7e-fbeb-435b-af58-2f4630181f0f.json',
            path: 'fn:doc("/questions/99753e7e-fbeb-435b-af58-2f4630181f0f.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2F99753e7e-fbeb-435b-af58-2f4630181f0f.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/99753e7e-fbeb-435b-af58-2f4630181f0f.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 0
                  }
                ]
              }
            ]
          },
          {
            index: 6,
            uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
            path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2Fd541761f-790b-4ce6-8923-580d62f946f1.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 2
                  }
                ]
              }
            ]
          },
          {
            index: 7,
            uri: '/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json',
            path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2F5dce8909-0972-4289-93cd-f2e8790a17fc.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 4
                  }
                ]
              }
            ]
          },
          {
            index: 8,
            uri: '/questions/8d21be06-8013-4639-bb7e-5db00222196a.json',
            path: 'fn:doc("/questions/8d21be06-8013-4639-bb7e-5db00222196a.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2F8d21be06-8013-4639-bb7e-5db00222196a.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/8d21be06-8013-4639-bb7e-5db00222196a.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 1
                  }
                ]
              }
            ]
          },
          {
            index: 9,
            uri: '/questions/c3d5e7c0-82a1-4aaf-8d32-eac23041f413.json',
            path: 'fn:doc("/questions/c3d5e7c0-82a1-4aaf-8d32-eac23041f413.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2Fc3d5e7c0-82a1-4aaf-8d32-eac23041f413.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/c3d5e7c0-82a1-4aaf-8d32-eac23041f413.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 1
                  }
                ]
              }
            ]
          },
          {
            index: 10,
            uri: '/questions/be218ee8-ebaa-4564-a0e5-1a19f06ab8e6.json',
            path: 'fn:doc("/questions/be218ee8-ebaa-4564-a0e5-1a19f06ab8e6.json")',
            score: 2048,
            confidence: 0.07650452,
            fitness: 0.5995002,
            href: '/v1/documents?uri=%2Fquestions%2Fbe218ee8-ebaa-4564-a0e5-1a19f06ab8e6.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                path: 'fn:doc("/questions/be218ee8-ebaa-4564-a0e5-1a19f06ab8e6.json")/number-node("voteCount")',
                'match-text': [
                  {
                    highlight: 1
                  }
                ]
              }
            ]
          }
        ],
        facets: {
          date: {
            type: 'bucketed',
            facetValues: [
              {
                name: '2009-06-01T00:00:00-07:00',
                count: 3,
                value: '2009-06-01T00:00:00-07:00'
              },
              {
                name: '2009-07-01T00:00:00-07:00',
                count: 2,
                value: '2009-07-01T00:00:00-07:00'
              },
              {
                name: '2009-08-01T00:00:00-07:00',
                count: 6,
                value: '2009-08-01T00:00:00-07:00'
              },
              {
                name: '2009-09-01T00:00:00-07:00',
                count: 3,
                value: '2009-09-01T00:00:00-07:00'
              },
              {
                name: '2009-10-01T00:00:00-07:00',
                count: 2,
                value: '2009-10-01T00:00:00-07:00'
              },
              {
                name: '2009-11-01T00:00:00-07:00',
                count: 4,
                value: '2009-11-01T00:00:00-07:00'
              },
              {
                name: '2009-12-01T00:00:00-08:00',
                count: 4,
                value: '2009-12-01T00:00:00-08:00'
              },
              {
                name: '2010-01-01T00:00:00-08:00',
                count: 5,
                value: '2010-01-01T00:00:00-08:00'
              },
              {
                name: '2010-02-01T00:00:00-08:00',
                count: 13,
                value: '2010-02-01T00:00:00-08:00'
              },
              {
                name: '2010-03-01T00:00:00-08:00',
                count: 8,
                value: '2010-03-01T00:00:00-08:00'
              },
              {
                name: '2010-04-01T00:00:00-07:00',
                count: 13,
                value: '2010-04-01T00:00:00-07:00'
              },
              {
                name: '2010-05-01T00:00:00-07:00',
                count: 7,
                value: '2010-05-01T00:00:00-07:00'
              },
              {
                name: '2010-06-01T00:00:00-07:00',
                count: 12,
                value: '2010-06-01T00:00:00-07:00'
              },
              {
                name: '2010-07-01T00:00:00-07:00',
                count: 10,
                value: '2010-07-01T00:00:00-07:00'
              },
              {
                name: '2010-08-01T00:00:00-07:00',
                count: 11,
                value: '2010-08-01T00:00:00-07:00'
              },
              {
                name: '2010-09-01T00:00:00-07:00',
                count: 16,
                value: '2010-09-01T00:00:00-07:00'
              },
              {
                name: '2010-10-01T00:00:00-07:00',
                count: 20,
                value: '2010-10-01T00:00:00-07:00'
              },
              {
                name: '2010-11-01T00:00:00-07:00',
                count: 16,
                value: '2010-11-01T00:00:00-07:00'
              },
              {
                name: '2010-12-01T00:00:00-08:00',
                count: 22,
                value: '2010-12-01T00:00:00-08:00'
              },
              {
                name: '2011-01-01T00:00:00-08:00',
                count: 19,
                value: '2011-01-01T00:00:00-08:00'
              },
              {
                name: '2011-02-01T00:00:00-08:00',
                count: 24,
                value: '2011-02-01T00:00:00-08:00'
              },
              {
                name: '2011-03-01T00:00:00-08:00',
                count: 21,
                value: '2011-03-01T00:00:00-08:00'
              },
              {
                name: '2011-04-01T00:00:00-07:00',
                count: 21,
                value: '2011-04-01T00:00:00-07:00'
              },
              {
                name: '2011-05-01T00:00:00-07:00',
                count: 36,
                value: '2011-05-01T00:00:00-07:00'
              },
              {
                name: '2011-06-01T00:00:00-07:00',
                count: 28,
                value: '2011-06-01T00:00:00-07:00'
              },
              {
                name: '2011-07-01T00:00:00-07:00',
                count: 38,
                value: '2011-07-01T00:00:00-07:00'
              },
              {
                name: '2011-08-01T00:00:00-07:00',
                count: 37,
                value: '2011-08-01T00:00:00-07:00'
              },
              {
                name: '2011-09-01T00:00:00-07:00',
                count: 28,
                value: '2011-09-01T00:00:00-07:00'
              },
              {
                name: '2011-10-01T00:00:00-07:00',
                count: 31,
                value: '2011-10-01T00:00:00-07:00'
              },
              {
                name: '2011-11-01T00:00:00-07:00',
                count: 48,
                value: '2011-11-01T00:00:00-07:00'
              },
              {
                name: '2011-12-01T00:00:00-08:00',
                count: 46,
                value: '2011-12-01T00:00:00-08:00'
              },
              {
                name: '2012-01-01T00:00:00-08:00',
                count: 35,
                value: '2012-01-01T00:00:00-08:00'
              },
              {
                name: '2012-02-01T00:00:00-08:00',
                count: 49,
                value: '2012-02-01T00:00:00-08:00'
              },
              {
                name: '2012-03-01T00:00:00-08:00',
                count: 51,
                value: '2012-03-01T00:00:00-08:00'
              },
              {
                name: '2012-04-01T00:00:00-07:00',
                count: 47,
                value: '2012-04-01T00:00:00-07:00'
              },
              {
                name: '2012-05-01T00:00:00-07:00',
                count: 61,
                value: '2012-05-01T00:00:00-07:00'
              },
              {
                name: '2012-06-01T00:00:00-07:00',
                count: 52,
                value: '2012-06-01T00:00:00-07:00'
              },
              {
                name: '2012-07-01T00:00:00-07:00',
                count: 63,
                value: '2012-07-01T00:00:00-07:00'
              },
              {
                name: '2012-08-01T00:00:00-07:00',
                count: 80,
                value: '2012-08-01T00:00:00-07:00'
              },
              {
                name: '2012-09-01T00:00:00-07:00',
                count: 60,
                value: '2012-09-01T00:00:00-07:00'
              },
              {
                name: '2012-10-01T00:00:00-07:00',
                count: 64,
                value: '2012-10-01T00:00:00-07:00'
              },
              {
                name: '2012-11-01T00:00:00-07:00',
                count: 63,
                value: '2012-11-01T00:00:00-07:00'
              },
              {
                name: '2012-12-01T00:00:00-08:00',
                count: 54,
                value: '2012-12-01T00:00:00-08:00'
              },
              {
                name: '2013-01-01T00:00:00-08:00',
                count: 66,
                value: '2013-01-01T00:00:00-08:00'
              },
              {
                name: '2013-02-01T00:00:00-08:00',
                count: 53,
                value: '2013-02-01T00:00:00-08:00'
              },
              {
                name: '2013-03-01T00:00:00-08:00',
                count: 70,
                value: '2013-03-01T00:00:00-08:00'
              },
              {
                name: '2013-04-01T00:00:00-07:00',
                count: 88,
                value: '2013-04-01T00:00:00-07:00'
              },
              {
                name: '2013-05-01T00:00:00-07:00',
                count: 104,
                value: '2013-05-01T00:00:00-07:00'
              },
              {
                name: '2013-06-01T00:00:00-07:00',
                count: 73,
                value: '2013-06-01T00:00:00-07:00'
              },
              {
                name: '2013-07-01T00:00:00-07:00',
                count: 85,
                value: '2013-07-01T00:00:00-07:00'
              },
              {
                name: '2013-08-01T00:00:00-07:00',
                count: 87,
                value: '2013-08-01T00:00:00-07:00'
              },
              {
                name: '2013-09-01T00:00:00-07:00',
                count: 60,
                value: '2013-09-01T00:00:00-07:00'
              },
              {
                name: '2013-10-01T00:00:00-07:00',
                count: 90,
                value: '2013-10-01T00:00:00-07:00'
              },
              {
                name: '2013-11-01T00:00:00-07:00',
                count: 78,
                value: '2013-11-01T00:00:00-07:00'
              },
              {
                name: '2013-12-01T00:00:00-08:00',
                count: 87,
                value: '2013-12-01T00:00:00-08:00'
              },
              {
                name: '2014-01-01T00:00:00-08:00',
                count: 112,
                value: '2014-01-01T00:00:00-08:00'
              },
              {
                name: '2014-02-01T00:00:00-08:00',
                count: 89,
                value: '2014-02-01T00:00:00-08:00'
              },
              {
                name: '2014-03-01T00:00:00-08:00',
                count: 116,
                value: '2014-03-01T00:00:00-08:00'
              },
              {
                name: '2014-04-01T00:00:00-07:00',
                count: 83,
                value: '2014-04-01T00:00:00-07:00'
              },
              {
                name: '2014-05-01T00:00:00-07:00',
                count: 105,
                value: '2014-05-01T00:00:00-07:00'
              },
              {
                name: '2014-06-01T00:00:00-07:00',
                count: 84,
                value: '2014-06-01T00:00:00-07:00'
              },
              {
                name: '2014-07-01T00:00:00-07:00',
                count: 68,
                value: '2014-07-01T00:00:00-07:00'
              },
              {
                name: '2014-08-01T00:00:00-07:00',
                count: 93,
                value: '2014-08-01T00:00:00-07:00'
              },
              {
                name: '2014-09-01T00:00:00-07:00',
                count: 53,
                value: '2014-09-01T00:00:00-07:00'
              },
              {
                name: '2014-10-01T00:00:00-07:00',
                count: 6,
                value: '2014-10-01T00:00:00-07:00'
              },
              {
                name: '2015-07-01T00:00:00-07:00',
                count: 12,
                value: '2015-07-01T00:00:00-07:00'
              },
              {
                name: '2015-08-01T00:00:00-07:00',
                count: 6,
                value: '2015-08-01T00:00:00-07:00'
              }
            ]
          },
          tag: {
            type: 'xs:string',
            facetValues: [
              {
                name: 'javascript',
                count: 1557,
                value: 'javascript'
              },
              {
                name: 'jquery',
                count: 987,
                value: 'jquery'
              },
              {
                name: 'marklogic',
                count: 487,
                value: 'marklogic'
              },
              {
                name: 'html',
                count: 372,
                value: 'html'
              },
              {
                name: 'xquery',
                count: 267,
                value: 'xquery'
              },
              {
                name: 'php',
                count: 254,
                value: 'php'
              },
              {
                name: 'ajax',
                count: 158,
                value: 'ajax'
              },
              {
                name: 'xml',
                count: 151,
                value: 'xml'
              },
              {
                name: 'json',
                count: 142,
                value: 'json'
              },
              {
                name: 'css',
                count: 134,
                value: 'css'
              }
            ]
          }
        },
        query: {
          'and-query': [
            {
              'directory-query': [
                {
                  uri: '/questions/'
                }
              ],
              annotation: [
                {
                  'operator-ref': 'sort',
                  'state-ref': 'active'
                }
              ]
            }
          ]
        },
        qtext: 'sort:active',
        report: '(cts:search(fn:collection(), cts:and-query((cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:index-order(cts:json-property-reference("lastActivityDate",("type=dateTime")), "descending")), 1))[1 to 10]',
        metrics: {
          'query-resolution-time': 'PT0.051085S',
          'facet-resolution-time': 'PT0.091582S',
          'snippet-resolution-time': 'PT0.030461S',
          'total-time': 'PT1.770279S'
        }
      },
      {
        uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '624',
        content: {
          creationDate: '2014-10-01T08:59:08.824Z',
          id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019',
          itemTally: 1,
          lastActivityDate: '2015-08-03T07:50:35.261Z',
          owner: {
            id: '9611450a-0663-45a5-8a08-f1c71320475e',
            reputation: 104,
            userName: 'mary@example.com',
            displayName: 'MaryAdmin'
          },
          tags: [
            'ada',
            'seed-data'
          ],
          text: 'I, Mary, had a question about the word abyss and the number 0',
          title: 'Mary\'s Question Number 0',
          voteCount: 2,
          acceptedAnswerId: 'ef376cf4-3a30-44af-b2c5-722e6439723d',
          accepted: true,
          answerCount: 2,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/b8497318-21d1-4ce2-9e40-4c4846e28930.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '465',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          answerCount: 0,
          itemTally: 0,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [

          ],
          voteCount: 0,
          title: 'test',
          text: 'test',
          tags: [
            '.htaccess'
          ],
          lastActivityDate: '2015-08-02T19:23:38.038Z',
          creationDate: '2015-08-02T19:23:38.038Z',
          id: 'b8497318-21d1-4ce2-9e40-4c4846e28930',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          }
        }
      },
      {
        uri: '/questions/fad160b3-b39d-43ea-8370-c1a80aed0d0a.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '465',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          answerCount: 0,
          itemTally: 0,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [

          ],
          voteCount: 0,
          title: 'test',
          text: 'test',
          tags: [
            '.htaccess'
          ],
          lastActivityDate: '2015-08-02T19:15:04.469Z',
          creationDate: '2015-08-02T19:15:04.469Z',
          id: 'fad160b3-b39d-43ea-8370-c1a80aed0d0a',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          }
        }
      },
      {
        uri: '/questions/8941180e-d6fe-41bb-bd8a-1cbb4647a416.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '465',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          answerCount: 0,
          itemTally: 0,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [

          ],
          voteCount: 0,
          title: 'test',
          text: 'test',
          tags: [
            '.htaccess'
          ],
          lastActivityDate: '2015-08-02T19:14:14.225Z',
          creationDate: '2015-08-02T19:14:14.225Z',
          id: '8941180e-d6fe-41bb-bd8a-1cbb4647a416',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          }
        }
      },
      {
        uri: '/questions/99753e7e-fbeb-435b-af58-2f4630181f0f.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '465',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          answerCount: 0,
          itemTally: 0,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [

          ],
          voteCount: 0,
          title: 'test',
          text: 'test',
          tags: [
            '.htaccess'
          ],
          lastActivityDate: '2015-08-02T19:06:16.451Z',
          creationDate: '2015-08-02T19:06:16.451Z',
          id: '99753e7e-fbeb-435b-af58-2f4630181f0f',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          }
        }
      },
      {
        uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '543',
        content: {
          accepted: true,
          acceptedAnswerId: '3b003576-da9c-496b-8b35-fda663da2cd9',
          answerCount: 1,
          creationDate: '2015-07-15T14:42:50.608-0700',
          id: 'd541761f-790b-4ce6-8923-580d62f946f1',
          itemTally: 1,
          lastActivityDate: '2015-08-01T09:00:48.560Z',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          },
          tags: [

          ],
          text: '**test**',
          title: 'mine only test',
          voteCount: 2,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '559',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          creationDate: '2014-10-01T08:59:08.866Z',
          id: '5dce8909-0972-4289-93cd-f2e8790a17fc',
          itemTally: 0,
          lastActivityDate: '2015-07-30T02:37:54.574Z',
          owner: {
            id: '9611450a-0663-45a5-8a08-f1c71320475e',
            reputation: 104,
            userName: 'mary@example.com',
            displayName: 'MaryAdmin'
          },
          tags: [
            'python',
            'seed-data'
          ],
          text: 'I, Mary, had a question about the word balsamic and the number 1',
          title: 'Mary\'s Question Number 1',
          voteCount: 4,
          answerCount: 3,
          upvotingContributorIds: [

          ],
          downvotingContributorIds: [

          ]
        }
      },
      {
        uri: '/questions/8d21be06-8013-4639-bb7e-5db00222196a.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '487',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          answerCount: 0,
          itemTally: 1,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ],
          voteCount: 1,
          title: 'title of the question 333',
          lastActivityDate: '2015-07-29T22:14:13.464Z',
          creationDate: '2015-07-29T22:14:13.464Z',
          id: '8d21be06-8013-4639-bb7e-5db00222196a',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          }
        }
      },
      {
        uri: '/questions/c3d5e7c0-82a1-4aaf-8d32-eac23041f413.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '483',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          answerCount: 0,
          itemTally: 1,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ],
          voteCount: 1,
          title: 'title of the question',
          lastActivityDate: '2015-07-29T22:14:03.020Z',
          creationDate: '2015-07-29T22:14:03.020Z',
          id: 'c3d5e7c0-82a1-4aaf-8d32-eac23041f413',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          }
        }
      },
      {
        uri: '/questions/be218ee8-ebaa-4564-a0e5-1a19f06ab8e6.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '450',
        content: {
          accepted: false,
          acceptedAnswerId: null,
          answerCount: 0,
          itemTally: 1,
          upvotingContributorIds: [
            'cf99542d-f024-4478-a6dc-7e723a51b040'
          ],
          downvotingContributorIds: [

          ],
          voteCount: 1,
          lastActivityDate: '2015-07-29T22:13:46.247Z',
          creationDate: '2015-07-29T22:13:46.247Z',
          id: 'be218ee8-ebaa-4564-a0e5-1a19f06ab8e6',
          owner: {
            id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
            reputation: 59,
            userName: 'joe@example.com',
            displayName: 'JoeUser'
          }
        }
      }
    ],
    ret: {
      'snippet-format': 'snippet',
      total: 3001,
      start: 1,
      'page-length': 10,
      results: [
        {
          index: 1,
          uri: '/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
          path: 'fn:doc("/questions/8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2F8450f8a4-2782-4c8a-9fd9-b83bcacc5019.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            creationDate: '2014-10-01T08:59:08.824Z',
            id: '8450f8a4-2782-4c8a-9fd9-b83bcacc5019',
            itemTally: 1,
            lastActivityDate: '2015-08-03T07:50:35.261Z',
            owner: {
              id: '9611450a-0663-45a5-8a08-f1c71320475e',
              reputation: 104,
              userName: 'mary@example.com',
              displayName: 'MaryAdmin'
            },
            tags: [
              'ada',
              'seed-data'
            ],
            text: 'I, Mary, had a question about the word abyss and the number 0',
            title: 'Mary\'s Question Number 0',
            voteCount: 2,
            acceptedAnswerId: 'ef376cf4-3a30-44af-b2c5-722e6439723d',
            accepted: true,
            answerCount: 2,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 2,
          uri: '/questions/b8497318-21d1-4ce2-9e40-4c4846e28930.json',
          path: 'fn:doc("/questions/b8497318-21d1-4ce2-9e40-4c4846e28930.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2Fb8497318-21d1-4ce2-9e40-4c4846e28930.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            answerCount: 0,
            itemTally: 0,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [

            ],
            voteCount: 0,
            title: 'test',
            text: 'test',
            tags: [
              '.htaccess'
            ],
            lastActivityDate: '2015-08-02T19:23:38.038Z',
            creationDate: '2015-08-02T19:23:38.038Z',
            id: 'b8497318-21d1-4ce2-9e40-4c4846e28930',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            }
          }
        },
        {
          index: 3,
          uri: '/questions/fad160b3-b39d-43ea-8370-c1a80aed0d0a.json',
          path: 'fn:doc("/questions/fad160b3-b39d-43ea-8370-c1a80aed0d0a.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2Ffad160b3-b39d-43ea-8370-c1a80aed0d0a.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            answerCount: 0,
            itemTally: 0,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [

            ],
            voteCount: 0,
            title: 'test',
            text: 'test',
            tags: [
              '.htaccess'
            ],
            lastActivityDate: '2015-08-02T19:15:04.469Z',
            creationDate: '2015-08-02T19:15:04.469Z',
            id: 'fad160b3-b39d-43ea-8370-c1a80aed0d0a',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            }
          }
        },
        {
          index: 4,
          uri: '/questions/8941180e-d6fe-41bb-bd8a-1cbb4647a416.json',
          path: 'fn:doc("/questions/8941180e-d6fe-41bb-bd8a-1cbb4647a416.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2F8941180e-d6fe-41bb-bd8a-1cbb4647a416.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            answerCount: 0,
            itemTally: 0,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [

            ],
            voteCount: 0,
            title: 'test',
            text: 'test',
            tags: [
              '.htaccess'
            ],
            lastActivityDate: '2015-08-02T19:14:14.225Z',
            creationDate: '2015-08-02T19:14:14.225Z',
            id: '8941180e-d6fe-41bb-bd8a-1cbb4647a416',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            }
          }
        },
        {
          index: 5,
          uri: '/questions/99753e7e-fbeb-435b-af58-2f4630181f0f.json',
          path: 'fn:doc("/questions/99753e7e-fbeb-435b-af58-2f4630181f0f.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2F99753e7e-fbeb-435b-af58-2f4630181f0f.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            answerCount: 0,
            itemTally: 0,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [

            ],
            voteCount: 0,
            title: 'test',
            text: 'test',
            tags: [
              '.htaccess'
            ],
            lastActivityDate: '2015-08-02T19:06:16.451Z',
            creationDate: '2015-08-02T19:06:16.451Z',
            id: '99753e7e-fbeb-435b-af58-2f4630181f0f',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            }
          }
        },
        {
          index: 6,
          uri: '/questions/d541761f-790b-4ce6-8923-580d62f946f1.json',
          path: 'fn:doc("/questions/d541761f-790b-4ce6-8923-580d62f946f1.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2Fd541761f-790b-4ce6-8923-580d62f946f1.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: true,
            acceptedAnswerId: '3b003576-da9c-496b-8b35-fda663da2cd9',
            answerCount: 1,
            creationDate: '2015-07-15T14:42:50.608-0700',
            id: 'd541761f-790b-4ce6-8923-580d62f946f1',
            itemTally: 1,
            lastActivityDate: '2015-08-01T09:00:48.560Z',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            },
            tags: [

            ],
            text: '**test**',
            title: 'mine only test',
            voteCount: 2,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 7,
          uri: '/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json',
          path: 'fn:doc("/questions/5dce8909-0972-4289-93cd-f2e8790a17fc.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2F5dce8909-0972-4289-93cd-f2e8790a17fc.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            creationDate: '2014-10-01T08:59:08.866Z',
            id: '5dce8909-0972-4289-93cd-f2e8790a17fc',
            itemTally: 0,
            lastActivityDate: '2015-07-30T02:37:54.574Z',
            owner: {
              id: '9611450a-0663-45a5-8a08-f1c71320475e',
              reputation: 104,
              userName: 'mary@example.com',
              displayName: 'MaryAdmin'
            },
            tags: [
              'python',
              'seed-data'
            ],
            text: 'I, Mary, had a question about the word balsamic and the number 1',
            title: 'Mary\'s Question Number 1',
            voteCount: 4,
            answerCount: 3,
            upvotingContributorIds: [

            ],
            downvotingContributorIds: [

            ]
          }
        },
        {
          index: 8,
          uri: '/questions/8d21be06-8013-4639-bb7e-5db00222196a.json',
          path: 'fn:doc("/questions/8d21be06-8013-4639-bb7e-5db00222196a.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2F8d21be06-8013-4639-bb7e-5db00222196a.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            answerCount: 0,
            itemTally: 1,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ],
            voteCount: 1,
            title: 'title of the question 333',
            lastActivityDate: '2015-07-29T22:14:13.464Z',
            creationDate: '2015-07-29T22:14:13.464Z',
            id: '8d21be06-8013-4639-bb7e-5db00222196a',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            }
          }
        },
        {
          index: 9,
          uri: '/questions/c3d5e7c0-82a1-4aaf-8d32-eac23041f413.json',
          path: 'fn:doc("/questions/c3d5e7c0-82a1-4aaf-8d32-eac23041f413.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2Fc3d5e7c0-82a1-4aaf-8d32-eac23041f413.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            answerCount: 0,
            itemTally: 1,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ],
            voteCount: 1,
            title: 'title of the question',
            lastActivityDate: '2015-07-29T22:14:03.020Z',
            creationDate: '2015-07-29T22:14:03.020Z',
            id: 'c3d5e7c0-82a1-4aaf-8d32-eac23041f413',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            }
          }
        },
        {
          index: 10,
          uri: '/questions/be218ee8-ebaa-4564-a0e5-1a19f06ab8e6.json',
          path: 'fn:doc("/questions/be218ee8-ebaa-4564-a0e5-1a19f06ab8e6.json")',
          score: 2048,
          confidence: 0.07650452,
          fitness: 0.5995002,
          href: '/v1/documents?uri=%2Fquestions%2Fbe218ee8-ebaa-4564-a0e5-1a19f06ab8e6.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            accepted: false,
            acceptedAnswerId: null,
            answerCount: 0,
            itemTally: 1,
            upvotingContributorIds: [
              'cf99542d-f024-4478-a6dc-7e723a51b040'
            ],
            downvotingContributorIds: [

            ],
            voteCount: 1,
            lastActivityDate: '2015-07-29T22:13:46.247Z',
            creationDate: '2015-07-29T22:13:46.247Z',
            id: 'be218ee8-ebaa-4564-a0e5-1a19f06ab8e6',
            owner: {
              id: 'cf99542d-f024-4478-a6dc-7e723a51b040',
              reputation: 59,
              userName: 'joe@example.com',
              displayName: 'JoeUser'
            }
          }
        }
      ],
      facets: {
        date: {
          type: 'bucketed',
          facetValues: [
            {
              name: '2009-06-01T00:00:00-07:00',
              count: 3,
              value: '2009-06-01T00:00:00-07:00'
            },
            {
              name: '2009-07-01T00:00:00-07:00',
              count: 2,
              value: '2009-07-01T00:00:00-07:00'
            },
            {
              name: '2009-08-01T00:00:00-07:00',
              count: 6,
              value: '2009-08-01T00:00:00-07:00'
            },
            {
              name: '2009-09-01T00:00:00-07:00',
              count: 3,
              value: '2009-09-01T00:00:00-07:00'
            },
            {
              name: '2009-10-01T00:00:00-07:00',
              count: 2,
              value: '2009-10-01T00:00:00-07:00'
            },
            {
              name: '2009-11-01T00:00:00-07:00',
              count: 4,
              value: '2009-11-01T00:00:00-07:00'
            },
            {
              name: '2009-12-01T00:00:00-08:00',
              count: 4,
              value: '2009-12-01T00:00:00-08:00'
            },
            {
              name: '2010-01-01T00:00:00-08:00',
              count: 5,
              value: '2010-01-01T00:00:00-08:00'
            },
            {
              name: '2010-02-01T00:00:00-08:00',
              count: 13,
              value: '2010-02-01T00:00:00-08:00'
            },
            {
              name: '2010-03-01T00:00:00-08:00',
              count: 8,
              value: '2010-03-01T00:00:00-08:00'
            },
            {
              name: '2010-04-01T00:00:00-07:00',
              count: 13,
              value: '2010-04-01T00:00:00-07:00'
            },
            {
              name: '2010-05-01T00:00:00-07:00',
              count: 7,
              value: '2010-05-01T00:00:00-07:00'
            },
            {
              name: '2010-06-01T00:00:00-07:00',
              count: 12,
              value: '2010-06-01T00:00:00-07:00'
            },
            {
              name: '2010-07-01T00:00:00-07:00',
              count: 10,
              value: '2010-07-01T00:00:00-07:00'
            },
            {
              name: '2010-08-01T00:00:00-07:00',
              count: 11,
              value: '2010-08-01T00:00:00-07:00'
            },
            {
              name: '2010-09-01T00:00:00-07:00',
              count: 16,
              value: '2010-09-01T00:00:00-07:00'
            },
            {
              name: '2010-10-01T00:00:00-07:00',
              count: 20,
              value: '2010-10-01T00:00:00-07:00'
            },
            {
              name: '2010-11-01T00:00:00-07:00',
              count: 16,
              value: '2010-11-01T00:00:00-07:00'
            },
            {
              name: '2010-12-01T00:00:00-08:00',
              count: 22,
              value: '2010-12-01T00:00:00-08:00'
            },
            {
              name: '2011-01-01T00:00:00-08:00',
              count: 19,
              value: '2011-01-01T00:00:00-08:00'
            },
            {
              name: '2011-02-01T00:00:00-08:00',
              count: 24,
              value: '2011-02-01T00:00:00-08:00'
            },
            {
              name: '2011-03-01T00:00:00-08:00',
              count: 21,
              value: '2011-03-01T00:00:00-08:00'
            },
            {
              name: '2011-04-01T00:00:00-07:00',
              count: 21,
              value: '2011-04-01T00:00:00-07:00'
            },
            {
              name: '2011-05-01T00:00:00-07:00',
              count: 36,
              value: '2011-05-01T00:00:00-07:00'
            },
            {
              name: '2011-06-01T00:00:00-07:00',
              count: 28,
              value: '2011-06-01T00:00:00-07:00'
            },
            {
              name: '2011-07-01T00:00:00-07:00',
              count: 38,
              value: '2011-07-01T00:00:00-07:00'
            },
            {
              name: '2011-08-01T00:00:00-07:00',
              count: 37,
              value: '2011-08-01T00:00:00-07:00'
            },
            {
              name: '2011-09-01T00:00:00-07:00',
              count: 28,
              value: '2011-09-01T00:00:00-07:00'
            },
            {
              name: '2011-10-01T00:00:00-07:00',
              count: 31,
              value: '2011-10-01T00:00:00-07:00'
            },
            {
              name: '2011-11-01T00:00:00-07:00',
              count: 48,
              value: '2011-11-01T00:00:00-07:00'
            },
            {
              name: '2011-12-01T00:00:00-08:00',
              count: 46,
              value: '2011-12-01T00:00:00-08:00'
            },
            {
              name: '2012-01-01T00:00:00-08:00',
              count: 35,
              value: '2012-01-01T00:00:00-08:00'
            },
            {
              name: '2012-02-01T00:00:00-08:00',
              count: 49,
              value: '2012-02-01T00:00:00-08:00'
            },
            {
              name: '2012-03-01T00:00:00-08:00',
              count: 51,
              value: '2012-03-01T00:00:00-08:00'
            },
            {
              name: '2012-04-01T00:00:00-07:00',
              count: 47,
              value: '2012-04-01T00:00:00-07:00'
            },
            {
              name: '2012-05-01T00:00:00-07:00',
              count: 61,
              value: '2012-05-01T00:00:00-07:00'
            },
            {
              name: '2012-06-01T00:00:00-07:00',
              count: 52,
              value: '2012-06-01T00:00:00-07:00'
            },
            {
              name: '2012-07-01T00:00:00-07:00',
              count: 63,
              value: '2012-07-01T00:00:00-07:00'
            },
            {
              name: '2012-08-01T00:00:00-07:00',
              count: 80,
              value: '2012-08-01T00:00:00-07:00'
            },
            {
              name: '2012-09-01T00:00:00-07:00',
              count: 60,
              value: '2012-09-01T00:00:00-07:00'
            },
            {
              name: '2012-10-01T00:00:00-07:00',
              count: 64,
              value: '2012-10-01T00:00:00-07:00'
            },
            {
              name: '2012-11-01T00:00:00-07:00',
              count: 63,
              value: '2012-11-01T00:00:00-07:00'
            },
            {
              name: '2012-12-01T00:00:00-08:00',
              count: 54,
              value: '2012-12-01T00:00:00-08:00'
            },
            {
              name: '2013-01-01T00:00:00-08:00',
              count: 66,
              value: '2013-01-01T00:00:00-08:00'
            },
            {
              name: '2013-02-01T00:00:00-08:00',
              count: 53,
              value: '2013-02-01T00:00:00-08:00'
            },
            {
              name: '2013-03-01T00:00:00-08:00',
              count: 70,
              value: '2013-03-01T00:00:00-08:00'
            },
            {
              name: '2013-04-01T00:00:00-07:00',
              count: 88,
              value: '2013-04-01T00:00:00-07:00'
            },
            {
              name: '2013-05-01T00:00:00-07:00',
              count: 104,
              value: '2013-05-01T00:00:00-07:00'
            },
            {
              name: '2013-06-01T00:00:00-07:00',
              count: 73,
              value: '2013-06-01T00:00:00-07:00'
            },
            {
              name: '2013-07-01T00:00:00-07:00',
              count: 85,
              value: '2013-07-01T00:00:00-07:00'
            },
            {
              name: '2013-08-01T00:00:00-07:00',
              count: 87,
              value: '2013-08-01T00:00:00-07:00'
            },
            {
              name: '2013-09-01T00:00:00-07:00',
              count: 60,
              value: '2013-09-01T00:00:00-07:00'
            },
            {
              name: '2013-10-01T00:00:00-07:00',
              count: 90,
              value: '2013-10-01T00:00:00-07:00'
            },
            {
              name: '2013-11-01T00:00:00-07:00',
              count: 78,
              value: '2013-11-01T00:00:00-07:00'
            },
            {
              name: '2013-12-01T00:00:00-08:00',
              count: 87,
              value: '2013-12-01T00:00:00-08:00'
            },
            {
              name: '2014-01-01T00:00:00-08:00',
              count: 112,
              value: '2014-01-01T00:00:00-08:00'
            },
            {
              name: '2014-02-01T00:00:00-08:00',
              count: 89,
              value: '2014-02-01T00:00:00-08:00'
            },
            {
              name: '2014-03-01T00:00:00-08:00',
              count: 116,
              value: '2014-03-01T00:00:00-08:00'
            },
            {
              name: '2014-04-01T00:00:00-07:00',
              count: 83,
              value: '2014-04-01T00:00:00-07:00'
            },
            {
              name: '2014-05-01T00:00:00-07:00',
              count: 105,
              value: '2014-05-01T00:00:00-07:00'
            },
            {
              name: '2014-06-01T00:00:00-07:00',
              count: 84,
              value: '2014-06-01T00:00:00-07:00'
            },
            {
              name: '2014-07-01T00:00:00-07:00',
              count: 68,
              value: '2014-07-01T00:00:00-07:00'
            },
            {
              name: '2014-08-01T00:00:00-07:00',
              count: 93,
              value: '2014-08-01T00:00:00-07:00'
            },
            {
              name: '2014-09-01T00:00:00-07:00',
              count: 53,
              value: '2014-09-01T00:00:00-07:00'
            },
            {
              name: '2014-10-01T00:00:00-07:00',
              count: 6,
              value: '2014-10-01T00:00:00-07:00'
            },
            {
              name: '2015-07-01T00:00:00-07:00',
              count: 12,
              value: '2015-07-01T00:00:00-07:00'
            },
            {
              name: '2015-08-01T00:00:00-07:00',
              count: 6,
              value: '2015-08-01T00:00:00-07:00'
            }
          ]
        },
        tag: {
          type: 'xs:string',
          facetValues: [
            {
              name: 'javascript',
              count: 1557,
              value: 'javascript'
            },
            {
              name: 'jquery',
              count: 987,
              value: 'jquery'
            },
            {
              name: 'marklogic',
              count: 487,
              value: 'marklogic'
            },
            {
              name: 'html',
              count: 372,
              value: 'html'
            },
            {
              name: 'xquery',
              count: 267,
              value: 'xquery'
            },
            {
              name: 'php',
              count: 254,
              value: 'php'
            },
            {
              name: 'ajax',
              count: 158,
              value: 'ajax'
            },
            {
              name: 'xml',
              count: 151,
              value: 'xml'
            },
            {
              name: 'json',
              count: 142,
              value: 'json'
            },
            {
              name: 'css',
              count: 134,
              value: 'css'
            }
          ]
        }
      },
      query: {
        'and-query': [
          {
            'directory-query': [
              {
                uri: '/questions/'
              }
            ],
            annotation: [
              {
                'operator-ref': 'sort',
                'state-ref': 'active'
              }
            ]
          }
        ]
      },
      qtext: 'sort:active',
      report: '(cts:search(fn:collection(), cts:and-query((cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:index-order(cts:json-property-reference("lastActivityDate",("type=dateTime")), "descending")), 1))[1 to 10]',
      metrics: {
        'query-resolution-time': 'PT0.051085S',
        'facet-resolution-time': 'PT0.091582S',
        'snippet-resolution-time': 'PT0.030461S',
        'total-time': 'PT1.770279S'
      }
    }
  },
  'searchAccDateRange': {
    spec: {
      search: {
        qtext: [
          'acc',
          'sort:relevance'
        ],
        start: 1,
        query: {
          'and-query': {
            queries: [
              {
                'range-constraint-query': {
                  'constraint-name': 'lastActivity',
                  value: '2012-05-01T07:00:00.000Z',
                  'range-operator': 'GE'
                }
              },
              {
                'range-constraint-query': {
                  'constraint-name': 'lastActivity',
                  value: '2013-12-01T08:00:00.000Z',
                  'range-operator': 'LT'
                }
              }
            ]
          }
        },
        timezone: 'America/Los_Angeles'
      },
      shadow: undefined
    },
    docsQuery: {
      search: {
        qtext: [
          'acc',
          'sort:relevance'
        ],
        query: {
          'and-query': {
            queries: [
              {
                'range-constraint-query': {
                  'constraint-name': 'lastActivity',
                  value: '2012-05-01T07:00:00.000Z',
                  'range-operator': 'GE'
                }
              },
              {
                'range-constraint-query': {
                  'constraint-name': 'lastActivity',
                  value: '2013-12-01T08:00:00.000Z',
                  'range-operator': 'LT'
                }
              },
              {
                'directory-query': {
                  uri: [
                    '/questions/'
                  ]
                }
              }
            ]
          }
        },
        timezone: 'America/Los_Angeles',
        options: {
          constraint: [
            {
              name: 'date',
              range: {
                facet: true,
                'json-property': 'lastActivityDate',
                type: 'xs:dateTime',
                bucket: [
                  {
                    ge: '2009-05-01T00:00:00-07:00',
                    lt: '2009-06-01T00:00:00-07:00',
                    name: '2009-05-01T00:00:00-07:00',
                    label: '2009-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-06-01T00:00:00-07:00',
                    lt: '2009-07-01T00:00:00-07:00',
                    name: '2009-06-01T00:00:00-07:00',
                    label: '2009-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-07-01T00:00:00-07:00',
                    lt: '2009-08-01T00:00:00-07:00',
                    name: '2009-07-01T00:00:00-07:00',
                    label: '2009-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-08-01T00:00:00-07:00',
                    lt: '2009-09-01T00:00:00-07:00',
                    name: '2009-08-01T00:00:00-07:00',
                    label: '2009-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-09-01T00:00:00-07:00',
                    lt: '2009-10-01T00:00:00-07:00',
                    name: '2009-09-01T00:00:00-07:00',
                    label: '2009-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-10-01T00:00:00-07:00',
                    lt: '2009-11-01T00:00:00-07:00',
                    name: '2009-10-01T00:00:00-07:00',
                    label: '2009-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-11-01T00:00:00-07:00',
                    lt: '2009-12-01T00:00:00-08:00',
                    name: '2009-11-01T00:00:00-07:00',
                    label: '2009-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-12-01T00:00:00-08:00',
                    lt: '2010-01-01T00:00:00-08:00',
                    name: '2009-12-01T00:00:00-08:00',
                    label: '2009-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-01-01T00:00:00-08:00',
                    lt: '2010-02-01T00:00:00-08:00',
                    name: '2010-01-01T00:00:00-08:00',
                    label: '2010-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-02-01T00:00:00-08:00',
                    lt: '2010-03-01T00:00:00-08:00',
                    name: '2010-02-01T00:00:00-08:00',
                    label: '2010-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-03-01T00:00:00-08:00',
                    lt: '2010-04-01T00:00:00-07:00',
                    name: '2010-03-01T00:00:00-08:00',
                    label: '2010-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-04-01T00:00:00-07:00',
                    lt: '2010-05-01T00:00:00-07:00',
                    name: '2010-04-01T00:00:00-07:00',
                    label: '2010-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-05-01T00:00:00-07:00',
                    lt: '2010-06-01T00:00:00-07:00',
                    name: '2010-05-01T00:00:00-07:00',
                    label: '2010-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-06-01T00:00:00-07:00',
                    lt: '2010-07-01T00:00:00-07:00',
                    name: '2010-06-01T00:00:00-07:00',
                    label: '2010-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-07-01T00:00:00-07:00',
                    lt: '2010-08-01T00:00:00-07:00',
                    name: '2010-07-01T00:00:00-07:00',
                    label: '2010-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-08-01T00:00:00-07:00',
                    lt: '2010-09-01T00:00:00-07:00',
                    name: '2010-08-01T00:00:00-07:00',
                    label: '2010-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-09-01T00:00:00-07:00',
                    lt: '2010-10-01T00:00:00-07:00',
                    name: '2010-09-01T00:00:00-07:00',
                    label: '2010-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-10-01T00:00:00-07:00',
                    lt: '2010-11-01T00:00:00-07:00',
                    name: '2010-10-01T00:00:00-07:00',
                    label: '2010-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-11-01T00:00:00-07:00',
                    lt: '2010-12-01T00:00:00-08:00',
                    name: '2010-11-01T00:00:00-07:00',
                    label: '2010-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-12-01T00:00:00-08:00',
                    lt: '2011-01-01T00:00:00-08:00',
                    name: '2010-12-01T00:00:00-08:00',
                    label: '2010-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-01-01T00:00:00-08:00',
                    lt: '2011-02-01T00:00:00-08:00',
                    name: '2011-01-01T00:00:00-08:00',
                    label: '2011-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-02-01T00:00:00-08:00',
                    lt: '2011-03-01T00:00:00-08:00',
                    name: '2011-02-01T00:00:00-08:00',
                    label: '2011-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-03-01T00:00:00-08:00',
                    lt: '2011-04-01T00:00:00-07:00',
                    name: '2011-03-01T00:00:00-08:00',
                    label: '2011-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-04-01T00:00:00-07:00',
                    lt: '2011-05-01T00:00:00-07:00',
                    name: '2011-04-01T00:00:00-07:00',
                    label: '2011-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-05-01T00:00:00-07:00',
                    lt: '2011-06-01T00:00:00-07:00',
                    name: '2011-05-01T00:00:00-07:00',
                    label: '2011-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-06-01T00:00:00-07:00',
                    lt: '2011-07-01T00:00:00-07:00',
                    name: '2011-06-01T00:00:00-07:00',
                    label: '2011-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-07-01T00:00:00-07:00',
                    lt: '2011-08-01T00:00:00-07:00',
                    name: '2011-07-01T00:00:00-07:00',
                    label: '2011-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-08-01T00:00:00-07:00',
                    lt: '2011-09-01T00:00:00-07:00',
                    name: '2011-08-01T00:00:00-07:00',
                    label: '2011-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-09-01T00:00:00-07:00',
                    lt: '2011-10-01T00:00:00-07:00',
                    name: '2011-09-01T00:00:00-07:00',
                    label: '2011-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-10-01T00:00:00-07:00',
                    lt: '2011-11-01T00:00:00-07:00',
                    name: '2011-10-01T00:00:00-07:00',
                    label: '2011-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-11-01T00:00:00-07:00',
                    lt: '2011-12-01T00:00:00-08:00',
                    name: '2011-11-01T00:00:00-07:00',
                    label: '2011-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-12-01T00:00:00-08:00',
                    lt: '2012-01-01T00:00:00-08:00',
                    name: '2011-12-01T00:00:00-08:00',
                    label: '2011-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-01-01T00:00:00-08:00',
                    lt: '2012-02-01T00:00:00-08:00',
                    name: '2012-01-01T00:00:00-08:00',
                    label: '2012-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-02-01T00:00:00-08:00',
                    lt: '2012-03-01T00:00:00-08:00',
                    name: '2012-02-01T00:00:00-08:00',
                    label: '2012-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-03-01T00:00:00-08:00',
                    lt: '2012-04-01T00:00:00-07:00',
                    name: '2012-03-01T00:00:00-08:00',
                    label: '2012-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-04-01T00:00:00-07:00',
                    lt: '2012-05-01T00:00:00-07:00',
                    name: '2012-04-01T00:00:00-07:00',
                    label: '2012-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-05-01T00:00:00-07:00',
                    lt: '2012-06-01T00:00:00-07:00',
                    name: '2012-05-01T00:00:00-07:00',
                    label: '2012-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-06-01T00:00:00-07:00',
                    lt: '2012-07-01T00:00:00-07:00',
                    name: '2012-06-01T00:00:00-07:00',
                    label: '2012-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-07-01T00:00:00-07:00',
                    lt: '2012-08-01T00:00:00-07:00',
                    name: '2012-07-01T00:00:00-07:00',
                    label: '2012-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-08-01T00:00:00-07:00',
                    lt: '2012-09-01T00:00:00-07:00',
                    name: '2012-08-01T00:00:00-07:00',
                    label: '2012-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-09-01T00:00:00-07:00',
                    lt: '2012-10-01T00:00:00-07:00',
                    name: '2012-09-01T00:00:00-07:00',
                    label: '2012-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-10-01T00:00:00-07:00',
                    lt: '2012-11-01T00:00:00-07:00',
                    name: '2012-10-01T00:00:00-07:00',
                    label: '2012-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-11-01T00:00:00-07:00',
                    lt: '2012-12-01T00:00:00-08:00',
                    name: '2012-11-01T00:00:00-07:00',
                    label: '2012-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-12-01T00:00:00-08:00',
                    lt: '2013-01-01T00:00:00-08:00',
                    name: '2012-12-01T00:00:00-08:00',
                    label: '2012-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-01-01T00:00:00-08:00',
                    lt: '2013-02-01T00:00:00-08:00',
                    name: '2013-01-01T00:00:00-08:00',
                    label: '2013-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-02-01T00:00:00-08:00',
                    lt: '2013-03-01T00:00:00-08:00',
                    name: '2013-02-01T00:00:00-08:00',
                    label: '2013-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-03-01T00:00:00-08:00',
                    lt: '2013-04-01T00:00:00-07:00',
                    name: '2013-03-01T00:00:00-08:00',
                    label: '2013-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-04-01T00:00:00-07:00',
                    lt: '2013-05-01T00:00:00-07:00',
                    name: '2013-04-01T00:00:00-07:00',
                    label: '2013-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-05-01T00:00:00-07:00',
                    lt: '2013-06-01T00:00:00-07:00',
                    name: '2013-05-01T00:00:00-07:00',
                    label: '2013-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-06-01T00:00:00-07:00',
                    lt: '2013-07-01T00:00:00-07:00',
                    name: '2013-06-01T00:00:00-07:00',
                    label: '2013-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-07-01T00:00:00-07:00',
                    lt: '2013-08-01T00:00:00-07:00',
                    name: '2013-07-01T00:00:00-07:00',
                    label: '2013-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-08-01T00:00:00-07:00',
                    lt: '2013-09-01T00:00:00-07:00',
                    name: '2013-08-01T00:00:00-07:00',
                    label: '2013-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-09-01T00:00:00-07:00',
                    lt: '2013-10-01T00:00:00-07:00',
                    name: '2013-09-01T00:00:00-07:00',
                    label: '2013-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-10-01T00:00:00-07:00',
                    lt: '2013-11-01T00:00:00-07:00',
                    name: '2013-10-01T00:00:00-07:00',
                    label: '2013-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-11-01T00:00:00-07:00',
                    lt: '2013-12-01T00:00:00-08:00',
                    name: '2013-11-01T00:00:00-07:00',
                    label: '2013-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-12-01T00:00:00-08:00',
                    lt: '2014-01-01T00:00:00-08:00',
                    name: '2013-12-01T00:00:00-08:00',
                    label: '2013-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-01-01T00:00:00-08:00',
                    lt: '2014-02-01T00:00:00-08:00',
                    name: '2014-01-01T00:00:00-08:00',
                    label: '2014-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-02-01T00:00:00-08:00',
                    lt: '2014-03-01T00:00:00-08:00',
                    name: '2014-02-01T00:00:00-08:00',
                    label: '2014-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-03-01T00:00:00-08:00',
                    lt: '2014-04-01T00:00:00-07:00',
                    name: '2014-03-01T00:00:00-08:00',
                    label: '2014-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-04-01T00:00:00-07:00',
                    lt: '2014-05-01T00:00:00-07:00',
                    name: '2014-04-01T00:00:00-07:00',
                    label: '2014-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-05-01T00:00:00-07:00',
                    lt: '2014-06-01T00:00:00-07:00',
                    name: '2014-05-01T00:00:00-07:00',
                    label: '2014-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-06-01T00:00:00-07:00',
                    lt: '2014-07-01T00:00:00-07:00',
                    name: '2014-06-01T00:00:00-07:00',
                    label: '2014-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-07-01T00:00:00-07:00',
                    lt: '2014-08-01T00:00:00-07:00',
                    name: '2014-07-01T00:00:00-07:00',
                    label: '2014-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-08-01T00:00:00-07:00',
                    lt: '2014-09-01T00:00:00-07:00',
                    name: '2014-08-01T00:00:00-07:00',
                    label: '2014-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-09-01T00:00:00-07:00',
                    lt: '2014-10-01T00:00:00-07:00',
                    name: '2014-09-01T00:00:00-07:00',
                    label: '2014-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-10-01T00:00:00-07:00',
                    lt: '2014-11-01T00:00:00-07:00',
                    name: '2014-10-01T00:00:00-07:00',
                    label: '2014-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-11-01T00:00:00-07:00',
                    lt: '2014-12-01T00:00:00-08:00',
                    name: '2014-11-01T00:00:00-07:00',
                    label: '2014-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-12-01T00:00:00-08:00',
                    lt: '2015-01-01T00:00:00-08:00',
                    name: '2014-12-01T00:00:00-08:00',
                    label: '2014-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-01-01T00:00:00-08:00',
                    lt: '2015-02-01T00:00:00-08:00',
                    name: '2015-01-01T00:00:00-08:00',
                    label: '2015-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-02-01T00:00:00-08:00',
                    lt: '2015-03-01T00:00:00-08:00',
                    name: '2015-02-01T00:00:00-08:00',
                    label: '2015-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-03-01T00:00:00-08:00',
                    lt: '2015-04-01T00:00:00-07:00',
                    name: '2015-03-01T00:00:00-08:00',
                    label: '2015-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-04-01T00:00:00-07:00',
                    lt: '2015-05-01T00:00:00-07:00',
                    name: '2015-04-01T00:00:00-07:00',
                    label: '2015-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-05-01T00:00:00-07:00',
                    lt: '2015-06-01T00:00:00-07:00',
                    name: '2015-05-01T00:00:00-07:00',
                    label: '2015-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-06-01T00:00:00-07:00',
                    lt: '2015-07-01T00:00:00-07:00',
                    name: '2015-06-01T00:00:00-07:00',
                    label: '2015-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-07-01T00:00:00-07:00',
                    lt: '2015-08-01T00:00:00-07:00',
                    name: '2015-07-01T00:00:00-07:00',
                    label: '2015-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-08-01T00:00:00-07:00',
                    lt: '2015-09-01T00:00:00-07:00',
                    name: '2015-08-01T00:00:00-07:00',
                    label: '2015-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-09-01T00:00:00-07:00',
                    lt: '2015-10-01T00:00:00-07:00',
                    name: '2015-09-01T00:00:00-07:00',
                    label: '2015-09-01T00:00:00-07:00'
                  }
                ]
              }
            }
          ]
        }
      },
      shadow: undefined,
      pageStart: 1,
      pageLength: 10,
      optionsName: 'questions',
      transform: 'search-response',
      view: 'all'
    },
    docsQueryResult: [
      {
        'snippet-format': 'snippet',
        total: 2,
        start: 1,
        'page-length': 10,
        results: [
          {
            index: 1,
            uri: '/questions/soq7538483.json',
            path: 'fn:doc("/questions/soq7538483.json")',
            score: 82944,
            confidence: 0.4868718,
            fitness: 0.7482695,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq7538483.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                'match-text': [
                  '...[].reduce.call(elements, function (',
                  {
                    highlight: 'acc'
                  },
                  ', e) {\n\t    return e.className... ...reduce(unique, ',
                  {
                    highlight: 'acc'
                  },
                  ');...'
                ],
                source: 'answer',
                id: 'soa7540783'
              }
            ]
          },
          {
            index: 2,
            uri: '/questions/soq14433212.json',
            path: 'fn:doc("/questions/soq14433212.json")',
            score: 58368,
            confidence: 0.4084224,
            fitness: 0.6277012,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq14433212.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                'match-text': [
                  '...url: \'https://tt.s2.',
                  {
                    highlight: 'acc'
                  },
                  '.com/ttm/subscribe-service/uid=sagar...'
                ],
                source: 'answer',
                id: 'soa14436840'
              }
            ]
          }
        ],
        facets: {
          date: {
            type: 'bucketed',
            facetValues: [
              {
                name: '2013-01-01T00:00:00-08:00',
                count: 1,
                value: '2013-01-01T00:00:00-08:00'
              },
              {
                name: '2013-07-01T00:00:00-07:00',
                count: 1,
                value: '2013-07-01T00:00:00-07:00'
              }
            ]
          },
          tag: {
            type: 'xs:string',
            facetValues: [
              {
                name: 'html',
                count: 2,
                value: 'html'
              },
              {
                name: 'css',
                count: 1,
                value: 'css'
              },
              {
                name: 'javascript',
                count: 1,
                value: 'javascript'
              },
              {
                name: 'jquery',
                count: 1,
                value: 'jquery'
              }
            ]
          }
        },
        query: {
          'and-query': [
            {
              'field-word-query': [
                {
                  field: 'default-samplestack-search',
                  text: {
                    lang: 'en',
                    _value: 'acc'
                  }
                }
              ],
              'json-property-range-query': {
                operator: '<',
                property: 'lastActivityDate',
                value: [
                  {
                    type: 'xs:dateTime',
                    _value: '2013-12-01T08:00:00Z'
                  }
                ]
              },
              'directory-query': [
                {
                  uri: '/questions/'
                }
              ],
              annotation: [
                {
                  'operator-ref': 'sort',
                  'state-ref': 'relevance'
                }
              ]
            }
          ]
        },
        qtext: 'sort:relevance',
        report: '(cts:search(fn:collection(), cts:and-query((cts:field-word-query("default-samplestack-search", "acc", ("lang=en"), 1), cts:json-property-range-query("lastActivityDate", ">=", xs:dateTime("2012-05-01T07:00:00Z"), (), 1), cts:json-property-range-query("lastActivityDate", "<", xs:dateTime("2013-12-01T08:00:00Z"), (), 1), cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:score-order("descending")), 1))[1 to 10]',
        metrics: {
          'query-resolution-time': 'PT0.039281S',
          'facet-resolution-time': 'PT0.047231S',
          'snippet-resolution-time': 'PT0.015926S',
          'total-time': 'PT0.383504S'
        }
      },
      {
        uri: '/questions/soq7538483.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '699',
        content: {
          tags: [
            'html',
            'css'
          ],
          originalId: '7538483',
          owner: {
            id: 'sou130452',
            reputation: 874,
            originalId: '130452',
            userName: 'souser130452@example.com',
            displayName: 'KuldipMCA'
          },
          lastActivityDate: '2013-07-31T15:06:21.333Z',
          id: 'soq7538483',
          answerCount: 3,
          voteCount: 15,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I need list of classes used in an html file. Is there any tool where i can get list of classes in the HTML file?',
          creationDate: '2011-09-24T10:38:08.450Z',
          itemTally: 6,
          upvotingContributorIds: [
            'unknown',
            'unknown',
            'unknown',
            'unknown',
            'unknown',
            'unknown'
          ],
          title: 'How to get list of Css class use in the HTML file?',
          acceptedAnswerId: 'soa7540783'
        }
      },
      {
        uri: '/questions/soq14433212.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '1574',
        content: {
          tags: [
            'javascript',
            'jquery',
            'html'
          ],
          originalId: '14433212',
          owner: {
            id: 'sou1687825',
            reputation: 183,
            originalId: '1687825',
            userName: 'souser1687825@example.com',
            displayName: 'Rishi'
          },
          lastActivityDate: '2013-01-21T10:39:49.000Z',
          id: 'soq14433212',
          answerCount: 2,
          voteCount: 9,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I have a url which gives json data...\n\nI want to hit that URL from javascript but I am getting this error :\n\ncharacter encoding of the plain text document was not declared. The document will render with garbled text in some browser configurations if the document contains characters from outside the US-ASCII range. The character encoding of the file needs to be declared in the transfer protocol or file needs to use a byte order mark as an encoding signature\n\nCode :\n\n\tfunction ' +
                'a(){\n\t$.getJSON(url,function (data) { alert(data);});\n\t}\n\t\n\nfull code :\n\n\t<html lang="en">\n\t<head>\n\t<meta http-equiv="Content-Type" content="text/html;charset=utf-8" ></meta>\n\t<script language="JavaScript" type="text/javascript" src="jquery-1.7.1.min.js"></script>\n\t<script>\n\t\n\tfunction a(){\n\t$.getJSON(url,function (data) { alert(data);});\n\t}\n\t</script>\n\t</head>\n\t<body>\n\t<input type="text"/>\n\t<input type="submit" value="search" onclick="a()"/>\n\t</body>\n\t</html>\n\t',
          creationDate: '2013-01-21T06:13:31.083Z',
          itemTally: 3,
          upvotingContributorIds: [
            'unknown',
            'unknown',
            'unknown'
          ],
          title: 'how to call REST API from javascript',
          acceptedAnswerId: 'soa14433462'
        }
      }
    ],
    ret: {
      'snippet-format': 'snippet',
      total: 2,
      start: 1,
      'page-length': 10,
      results: [
        {
          index: 1,
          uri: '/questions/soq7538483.json',
          path: 'fn:doc("/questions/soq7538483.json")',
          score: 82944,
          confidence: 0.4868718,
          fitness: 0.7482695,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq7538483.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'html',
              'css'
            ],
            originalId: '7538483',
            owner: {
              id: 'sou130452',
              reputation: 874,
              originalId: '130452',
              userName: 'souser130452@example.com',
              displayName: 'KuldipMCA'
            },
            lastActivityDate: '2013-07-31T15:06:21.333Z',
            id: 'soq7538483',
            answerCount: 3,
            voteCount: 15,
            accepted: true,
            downvotingContributorIds: [

            ],
            creationDate: '2011-09-24T10:38:08.450Z',
            itemTally: 6,
            upvotingContributorIds: [
              'unknown',
              'unknown',
              'unknown',
              'unknown',
              'unknown',
              'unknown'
            ],
            title: 'How to get list of Css class use in the HTML file?',
            acceptedAnswerId: 'soa7540783',
            snippets: [
              {
                'match-text': [
                  '...[].reduce.call(elements, function (',
                  {
                    highlight: 'acc'
                  },
                  ', e) {\n\t    return e.className... ...reduce(unique, ',
                  {
                    highlight: 'acc'
                  },
                  ');...'
                ],
                source: 'answer',
                id: 'soa7540783'
              }
            ]
          }
        },
        {
          index: 2,
          uri: '/questions/soq14433212.json',
          path: 'fn:doc("/questions/soq14433212.json")',
          score: 58368,
          confidence: 0.4084224,
          fitness: 0.6277012,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq14433212.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'javascript',
              'jquery',
              'html'
            ],
            originalId: '14433212',
            owner: {
              id: 'sou1687825',
              reputation: 183,
              originalId: '1687825',
              userName: 'souser1687825@example.com',
              displayName: 'Rishi'
            },
            lastActivityDate: '2013-01-21T10:39:49.000Z',
            id: 'soq14433212',
            answerCount: 2,
            voteCount: 9,
            accepted: true,
            downvotingContributorIds: [

            ],
            creationDate: '2013-01-21T06:13:31.083Z',
            itemTally: 3,
            upvotingContributorIds: [
              'unknown',
              'unknown',
              'unknown'
            ],
            title: 'how to call REST API from javascript',
            acceptedAnswerId: 'soa14433462',
            snippets: [
              {
                'match-text': [
                  '...url: \'https://tt.s2.',
                  {
                    highlight: 'acc'
                  },
                  '.com/ttm/subscribe-service/uid=sagar...'
                ],
                source: 'answer',
                id: 'soa14436840'
              }
            ]
          }
        }
      ],
      facets: {
        date: {
          type: 'bucketed',
          facetValues: [
            {
              name: '2013-01-01T00:00:00-08:00',
              count: 1,
              value: '2013-01-01T00:00:00-08:00'
            },
            {
              name: '2013-07-01T00:00:00-07:00',
              count: 1,
              value: '2013-07-01T00:00:00-07:00'
            }
          ]
        },
        tag: {
          type: 'xs:string',
          facetValues: [
            {
              name: 'html',
              count: 2,
              value: 'html'
            },
            {
              name: 'css',
              count: 1,
              value: 'css'
            },
            {
              name: 'javascript',
              count: 1,
              value: 'javascript'
            },
            {
              name: 'jquery',
              count: 1,
              value: 'jquery'
            }
          ]
        }
      },
      query: {
        'and-query': [
          {
            'field-word-query': [
              {
                field: 'default-samplestack-search',
                text: {
                  lang: 'en',
                  _value: 'acc'
                }
              }
            ],
            'json-property-range-query': {
              operator: '<',
              property: 'lastActivityDate',
              value: [
                {
                  type: 'xs:dateTime',
                  _value: '2013-12-01T08:00:00Z'
                }
              ]
            },
            'directory-query': [
              {
                uri: '/questions/'
              }
            ],
            annotation: [
              {
                'operator-ref': 'sort',
                'state-ref': 'relevance'
              }
            ]
          }
        ]
      },
      qtext: 'sort:relevance',
      report: '(cts:search(fn:collection(), cts:and-query((cts:field-word-query("default-samplestack-search", "acc", ("lang=en"), 1), cts:json-property-range-query("lastActivityDate", ">=", xs:dateTime("2012-05-01T07:00:00Z"), (), 1), cts:json-property-range-query("lastActivityDate", "<", xs:dateTime("2013-12-01T08:00:00Z"), (), 1), cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:score-order("descending")), 1))[1 to 10]',
      metrics: {
        'query-resolution-time': 'PT0.039281S',
        'facet-resolution-time': 'PT0.047231S',
        'snippet-resolution-time': 'PT0.015926S',
        'total-time': 'PT0.383504S'
      }
    }
  },
  'searchAccDateRangeAndTag': {
    spec: {
      search: {
        qtext: [
          'acc',
          'sort:relevance'
        ],
        start: 1,
        query: {
          'and-query': {
            queries: [
              {
                'range-constraint-query': {
                  'constraint-name': 'tag',
                  value: 'html'
                }
              },
              {
                'range-constraint-query': {
                  'constraint-name': 'lastActivity',
                  value: '2012-05-01T07:00:00.000Z',
                  'range-operator': 'GE'
                }
              },
              {
                'range-constraint-query': {
                  'constraint-name': 'lastActivity',
                  value: '2013-12-01T08:00:00.000Z',
                  'range-operator': 'LT'
                }
              }
            ]
          }
        },
        timezone: 'America/Los_Angeles'
      },
      shadow: undefined
    },
    docsQuery: {
      search: {
        qtext: [
          'acc',
          'sort:relevance'
        ],
        query: {
          'and-query': {
            queries: [
              {
                'range-constraint-query': {
                  'constraint-name': 'tag',
                  value: 'html'
                }
              },
              {
                'range-constraint-query': {
                  'constraint-name': 'lastActivity',
                  value: '2012-05-01T07:00:00.000Z',
                  'range-operator': 'GE'
                }
              },
              {
                'range-constraint-query': {
                  'constraint-name': 'lastActivity',
                  value: '2013-12-01T08:00:00.000Z',
                  'range-operator': 'LT'
                }
              },
              {
                'directory-query': {
                  uri: [
                    '/questions/'
                  ]
                }
              }
            ]
          }
        },
        timezone: 'America/Los_Angeles',
        options: {
          constraint: [
            {
              name: 'date',
              range: {
                facet: true,
                'json-property': 'lastActivityDate',
                type: 'xs:dateTime',
                bucket: [
                  {
                    ge: '2009-05-01T00:00:00-07:00',
                    lt: '2009-06-01T00:00:00-07:00',
                    name: '2009-05-01T00:00:00-07:00',
                    label: '2009-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-06-01T00:00:00-07:00',
                    lt: '2009-07-01T00:00:00-07:00',
                    name: '2009-06-01T00:00:00-07:00',
                    label: '2009-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-07-01T00:00:00-07:00',
                    lt: '2009-08-01T00:00:00-07:00',
                    name: '2009-07-01T00:00:00-07:00',
                    label: '2009-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-08-01T00:00:00-07:00',
                    lt: '2009-09-01T00:00:00-07:00',
                    name: '2009-08-01T00:00:00-07:00',
                    label: '2009-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-09-01T00:00:00-07:00',
                    lt: '2009-10-01T00:00:00-07:00',
                    name: '2009-09-01T00:00:00-07:00',
                    label: '2009-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-10-01T00:00:00-07:00',
                    lt: '2009-11-01T00:00:00-07:00',
                    name: '2009-10-01T00:00:00-07:00',
                    label: '2009-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-11-01T00:00:00-07:00',
                    lt: '2009-12-01T00:00:00-08:00',
                    name: '2009-11-01T00:00:00-07:00',
                    label: '2009-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2009-12-01T00:00:00-08:00',
                    lt: '2010-01-01T00:00:00-08:00',
                    name: '2009-12-01T00:00:00-08:00',
                    label: '2009-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-01-01T00:00:00-08:00',
                    lt: '2010-02-01T00:00:00-08:00',
                    name: '2010-01-01T00:00:00-08:00',
                    label: '2010-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-02-01T00:00:00-08:00',
                    lt: '2010-03-01T00:00:00-08:00',
                    name: '2010-02-01T00:00:00-08:00',
                    label: '2010-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-03-01T00:00:00-08:00',
                    lt: '2010-04-01T00:00:00-07:00',
                    name: '2010-03-01T00:00:00-08:00',
                    label: '2010-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2010-04-01T00:00:00-07:00',
                    lt: '2010-05-01T00:00:00-07:00',
                    name: '2010-04-01T00:00:00-07:00',
                    label: '2010-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-05-01T00:00:00-07:00',
                    lt: '2010-06-01T00:00:00-07:00',
                    name: '2010-05-01T00:00:00-07:00',
                    label: '2010-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-06-01T00:00:00-07:00',
                    lt: '2010-07-01T00:00:00-07:00',
                    name: '2010-06-01T00:00:00-07:00',
                    label: '2010-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-07-01T00:00:00-07:00',
                    lt: '2010-08-01T00:00:00-07:00',
                    name: '2010-07-01T00:00:00-07:00',
                    label: '2010-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-08-01T00:00:00-07:00',
                    lt: '2010-09-01T00:00:00-07:00',
                    name: '2010-08-01T00:00:00-07:00',
                    label: '2010-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-09-01T00:00:00-07:00',
                    lt: '2010-10-01T00:00:00-07:00',
                    name: '2010-09-01T00:00:00-07:00',
                    label: '2010-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-10-01T00:00:00-07:00',
                    lt: '2010-11-01T00:00:00-07:00',
                    name: '2010-10-01T00:00:00-07:00',
                    label: '2010-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-11-01T00:00:00-07:00',
                    lt: '2010-12-01T00:00:00-08:00',
                    name: '2010-11-01T00:00:00-07:00',
                    label: '2010-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2010-12-01T00:00:00-08:00',
                    lt: '2011-01-01T00:00:00-08:00',
                    name: '2010-12-01T00:00:00-08:00',
                    label: '2010-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-01-01T00:00:00-08:00',
                    lt: '2011-02-01T00:00:00-08:00',
                    name: '2011-01-01T00:00:00-08:00',
                    label: '2011-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-02-01T00:00:00-08:00',
                    lt: '2011-03-01T00:00:00-08:00',
                    name: '2011-02-01T00:00:00-08:00',
                    label: '2011-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-03-01T00:00:00-08:00',
                    lt: '2011-04-01T00:00:00-07:00',
                    name: '2011-03-01T00:00:00-08:00',
                    label: '2011-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2011-04-01T00:00:00-07:00',
                    lt: '2011-05-01T00:00:00-07:00',
                    name: '2011-04-01T00:00:00-07:00',
                    label: '2011-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-05-01T00:00:00-07:00',
                    lt: '2011-06-01T00:00:00-07:00',
                    name: '2011-05-01T00:00:00-07:00',
                    label: '2011-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-06-01T00:00:00-07:00',
                    lt: '2011-07-01T00:00:00-07:00',
                    name: '2011-06-01T00:00:00-07:00',
                    label: '2011-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-07-01T00:00:00-07:00',
                    lt: '2011-08-01T00:00:00-07:00',
                    name: '2011-07-01T00:00:00-07:00',
                    label: '2011-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-08-01T00:00:00-07:00',
                    lt: '2011-09-01T00:00:00-07:00',
                    name: '2011-08-01T00:00:00-07:00',
                    label: '2011-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-09-01T00:00:00-07:00',
                    lt: '2011-10-01T00:00:00-07:00',
                    name: '2011-09-01T00:00:00-07:00',
                    label: '2011-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-10-01T00:00:00-07:00',
                    lt: '2011-11-01T00:00:00-07:00',
                    name: '2011-10-01T00:00:00-07:00',
                    label: '2011-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-11-01T00:00:00-07:00',
                    lt: '2011-12-01T00:00:00-08:00',
                    name: '2011-11-01T00:00:00-07:00',
                    label: '2011-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2011-12-01T00:00:00-08:00',
                    lt: '2012-01-01T00:00:00-08:00',
                    name: '2011-12-01T00:00:00-08:00',
                    label: '2011-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-01-01T00:00:00-08:00',
                    lt: '2012-02-01T00:00:00-08:00',
                    name: '2012-01-01T00:00:00-08:00',
                    label: '2012-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-02-01T00:00:00-08:00',
                    lt: '2012-03-01T00:00:00-08:00',
                    name: '2012-02-01T00:00:00-08:00',
                    label: '2012-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-03-01T00:00:00-08:00',
                    lt: '2012-04-01T00:00:00-07:00',
                    name: '2012-03-01T00:00:00-08:00',
                    label: '2012-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2012-04-01T00:00:00-07:00',
                    lt: '2012-05-01T00:00:00-07:00',
                    name: '2012-04-01T00:00:00-07:00',
                    label: '2012-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-05-01T00:00:00-07:00',
                    lt: '2012-06-01T00:00:00-07:00',
                    name: '2012-05-01T00:00:00-07:00',
                    label: '2012-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-06-01T00:00:00-07:00',
                    lt: '2012-07-01T00:00:00-07:00',
                    name: '2012-06-01T00:00:00-07:00',
                    label: '2012-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-07-01T00:00:00-07:00',
                    lt: '2012-08-01T00:00:00-07:00',
                    name: '2012-07-01T00:00:00-07:00',
                    label: '2012-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-08-01T00:00:00-07:00',
                    lt: '2012-09-01T00:00:00-07:00',
                    name: '2012-08-01T00:00:00-07:00',
                    label: '2012-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-09-01T00:00:00-07:00',
                    lt: '2012-10-01T00:00:00-07:00',
                    name: '2012-09-01T00:00:00-07:00',
                    label: '2012-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-10-01T00:00:00-07:00',
                    lt: '2012-11-01T00:00:00-07:00',
                    name: '2012-10-01T00:00:00-07:00',
                    label: '2012-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-11-01T00:00:00-07:00',
                    lt: '2012-12-01T00:00:00-08:00',
                    name: '2012-11-01T00:00:00-07:00',
                    label: '2012-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2012-12-01T00:00:00-08:00',
                    lt: '2013-01-01T00:00:00-08:00',
                    name: '2012-12-01T00:00:00-08:00',
                    label: '2012-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-01-01T00:00:00-08:00',
                    lt: '2013-02-01T00:00:00-08:00',
                    name: '2013-01-01T00:00:00-08:00',
                    label: '2013-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-02-01T00:00:00-08:00',
                    lt: '2013-03-01T00:00:00-08:00',
                    name: '2013-02-01T00:00:00-08:00',
                    label: '2013-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-03-01T00:00:00-08:00',
                    lt: '2013-04-01T00:00:00-07:00',
                    name: '2013-03-01T00:00:00-08:00',
                    label: '2013-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2013-04-01T00:00:00-07:00',
                    lt: '2013-05-01T00:00:00-07:00',
                    name: '2013-04-01T00:00:00-07:00',
                    label: '2013-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-05-01T00:00:00-07:00',
                    lt: '2013-06-01T00:00:00-07:00',
                    name: '2013-05-01T00:00:00-07:00',
                    label: '2013-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-06-01T00:00:00-07:00',
                    lt: '2013-07-01T00:00:00-07:00',
                    name: '2013-06-01T00:00:00-07:00',
                    label: '2013-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-07-01T00:00:00-07:00',
                    lt: '2013-08-01T00:00:00-07:00',
                    name: '2013-07-01T00:00:00-07:00',
                    label: '2013-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-08-01T00:00:00-07:00',
                    lt: '2013-09-01T00:00:00-07:00',
                    name: '2013-08-01T00:00:00-07:00',
                    label: '2013-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-09-01T00:00:00-07:00',
                    lt: '2013-10-01T00:00:00-07:00',
                    name: '2013-09-01T00:00:00-07:00',
                    label: '2013-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-10-01T00:00:00-07:00',
                    lt: '2013-11-01T00:00:00-07:00',
                    name: '2013-10-01T00:00:00-07:00',
                    label: '2013-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-11-01T00:00:00-07:00',
                    lt: '2013-12-01T00:00:00-08:00',
                    name: '2013-11-01T00:00:00-07:00',
                    label: '2013-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2013-12-01T00:00:00-08:00',
                    lt: '2014-01-01T00:00:00-08:00',
                    name: '2013-12-01T00:00:00-08:00',
                    label: '2013-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-01-01T00:00:00-08:00',
                    lt: '2014-02-01T00:00:00-08:00',
                    name: '2014-01-01T00:00:00-08:00',
                    label: '2014-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-02-01T00:00:00-08:00',
                    lt: '2014-03-01T00:00:00-08:00',
                    name: '2014-02-01T00:00:00-08:00',
                    label: '2014-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-03-01T00:00:00-08:00',
                    lt: '2014-04-01T00:00:00-07:00',
                    name: '2014-03-01T00:00:00-08:00',
                    label: '2014-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2014-04-01T00:00:00-07:00',
                    lt: '2014-05-01T00:00:00-07:00',
                    name: '2014-04-01T00:00:00-07:00',
                    label: '2014-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-05-01T00:00:00-07:00',
                    lt: '2014-06-01T00:00:00-07:00',
                    name: '2014-05-01T00:00:00-07:00',
                    label: '2014-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-06-01T00:00:00-07:00',
                    lt: '2014-07-01T00:00:00-07:00',
                    name: '2014-06-01T00:00:00-07:00',
                    label: '2014-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-07-01T00:00:00-07:00',
                    lt: '2014-08-01T00:00:00-07:00',
                    name: '2014-07-01T00:00:00-07:00',
                    label: '2014-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-08-01T00:00:00-07:00',
                    lt: '2014-09-01T00:00:00-07:00',
                    name: '2014-08-01T00:00:00-07:00',
                    label: '2014-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-09-01T00:00:00-07:00',
                    lt: '2014-10-01T00:00:00-07:00',
                    name: '2014-09-01T00:00:00-07:00',
                    label: '2014-09-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-10-01T00:00:00-07:00',
                    lt: '2014-11-01T00:00:00-07:00',
                    name: '2014-10-01T00:00:00-07:00',
                    label: '2014-10-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-11-01T00:00:00-07:00',
                    lt: '2014-12-01T00:00:00-08:00',
                    name: '2014-11-01T00:00:00-07:00',
                    label: '2014-11-01T00:00:00-07:00'
                  },
                  {
                    ge: '2014-12-01T00:00:00-08:00',
                    lt: '2015-01-01T00:00:00-08:00',
                    name: '2014-12-01T00:00:00-08:00',
                    label: '2014-12-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-01-01T00:00:00-08:00',
                    lt: '2015-02-01T00:00:00-08:00',
                    name: '2015-01-01T00:00:00-08:00',
                    label: '2015-01-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-02-01T00:00:00-08:00',
                    lt: '2015-03-01T00:00:00-08:00',
                    name: '2015-02-01T00:00:00-08:00',
                    label: '2015-02-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-03-01T00:00:00-08:00',
                    lt: '2015-04-01T00:00:00-07:00',
                    name: '2015-03-01T00:00:00-08:00',
                    label: '2015-03-01T00:00:00-08:00'
                  },
                  {
                    ge: '2015-04-01T00:00:00-07:00',
                    lt: '2015-05-01T00:00:00-07:00',
                    name: '2015-04-01T00:00:00-07:00',
                    label: '2015-04-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-05-01T00:00:00-07:00',
                    lt: '2015-06-01T00:00:00-07:00',
                    name: '2015-05-01T00:00:00-07:00',
                    label: '2015-05-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-06-01T00:00:00-07:00',
                    lt: '2015-07-01T00:00:00-07:00',
                    name: '2015-06-01T00:00:00-07:00',
                    label: '2015-06-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-07-01T00:00:00-07:00',
                    lt: '2015-08-01T00:00:00-07:00',
                    name: '2015-07-01T00:00:00-07:00',
                    label: '2015-07-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-08-01T00:00:00-07:00',
                    lt: '2015-09-01T00:00:00-07:00',
                    name: '2015-08-01T00:00:00-07:00',
                    label: '2015-08-01T00:00:00-07:00'
                  },
                  {
                    ge: '2015-09-01T00:00:00-07:00',
                    lt: '2015-10-01T00:00:00-07:00',
                    name: '2015-09-01T00:00:00-07:00',
                    label: '2015-09-01T00:00:00-07:00'
                  }
                ]
              }
            }
          ]
        }
      },
      shadow: undefined,
      pageStart: 1,
      pageLength: 10,
      optionsName: 'questions',
      transform: 'search-response',
      view: 'all'
    },
    docsQueryResult: [
      {
        'snippet-format': 'snippet',
        total: 2,
        start: 1,
        'page-length': 10,
        results: [
          {
            index: 1,
            uri: '/questions/soq7538483.json',
            path: 'fn:doc("/questions/soq7538483.json")',
            score: 82944,
            confidence: 0.4868718,
            fitness: 0.7482695,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq7538483.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                'match-text': [
                  '...[].reduce.call(elements, function (',
                  {
                    highlight: 'acc'
                  },
                  ', e) {\n\t    return e.className... ...reduce(unique, ',
                  {
                    highlight: 'acc'
                  },
                  ');...'
                ],
                source: 'answer',
                id: 'soa7540783'
              }
            ]
          },
          {
            index: 2,
            uri: '/questions/soq14433212.json',
            path: 'fn:doc("/questions/soq14433212.json")',
            score: 58368,
            confidence: 0.4084224,
            fitness: 0.6277012,
            href: '/v1/documents?uri=%2Fquestions%2Fsoq14433212.json',
            mimetype: 'application/json',
            format: 'json',
            matches: [
              {
                'match-text': [
                  '...url: \'https://tt.s2.',
                  {
                    highlight: 'acc'
                  },
                  '.com/ttm/subscribe-service/uid=sagar...'
                ],
                source: 'answer',
                id: 'soa14436840'
              }
            ]
          }
        ],
        facets: {
          date: {
            type: 'bucketed',
            facetValues: [
              {
                name: '2013-01-01T00:00:00-08:00',
                count: 1,
                value: '2013-01-01T00:00:00-08:00'
              },
              {
                name: '2013-07-01T00:00:00-07:00',
                count: 1,
                value: '2013-07-01T00:00:00-07:00'
              }
            ]
          },
          tag: {
            type: 'xs:string',
            facetValues: [
              {
                name: 'html',
                count: 2,
                value: 'html'
              },
              {
                name: 'css',
                count: 1,
                value: 'css'
              },
              {
                name: 'javascript',
                count: 1,
                value: 'javascript'
              },
              {
                name: 'jquery',
                count: 1,
                value: 'jquery'
              }
            ]
          }
        },
        query: {
          'and-query': [
            {
              'field-word-query': [
                {
                  field: 'default-samplestack-search',
                  text: {
                    lang: 'en',
                    _value: 'acc'
                  }
                }
              ],
              'json-property-range-query': {
                operator: '<',
                property: 'lastActivityDate',
                value: [
                  {
                    type: 'xs:dateTime',
                    _value: '2013-12-01T08:00:00Z'
                  }
                ]
              },
              'directory-query': [
                {
                  uri: '/questions/'
                }
              ],
              annotation: [
                {
                  'operator-ref': 'sort',
                  'state-ref': 'relevance'
                }
              ]
            }
          ]
        },
        qtext: 'sort:relevance',
        report: '(cts:search(fn:collection(), cts:and-query((cts:field-word-query("default-samplestack-search", "acc", ("lang=en"), 1), cts:json-property-range-query("tags", "=", "html", ("collation=http://marklogic.com/collation/"), 1), cts:json-property-range-query("lastActivityDate", ">=", xs:dateTime("2012-05-01T07:00:00Z"), (), 1), cts:json-property-range-query("lastActivityDate", "<", xs:dateTime("2013-12-01T08:00:00Z"), (), 1), cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:score-order("descending")), 1))[1 to 10]',
        metrics: {
          'query-resolution-time': 'PT0.054939S',
          'facet-resolution-time': 'PT0.137367S',
          'snippet-resolution-time': 'PT0.064189S',
          'total-time': 'PT2.068948S'
        }
      },
      {
        uri: '/questions/soq7538483.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '699',
        content: {
          tags: [
            'html',
            'css'
          ],
          originalId: '7538483',
          owner: {
            id: 'sou130452',
            reputation: 874,
            originalId: '130452',
            userName: 'souser130452@example.com',
            displayName: 'KuldipMCA'
          },
          lastActivityDate: '2013-07-31T15:06:21.333Z',
          id: 'soq7538483',
          answerCount: 3,
          voteCount: 15,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I need list of classes used in an html file. Is there any tool where i can get list of classes in the HTML file?',
          creationDate: '2011-09-24T10:38:08.450Z',
          itemTally: 6,
          upvotingContributorIds: [
            'unknown',
            'unknown',
            'unknown',
            'unknown',
            'unknown',
            'unknown'
          ],
          title: 'How to get list of Css class use in the HTML file?',
          acceptedAnswerId: 'soa7540783'
        }
      },
      {
        uri: '/questions/soq14433212.json',
        category: 'content',
        format: 'json',
        contentType: 'application/json',
        contentLength: '1574',
        content: {
          tags: [
            'javascript',
            'jquery',
            'html'
          ],
          originalId: '14433212',
          owner: {
            id: 'sou1687825',
            reputation: 183,
            originalId: '1687825',
            userName: 'souser1687825@example.com',
            displayName: 'Rishi'
          },
          lastActivityDate: '2013-01-21T10:39:49.000Z',
          id: 'soq14433212',
          answerCount: 2,
          voteCount: 9,
          accepted: true,
          downvotingContributorIds: [

          ],
          text: 'I have a url which gives json data...\n\nI want to hit that URL from javascript but I am getting this error :\n\ncharacter encoding of the plain text document was not declared. The document will render with garbled text in some browser configurations if the document contains characters from outside the US-ASCII range. The character encoding of the file needs to be declared in the transfer protocol or file needs to use a ' +
                'byte order mark as an encoding signature\n\nCode :\n\n\tfunction a(){\n\t$.getJSON(url,function (data) { alert(data);});\n\t}\n\t\n\nfull code :\n\n\t<html lang="en">\n\t<head>\n\t<meta http-equiv="Content-Type" content="text/html;charset=utf-8" ></meta>\n\t<script language="JavaScript" type="text/javascript" src="jquery-1.7.1.min.js"></script>\n\t<script>\n\t\n\tfunction a(){\n\t$.getJSON(url,function (data) { alert(data);' +
                '});\n\t}\n\t</script>\n\t</head>\n\t<body>\n\t<input type="text"/>\n\t<input type="submit" value="search" onclick="a()"/>\n\t</body>\n\t</html>\n\t',
          creationDate: '2013-01-21T06:13:31.083Z',
          itemTally: 3,
          upvotingContributorIds: [
            'unknown',
            'unknown',
            'unknown'
          ],
          title: 'how to call REST API from javascript',
          acceptedAnswerId: 'soa14433462'
        }
      }
    ],
    ret: {
      'snippet-format': 'snippet',
      total: 2,
      start: 1,
      'page-length': 10,
      results: [
        {
          index: 1,
          uri: '/questions/soq7538483.json',
          path: 'fn:doc("/questions/soq7538483.json")',
          score: 82944,
          confidence: 0.4868718,
          fitness: 0.7482695,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq7538483.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'html',
              'css'
            ],
            originalId: '7538483',
            owner: {
              id: 'sou130452',
              reputation: 874,
              originalId: '130452',
              userName: 'souser130452@example.com',
              displayName: 'KuldipMCA'
            },
            lastActivityDate: '2013-07-31T15:06:21.333Z',
            id: 'soq7538483',
            answerCount: 3,
            voteCount: 15,
            accepted: true,
            downvotingContributorIds: [

            ],
            creationDate: '2011-09-24T10:38:08.450Z',
            itemTally: 6,
            upvotingContributorIds: [
              'unknown',
              'unknown',
              'unknown',
              'unknown',
              'unknown',
              'unknown'
            ],
            title: 'How to get list of Css class use in the HTML file?',
            acceptedAnswerId: 'soa7540783',
            snippets: [
              {
                'match-text': [
                  '...[].reduce.call(elements, function (',
                  {
                    highlight: 'acc'
                  },
                  ', e) {\n\t    return e.className... ...reduce(unique, ',
                  {
                    highlight: 'acc'
                  },
                  ');...'
                ],
                source: 'answer',
                id: 'soa7540783'
              }
            ]
          }
        },
        {
          index: 2,
          uri: '/questions/soq14433212.json',
          path: 'fn:doc("/questions/soq14433212.json")',
          score: 58368,
          confidence: 0.4084224,
          fitness: 0.6277012,
          href: '/v1/documents?uri=%2Fquestions%2Fsoq14433212.json',
          mimetype: 'application/json',
          format: 'json',
          content: {
            tags: [
              'javascript',
              'jquery',
              'html'
            ],
            originalId: '14433212',
            owner: {
              id: 'sou1687825',
              reputation: 183,
              originalId: '1687825',
              userName: 'souser1687825@example.com',
              displayName: 'Rishi'
            },
            lastActivityDate: '2013-01-21T10:39:49.000Z',
            id: 'soq14433212',
            answerCount: 2,
            voteCount: 9,
            accepted: true,
            downvotingContributorIds: [

            ],
            creationDate: '2013-01-21T06:13:31.083Z',
            itemTally: 3,
            upvotingContributorIds: [
              'unknown',
              'unknown',
              'unknown'
            ],
            title: 'how to call REST API from javascript',
            acceptedAnswerId: 'soa14433462',
            snippets: [
              {
                'match-text': [
                  '...url: \'https://tt.s2.',
                  {
                    highlight: 'acc'
                  },
                  '.com/ttm/subscribe-service/uid=sagar...'
                ],
                source: 'answer',
                id: 'soa14436840'
              }
            ]
          }
        }
      ],
      facets: {
        date: {
          type: 'bucketed',
          facetValues: [
            {
              name: '2013-01-01T00:00:00-08:00',
              count: 1,
              value: '2013-01-01T00:00:00-08:00'
            },
            {
              name: '2013-07-01T00:00:00-07:00',
              count: 1,
              value: '2013-07-01T00:00:00-07:00'
            }
          ]
        },
        tag: {
          type: 'xs:string',
          facetValues: [
            {
              name: 'html',
              count: 2,
              value: 'html'
            },
            {
              name: 'css',
              count: 1,
              value: 'css'
            },
            {
              name: 'javascript',
              count: 1,
              value: 'javascript'
            },
            {
              name: 'jquery',
              count: 1,
              value: 'jquery'
            }
          ]
        }
      },
      query: {
        'and-query': [
          {
            'field-word-query': [
              {
                field: 'default-samplestack-search',
                text: {
                  lang: 'en',
                  _value: 'acc'
                }
              }
            ],
            'json-property-range-query': {
              operator: '<',
              property: 'lastActivityDate',
              value: [
                {
                  type: 'xs:dateTime',
                  _value: '2013-12-01T08:00:00Z'
                }
              ]
            },
            'directory-query': [
              {
                uri: '/questions/'
              }
            ],
            annotation: [
              {
                'operator-ref': 'sort',
                'state-ref': 'relevance'
              }
            ]
          }
        ]
      },
      qtext: 'sort:relevance',
      report: '(cts:search(fn:collection(), cts:and-query((cts:field-word-query("default-samplestack-search", "acc", ("lang=en"), 1), cts:json-property-range-query("tags", "=", "html", ("collation=http://marklogic.com/collation/"), 1), cts:json-property-range-query("lastActivityDate", ">=", xs:dateTime("2012-05-01T07:00:00Z"), (), 1), cts:json-property-range-query("lastActivityDate", "<", xs:dateTime("2013-12-01T08:00:00Z"), (), 1), cts:directory-query("/questions/", "1"), cts:json-property-range-query("voteCount", ">=", -10, ("score-function=linear"), 1)), ()), ("score-logtfidf","faceted",cts:score-order("descending")), 1))[1 to 10]',
      metrics: {
        'query-resolution-time': 'PT0.054939S',
        'facet-resolution-time': 'PT0.137367S',
        'snippet-resolution-time': 'PT0.064189S',
        'total-time': 'PT2.068948S'
      }
    }
  }
};
/* jshint ignore:end */

