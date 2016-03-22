var app = angular.module('mainApp', ['angularUtils.directives.dirPagination'])

.controller('DirectoryCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.loading = true;
  
  $http.get('/directory.json')
  .success(function(response) {
    $scope.businesses = response.records;
  })
    .catch(function (err) {
      // Log error somehow.
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.
      $scope.loading = false;
    });
  $http.get('/classifications.json')
  .success(function(data) {
    $scope.classifications = data.records;
  })
}]);