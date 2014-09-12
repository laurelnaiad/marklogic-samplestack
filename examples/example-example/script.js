  var http = function (instance, httpMethod) {
    var httpConfig = instance.getHttpConfig(httpMethod);
    var waiter = mlWaiter.waitOn(instance);
    httpConfig.url = self.baseUrl + httpConfig.url;
    $http(httpConfig).then(
      function (response) {
        instance.onHttpResponse(response.data, httpMethod);
        waiter.resolve();
      },
      function (err) {
        waiter.reject(err);
      }
    );
    return instance;
  };