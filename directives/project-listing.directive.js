angular
  .module('portfolio')
  .directive('projectListing', projectListing);

  function projectListing() {
    return {
      templateUrl: 'templates/project-listing.html',
      restrict: 'E',
      replace: true,
      scope: {
        number: '@',
        name: '@',
        displayname: '@',
        color: '@',
        font: '@',
        desc: '@',
        description: '@',
        tech: '@',
        url: '@',
        cover: '@',
        images: '@',
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
