'use strict';

app.factory('reqInterceptor',['$q','$injector', function($q,$injector)
{
        var sessionInjector = {
            request: function (config) {
                config.headers = config.headers || {};
                console.log("interceptor called");
                // for adding gloabal timeout to request
                var startTime = new Date().getTime();
                config.reqStartTime = startTime;
                config.timeout = 60000;
             return config;

        }
      }
        return sessionInjector;
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('reqInterceptor');
}]);
