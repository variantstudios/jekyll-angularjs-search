var app = angular.module('mainApp', ['angularUtils.directives.dirPagination'])

.controller('DirectoryCtrl', function($scope, $http) {

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
});

/*

app.controller('myCtrl', function ($scope, $http) {  
  // Show loading spinner.
  $scope.loading = true;
  $http.get('/some/awesome/content')
    .success(function (data) {
      // Do stuff with data.
    })
    .catch(function (err) {
      // Log error somehow.
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.
      $scope.loading = false;
    });
});

*/