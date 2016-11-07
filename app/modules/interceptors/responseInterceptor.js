'use strict';

app.factory('resInerceptor', ['$q', '$injector','$sessionStorage', function ($q, $injector,$sessionStorage)
    {


        var resInterceptor = {
            response: function (response) {

                return $q.resolve(response);

            },
            responseError: function (rejection) {
                console.log("response Interceptor" + rejection);
                var respTime = new Date().getTime() - rejection.config.reqStartTime;
                if (respTime >= rejection.config.timeout) {
                    // alert('beacuse of time out');
                    var timeoutFlag = true;
                    console.log('get time out call');
                }

                return $q.reject(rejection);
            }
        };
        return resInterceptor;
    }]);

app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('resInerceptor');
    }]);
