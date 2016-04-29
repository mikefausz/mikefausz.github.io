angular
  .module('portfolio')
  .controller('HomeController', function($scope, HomeService, ProjectService, SkillsService, $routeParams) {
    $scope.mikes = HomeService.getMikes();
    window.mikes = $scope.mikes;

    $scope.fauszs = HomeService.getFauszs();
    window.fauszs = $scope.fauszs;

    $scope.projects = ProjectService.getProjects();
    window.projects = $scope.projects;

    $scope.skills = SkillsService.getSkills();
    window.projects = $scope.projects;
    console.log($routeParams);

    if($routeParams.number) {
      $scope.project = ProjectService.getProject($routeParams.number);

      var skillsArr = [];
      angular.forEach($scope.project.tech, function(tech) {
        console.log("Getting " + tech + "...");
        skillsArr.push(SkillsService.getTech(tech));
      });

      console.log("SKILLS ARRAY: " + skillsArr);
      $scope.tech = skillsArr;

      $scope.links = [
        {
          text: "See it live",
          icon: "images/icons/wifi-icon.png",
          iconwidth: "180px",
          color: "rgb(31,82,167)"
        },
        {
          text: "See the code",
          icon: "images/icons/github-icon.png",
          iconwidth: "160px",
          color: "rgb(12,12,12)"
        }
      ];
      if($routeParams.number === '5') {
        $scope.prevProject = ProjectService.getProject(parseInt($routeParams.number) - 1);
        $scope.nextProject = ProjectService.getProject(0);
      }
      else if ($routeParams.number === '0') {
        $scope.prevProject = ProjectService.getProject(5);
        $scope.nextProject = ProjectService.getProject(parseInt($routeParams.number) + 1);
      }
      else {
        $scope.nextProject = ProjectService.getProject(parseInt($routeParams.number) + 1);
        console.log("NEXT: " + $scope.nextProject);
        $scope.prevProject = ProjectService.getProject(parseInt($routeParams.number) - 1);
        console.log("PREV: " + $scope.prevProject);
      }

      window.project = $scope.project;
    }
  }
);
