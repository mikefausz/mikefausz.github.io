angular
  .module('portfolio')
  .controller('ProjectController', function($scope, ProjectService, $routeParams) {
    $scope.project = ProjectService.getProject($routeParams.number);
    window.project = $scope.project;
    

});
