angular
  .module('portfolio')
  .directive('skillsJumbler', skillsJumbler);

  function skillsJumbler() {
    return {
      templateUrl: 'templates/skills-jumbler.html',
      restrict: 'E',
      replace: true,
      scope: {
        number: '@',
        skillname: '@',
        color: '@',
        technologies: '=',
      },
      link: function(scope, element, attributes) {
        var jumblerInterval;
        element.on('mouseenter', function(event) {
          jumblerInterval = setInterval(function() {
            scope.count++;
            scope.$apply();
          }, 500);
        });
        element.on('mouseleave', function(event) {
          clearInterval(jumblerInterval);
          scope.count = 0;
          scope.$apply();
        });
      }
    };
  }
