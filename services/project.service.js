angular
  .module('portfolio')
  .service('ProjectService', function($http, $q) {
    var projects = [
      {
        number: 0,
        name: "Chuckwagon",
        displayname: "CHUCKWAGON",
        tagline: "Find food trucks around Chucktown",
        summary: "Chuckwagon is an iOS app that maps of food trucks near you.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        elab: "You can update quantity or remove items from your cart.",
        tech: [5, 0],
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
        summary: "Fartsy is a pseudo-eCommerce browser app built with the Etsy API.",
        description: "You can search by keyword, see a detailed view of each item, and add items to your cart.",
        elab: "You can update quantity or remove items from your cart.",
        tech: [0, 9],
        url: '/fartsy',
        color: 'rgba(252,91,4,.85)',
        font: "normal 48px 'Merriweather'",
        cover: "https://images.unsplash.com/photo-1454873019514-eae2f086587a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=c18a396c481845cce89abb6a9e0e9257",
        images: ['images/projects/fartsy-full.png', 'images/projects/fartsy-search.png', 'images/projects/fartsy-detail.png', 'images/projects/fartsy-cart.png']
      },
      {
        number: 2,
        name: "Honebrew",
        displayname: "HONEBREW",
        tagline: "Find great brews near you",
        summary: "Honebrew is a browser app that finds breweries near you.",
        description: "You can use your current location or search for breweries by city, state, or zip. You can also pick a search radius to filter results.",
        elab: "You can visit each brewery's website or open a Google Map to get directions.",
        tech: [3, 2],
        url: '/honebrew',
        color: 'rgba(255, 188, 7, .85)',
        font: "48px 'Bree Serif'",
        cover: "https://alopexadventures.com/wp-content/uploads/2015/06/Dollarphotoclub_56765387.jpg",
        images: ['images/projects/honebrew-full.png', 'images/projects/honebrew-search.png', 'images/projects/honebrew-list.png', 'images/projects/honebrew-link.png', 'images/projects/honebrew-directions.png']
      },
      {
        number: 3,
        name: "Fetch!",
        displayname: "Fetch!",
        tagline: "An anything delivery service",
        summary: "Fetch! is an Uber-interface browser app that allows users to post open requests for drivers to view and accept, and cancel them or remove them upon fulfillment.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        elab: "You can update quantity or remove items from your cart.",
        tech: [3, 2],
        url: '',
        color: 'rgba(19, 67, 123, .85)',
        font: "56px 'Lobster'",
        cover: "https://images.unsplash.com/photo-1456143077270-30de0a1bf7bc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=14f25f544fa8452539c73d46e667a6db",
        images: ['images/projects/fetch-full.png', 'images/projects/fetch-user.png', 'images/projects/fetch-driver.png']
      },

      {
        number: 4,
        name: "Powell-Peralta",
        displayname: "POWELL-PERALTA",
        tagline: "An American skateboard company founded by George Powell and Stacy Peralta in 1978.",
        summary: "Powell-Peralta is a fully responsive, pixel perfect webpage built from a mockup",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        elab: "You can update quantity or remove items from your cart.",
        tech: [8, 6],
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
        elab: "You can update quantity or remove items from your cart.",
        tech: [4, 7],
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
        elab: "You can update quantity or remove items from your cart.",
        tech: [8, 6],
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
        elab: "You can update quantity or remove items from your cart.",
        tech: [1, 9],
        url: '',
        color: 'rgba(71, 1, 1, .85)',
        font: "50px 'Josefin Sans'",
        cover: "http://gidbn.sites.caxton.co.za/wp-content/uploads/sites/96/2014/06/Sibo-Masondo-1.jpg",
        images: ['http://www.fillmurray.com/400/500']
      },
      {
        number: 8,
        name: "Todos",
        displayname: "todos",
        tagline: "A simple todo list app",
        summary: "A dating site for quiet types",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        elab: "You can update quantity or remove items from your cart.",
        tech: [3, 8],
        url: '',
        color: 'rgba(90, 85, 85, .85)',
        font: "54px 'Yantramanav', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, sans-serif",
        cover: "",
        images: ['http://www.fillmurray.com/400/500']
      },
      {
        number: 9,
        name: "Butters",
        displayname: "butters",
        tagline: "tagline",
        summary: "A dating site for quiet types",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        elab: "You can update quantity or remove items from your cart.",
        tech: [1, 9],
        url: '',
        color: 'rgba(84,172,236, .85)',
        font: "50px 'Montserrat'",
        cover: "https://thenpbhive.files.wordpress.com/2009/11/sp813_cartmans_incredible_gift.jpg",
        images: ['http://www.fillmurray.com/400/500']
      },
    ];

    getProjects = function() {
      return projects;
    };

    getProject = function(id) {
      // console.log('id: ' + id);
      var selectedProject;
      projects.forEach(function(project) {
        // console.log('projectId: ' + project.number);
        if(project.number === parseInt(id)) {
          // console.log('true');
          selectedProject = project;
        }
      });
      // console.log(selectedProject);
      return selectedProject;
    };

    return {
      getProjects: getProjects,
      getProject: getProject
    };
  });
