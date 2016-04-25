angular
  .module('portfolio')
  .controller('SkillsController', function($scope, SkillsService, $routeParams) {
    $scope.skills = SkillsService.getSkills();
    window.skills = $scope.skills;
    console.log("SKILLS CONTROLLER");

});
