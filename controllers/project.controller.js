angular
  .module('portfolio')
  .controller('ProjectController', function($scope, ProjectService, SkillsService) {
    $scope.project = ProjectService.getProject($routeParams.number);
    window.project = $scope.project;


});
