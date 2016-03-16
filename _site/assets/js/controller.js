var app = angular.module('mainApp', ['angularUtils.directives.dirPagination']);

app.controller('DirectoryCtrl', function($scope, $http) {
	$http.get('/directory.json')
	.success(function(response) {
		$scope.businesses = response.records;
	});
});