angular
  .module('portfolio')
  .directive('skillsSection', skillsSection);

  function skillsSection() {
    return {
      templateUrl: 'templates/skills-section.html',
      restrict: 'E',
      replace: true,
      scope: {
        number: '@',
        skillname: '@',
        technologies: '=',
      },
      link: function(scope, element, attributes) {
        element.on('click', function(event) {
          scope.$parent.$parent.submitted = true;
          scope.$parent.$parent.current = attributes;
          scope.$apply();
          element.children().html('');
        });

      }
    };
  }
