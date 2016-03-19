var app = angular.module('mainApp', ['angularUtils.directives.dirPagination'])

.controller('DirectoryCtrl', function($scope, $http) {
	$http.get('/directory.json')
	.success(function(response) {
		$scope.businesses = response.records;
		console.log("test 1");
	});
	$http.get('/classifications.json')
	.success(function(data) {
		$scope.classifications = data.records;
		console.log("test 2");
	})
});