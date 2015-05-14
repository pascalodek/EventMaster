'use strict';

/* Controllers */

var schoolsControllers = angular.module('schoolsControllers', ['angularUtils.directives.dirPagination']);

schoolsControllers.controller('SchoolListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('schools/schools.json').success(function(data) {
      $scope.schools = data;
    });

    $scope.orderProp = 'name';

    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };
  }]);

schoolsControllers.controller('SchoolDetailCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {
    //$scope.phoneId = $routeParams.phoneId;
    //$scope.schoolId ='$routeParams.schoolId';
    $http.get('schools/' + $routeParams.schoolId + '.json').success(function(data) {
      $scope.school = data;
    });

  }]);

schoolsControllers.controller('OtherController' , ['$scope' ,function($scope){
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };

}]);