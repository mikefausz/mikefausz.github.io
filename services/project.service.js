angular
  .module('portfolio')
  .service('ProjectService', function($http, $q) {
    var projects = [
      {
        number: 0,
        name: "Chuckwagon",
        displayname: "CHUCKWAGON",
        tagline: "Find food trucks around Chucktown",
        summary: "Chuckwagon is an iOS app that displays interactive maps of food trucks near the user’s location.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tech: ["Ionic", "AngularJS", "Google Maps API", "Design"],
        // url: '/chuckwagon/public/myApp/www/#/tab/home',
        url: 'https://mikefausz.github.io/chuckwagon/public/myApp/www/#/tab/home',
        color: 'rgba(37,155,205, .75)',
        font: "36px 'Bevan'",
        cover: '../images/mapwide.png',
        images: ['http://www.fillmurray.com/400/500']
      },
      {
        number: 1,
        name: "Fartsy",
        displayname: "Fartsy",
        tagline: "Fartsy is a browser based e-commerce app",
        summary: "Surf & Paddle Co. is a fully responsive, pixel perfect webpage built from a mockup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tech: ["AngularJS", "etsy API", "Bootstrap"],
        url: '/fartsy',
        color: 'rgba(252,91,4,.85)',
        font: "normal 48px 'Merriweather'",
        cover: "https://images.unsplash.com/photo-1454873019514-eae2f086587a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=c18a396c481845cce89abb6a9e0e9257",
        images: ['http://www.fillmurray.com/400/500']
      },
      {
        number: 2,
        name: "Honebrew",
        displayname: "HONEBREW",
        tagline: "Find great brews near you",
        summary: "Honebrew is a browser app that uses the BreweryDB API to generate a map of breweries within the given radius of the user’s location.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tech: ["jQuery", "AJAX", "Google Maps API", "BreweryDB API"],
        url: '/honebrew',
        color: 'rgba(255, 188, 7, .85)',
        font: "48px 'Bree Serif'",
        cover: "https://alopexadventures.com/wp-content/uploads/2015/06/Dollarphotoclub_56765387.jpg",
        images: ['http://www.fillmurray.com/400/500']
      },
      {
        number: 3,
        name: "Fetch!",
        displayname: "Fetch!",
        tagline: "An anything delivery service",
        summary: "Fetch! is an Uber-interface browser app that allows users to post open requests for drivers to view and accept, and cancel them or remove them upon fulfillment.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tech: ["jQuery", "AJAX", "CSS/Sass", "Design"],
        url: '',
        color: 'rgba(19, 67, 123, .85)',
        font: "56px 'Lobster'",
        cover: "https://images.unsplash.com/photo-1456143077270-30de0a1bf7bc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=14f25f544fa8452539c73d46e667a6db",
        images: ['http://www.fillmurray.com/400/500']
      },

      {
        number: 4,
        name: "Powell-Peralta",
        displayname: "POWELL-PERALTA",
        tagline: "An American skateboard company founded by George Powell and Stacy Peralta in 1978.",
        summary: "Powell-Peralta is a fully responsive, pixel perfect webpage built from a mockup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tech: ["HTML", "CSS/Sass", "Responsive Design"],
        url: '/powell-peralta',
        color: 'rgba(180,41,46, .85)',
        font: "700 36px 'Open Sans'",
        cover: '../images/bg copy.jpg',
        images: ['http://www.fillmurray.com/400/500']
      },
      {
        number: 5,
        name: "Big Buck Hunter",
        displayname: "BIG BUCK HUNTER",
        tagline: "An Iron Yard Academy Project Est Fall 2013",
        summary: "Big Buck Hunter is my JavaScript rendition of a barroom favorite.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tech: ["JavaScript", "OOP"],
        url: '/big-buck-hunter',
        color: 'rgba(103,103,47,.85)',
        font: "normal 38px 'Permanent Marker'",
        cover: "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=7b6f9191e6a631a54b2e09ba6a2f06e6",
        images: ['http://www.fillmurray.com/400/500']
      },
      {
        number: 6,
        name: "Surf & Paddle Co.",
        displayname: "SURF & PADDLE CO.",
        tagline: "An Iron Yard Academy Project Est Fall 2013",
        summary: "Surf & Paddle Co. is a fully responsive, pixel perfect webpage built from a mockup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tech: ["HTML", "CSS/Sass", "Responsive Design", "FillMurray"],
        url: '/surf-and-paddle',
        color: 'rgba(20,111,179,.85)',
        font: "normal 38px 'Open Sans'",
        cover: "https://wizardofspa.files.wordpress.com/2013/04/awesomely-ocean-waves.jpg",
        images: ['http://www.fillmurray.com/400/500']
      },
      {
        number: 7,
        name: "Be Mime",
        displayname: "be mime",
        tagline: "tagline",
        summary: "A dating site for quiet types",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tech: ["BackboneJS", "Bootstrap", "CSS/Sass", "Design"],
        url: '',
        color: 'rgba(71, 1, 1, .85)',
        font: "50px 'Josefin Sans'",
        cover: "http://gidbn.sites.caxton.co.za/wp-content/uploads/sites/96/2014/06/Sibo-Masondo-1.jpg",
        images: ['http://www.fillmurray.com/400/500']
      },
    ];

    getProjects = function() {
      return projects;
    };

    getProject = function(id) {
      console.log('id: ' + id);
      var selectedProject;
      projects.forEach(function(project) {
        console.log('projectId: ' + project.number);
        if(project.number === parseInt(id)) {
          console.log('true');
          selectedProject = project;
        }
      });
      console.log(selectedProject);
      return selectedProject;
    };

    return {
      getProjects: getProjects,
      getProject: getProject
    };
  });
