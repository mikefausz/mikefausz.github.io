
angular
  .module('portfolio', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      })
      .when('/projects', {
        templateUrl: "templates/projects.html",
        controller: 'HomeController'
      })
      .when('/project/:number', {
        templateUrl: "templates/listing.html",
        controller: 'HomeController'
      })
      .when('/skills', {
        templateUrl: "templates/skills.html",
        controller: 'SkillsController'
      })
      .when('/about', {
        templateUrl: "templates/about.html",
        controller: 'HomeController'
      })
      .when('/contact', {
        templateUrl: "templates/contact.html",
        controller: 'ContactsController'
      });
  });
