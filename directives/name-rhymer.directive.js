angular
  .module('portfolio')
  .directive('nameRhymer', nameRhymer);

  function nameRhymer() {
    return {
      templateUrl: 'templates/name-rhymer.html',
      restrict: 'E',
      replace: true,
      scope: {
        mikes: '=',
        fauszs: '=',
      },
      link: function(scope, element, attributes) {
        var jumblerInterval;
        element.on('mouseenter', function(event) {
          jumblerInterval = setInterval(function() {
            scope.random1 = Math.floor(Math.random() * 10);
            scope.random2 = Math.floor(Math.random() * 10);
            console.log(scope.random1);
            console.log(scope.random2);
            scope.$apply();
          }, 500);
        });
        element.on('mouseleave', function(event) {
          clearInterval(jumblerInterval);
        });
      }
    };
  }
