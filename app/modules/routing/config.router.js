app.config(function ($stateProvider,$urlRouterProvider,JS_REQUIRES) {
  // Default Route when Page not defined in setup
    $urlRouterProvider.otherwise('login');
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "modules/login/views/login.html",
        resolve:loadSequence('login','loginSvc')
      })
      .state('main', {
        url: "/main/:userId",
        templateUrl: "modules/main/views/main.html",
        resolve:loadSequence('main')
      });

      function loadSequence()
    {
      var _args = arguments;
      return {
        deps : [ '$ocLazyLoad', '$q', function($ocLL, $q)
        {
          var promise = $q.when(1);
          for (var i = 0, len = _args.length; i < len; i++)
          {
            promise = promiseThen(_args[i]);
          }
          return promise;

          function promiseThen(_arg)
          {
            if (typeof _arg == 'function')
              return promise.then(_arg);
            else
              return promise.then(function()
              {
                var nowLoad = requiredData(_arg);
                if (!nowLoad)
                  return $.error('Route resolve: Bad resource name [' + _arg + ']');
                return $ocLL.load(nowLoad);
              });
          }

          function requiredData(name)
          {
            if (JS_REQUIRES.modules)
              for ( var m in JS_REQUIRES.modules)
                if (JS_REQUIRES.modules[m].name && JS_REQUIRES.modules[m].name === name)
                  return JS_REQUIRES.modules[m];
            return JS_REQUIRES.scripts && JS_REQUIRES.scripts[name];
          }
        } ]
      };
    }
});
