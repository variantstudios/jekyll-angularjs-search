var app = angular.module('mainApp', ['angularUtils.directives.dirPagination']);

app.controller('DirectoryCtrl', function($scope, $http) {
	$scope.loading = true;
	$http.get('/directory.json')
	.success(function(response) {
		$scope.businesses = response.records;
		$scope.loading = false;
	});

	$scope.paginationService = function() {
		console.log("test");
	}

});