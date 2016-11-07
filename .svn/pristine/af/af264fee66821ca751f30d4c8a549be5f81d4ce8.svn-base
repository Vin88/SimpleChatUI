
## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

To learn about Karma and jasmine for angular go to
https://docs.angularjs.org/guide/unit-testing

Karma : Karma is a JavaScript command line tool that can be used to spawn a web server which loads your application's source code and executes your tests.

Jasmine is a behavior driven development framework for JavaScript.
In Jasmine we use the describe function to group our tests together:

describe("sorting the list of users", function() {
  // individual tests go here
});


////////////////////////////////////////////////////
Grunt Tasks:

1. time-grunt : Time how long tasks take. Can help when optimizing build times.
2. jit-grunt : Automatically load required Grunt tasks.
3. jshint :  Make sure there are no obvious mistakes.
4. jscs : Make sure code styles are up to par.
5. wiredep : Automatically inject Bower components into the app.
6. cdnify : Replace Google CDN references.
7. concurrent :Run some tasks in parallel to speed up the build process.
8. karma : Test settings.
9. ngdocs : documentation.
10. ngtemplates :Speed up your AngularJS app by automatically minifying, combining, and automatically caching your HTML templates with $templateCache
11. htmlmin : minify HTML
12. imagemin :Minify images

Files at root directory:

bowerrc.js : Bower can be configured using JSON in a .bowerrc file.
editorconfig : EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.



Unit test:

For unit test,this application uses Karma as test runner and Jasmine as test framwork.
All testes will go into the test folder.
To run the test cases :
grunt test,
or
npm test

End to End Testing:
End to End test cases are written in jasmine.
These tests are run with the Protractor End-to-End test runner.

the configuration is found at e2e-tests/protractor-conf.js
the end-to-end tests are found in e2e-tests/scenarios.js

to run the test cases:

npm run protractor.


Using less for developement:

For developement purpose we are using Less.
For deployement we will convert all our less file to css for the performance issue with less.


Session Storage for logged in data:










////////////////////////////Translation --Localization ////////////////////////////////////////////////

So translations is handled with angular-translate and angular-translate-partial-loader. We probably don’t need the static loader library anymore. I made folder assets/translations which contains folders for each language.  Right now the only two that matter are en-US and fr-FR.  There you can add JSON files for however you want to organize the translations.

These files are not automatically loaded when the page is loaded.  The idea is to load each one as you need it, so when you go to the login page, you load the login.json file via the login controller.  

Using basic Translate in the HTML:
{{ “Menu.Overview” | translate }}     
Menu.Overview is the key name for the Overview menu item in the JSON object.  See translations/en-US/master.json file for further examples


Loading The Translate File needed for Feature:
*Add these two lines to the controllers to load the JSON files for that section of the site.  
*Should do this at the beginning of the controller

	$translatePartialLoader.addPart('login');
	$translate.refresh();



This would load the file named login.json’ from the appropriate language folder.  :
This is what it looks for:	'translations/{lang}/{part}.json',


Adding Translations with Parameters

Example 1 - Basic Parameter Pass Through:
In the HTML
<p>{{ "Greetings.ThankYou" | translate:company_info }}</p>

In the Controller:
$scope.company_info = {
	company: $scope.company_name
};
