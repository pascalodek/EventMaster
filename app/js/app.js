'use strict';
/* App Module */
var schoolsApp = angular.module('schoolsApp', [
  'ngRoute',
  'schoolsControllers'
]);

schoolsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/schools', {
        templateUrl: 'partials/school-list.html',
        controller: 'SchoolListCtrl'
      }).
      when('/schools/:schoolId', {
        templateUrl: 'partials/school-details.html',
        controller: 'SchoolDetailCtrl'
      }).
      otherwise({
        redirectTo: '/schools'
      });
  }]);