angular
.module('cookiesExample', ['ngCookies'])

.controller('ExampleController', [
  '$scope',
  function($scope ) {
    $scope.one = 1;
    $scope.two = 2;
    $scope.myfunc = function () {
      return parseInt($scope.one) + parseInt($scope.two);
    }
  }
])

.directive('myDir', function () {
  return {
    restrict: 'E',
    transclude: true,
    template: '<input type="text" ng-model="favorite()" class="">',
    scope: {
      favorite: '&'
    },
    link: function (scope, ele, attr) {
    }
  }
});