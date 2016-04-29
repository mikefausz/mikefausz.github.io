angular
  .module('portfolio')
  .directive('techJumbler', techJumbler);

  function techJumbler() {
    return {
      templateUrl: 'templates/tech-jumbler.html',
      restrict: 'E',
      replace: true,
      scope: {
        color: '@',
        technologies: '=',
      },
      link: function(scope, element, attributes) {
        var jumblerInterval;
        element.on('mouseenter', function(event) {
          console.log(attributes[0]);
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
