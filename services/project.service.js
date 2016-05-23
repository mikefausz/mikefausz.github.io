angular
  .module('portfolio')
  .service('ProjectService', function($http, $q) {
    var projects = [
      {
        number: 0,
        name: "Chuckwagon",
        displayname: "CHUCKWAGON",
        tagline: "Find food trucks around Chucktown",
        summary: "Chuckwagon is an iOS app that maps food trucks near you.",
        description: "Users can follow their favorite trucks and search for trucks by keyword or food type.",
        elab: "Vendors can log in to update their current location and add daily specials.",
        tech: [5, 0],
        technologies: ["Ionic", "Google Maps API", "Cordova", "Gulp"],
        urls: ['https://mikefausz.github.io/chuckwagon/public/myApp/www/#/tab/home', 'https://github.com/mikefausz/chuckwagon'],
        color: 'rgba(37,155,205, .75)',
        font: "36px 'Bevan'",
        cover: '../images/projects/chuckwagon-header.png',
        box: '../images/projects/chuckwagon-box.png',
        header: '../images/projects/chuckwagon-header.png',
        images: ['../images/projects/chuckwagon-full.png', '../images/projects/chuckwagon-favs.png', '../images/projects/chuckwagon-search.png', '../images/projects/chuckwagon-login.png', '../images/projects/chuckwagon-prof.png',]
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
        technologies: ["AngularJS", "Bootstrap", "Etsy API", "Bower"],
        urls: ['/fartsy', 'https://github.com/mikefausz/fartsy'],
        color: 'rgba(252,91,4,.85)',
        font: "normal 48px 'Merriweather'",
        cover: "../images/projects/fartsy-header.png",
        box: '../images/projects/fartsy-box.png',
        header: '../images/projects/fartsy-header.png',
        images: ['images/projects/fartsy-full.png', 'images/projects/fartsy-search.png', 'images/projects/fartsy-detail.png', 'images/projects/fartsy-quant.png', 'images/projects/fartsy-cart.png']
      },
      {
        number: 2,
        name: "Honebrew",
        displayname: "HONEBREW",
        tagline: "Find great brews near you",
        summary: "Honebrew is a browser app that finds breweries near you.",
        description: "You can use your current location or search by city, state, or zip. You can also pick a search radius to filter results.",
        elab: "You can visit each brewery's website or open a Google Map to get directions.",
        tech: [3, 2],
        technologies: ["AJAX", "BreweryDB API", "Google Maps API", "Underscore.js"],
        urls: ['/honebrew', 'https://github.com/mikefausz/honebrew'],
        color: 'rgba(255, 188, 7, .85)',
        font: "48px 'Bree Serif'",
        // cover: "https://alopexadventures.com/wp-content/uploads/2015/06/Dollarphotoclub_56765387.jpg",
        cover: "../images/projects/honebrew-header.png",
        box: '../images/projects/honebrew-box.png',
        header: '../images/projects/honebrew-header.png',
        images: ['images/projects/honebrew-full.png', 'images/projects/honebrew-search.png', 'images/projects/honebrew-list.png', 'images/projects/honebrew-link.png', 'images/projects/honebrew-directions.png']
      },
      {
        number: 3,
        name: "Minesweeper",
        displayname: "MINESWEEPER",
        tagline: "An Angular recreation of the classic game",
        summary: "Minesweeper is an Angular recreation of the classic puzzle game.",
        description: "Click squares to reveal their contents. Clues indicate the number of adjacent mines.",
        elab: "Flag squares you know to be dangerous. Uncover all the safe squares to win.",
        tech: [0, 9],
        technologies: ["AngularJS", "HTML5", "Sass"],
        urls: ['/minesweeper', 'https://github.com/mikefausz/minesweeper'],
        color: 'rgba(0,128,128,.85)',
        font: "normal 40px 'Raleway'",
        // cover: "https://c1.staticflickr.com/7/6183/6132449424_386eee552f_b.jpg",
        box: '../images/projects/minesweeper-box.png',
        header: '../images/projects/minesweeper-header.png',
        images: ['../images/projects/minesweeper-full.png', '../images/projects/minesweeper-click.png', '../images/projects/minesweeper-numbers.png', '../images/projects/minesweeper-flags.png', '../images/projects/minesweeper-bomb.png',]
      },
      {
        number: 4,
        name: "Fetch!",
        displayname: "Fetch!",
        tagline: "An anything delivery service",
        summary: "Fetch! is an Uber-interface browser app that allows users to post requests for pickup.",
        description: "Users can post multiple requests, view their open and pending requests, and complete requests upon delivery.",
        elab: "Drivers can see view and accept open requests, as well as requests they've already accepted.",
        tech: [4, 2],
        technologies: ["AJAX", "Underscore.js", "jQuery"],
        urls: ['http://ec2-52-201-38-61.compute-1.amazonaws.com:4567/', 'https://github.com/mikefausz/fetch'],
        color: 'rgba(19, 67, 123, .85)',
        font: "56px 'Lobster'",
        // cover: "https://images.unsplash.com/photo-1456143077270-30de0a1bf7bc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=14f25f544fa8452539c73d46e667a6db",
        cover: "../images/projects/fetch-header.png",
        box: '../images/projects/fetch-box.png',
        header: '../images/projects/fetch-header.png',
        images: ['images/projects/fetch-full.png', 'images/projects/fetch-new.png', 'images/projects/fetch-user.png', 'images/projects/fetch-accept.png', 'images/projects/fetch-driver.png']
      },

      {
        number: 5,
        name: "Powell-Peralta",
        displayname: "POWELL-PERALTA",
        tagline: "An American skateboard company founded by George Powell and Stacy Peralta in 1978.",
        summary: "Powell-Peralta is a pixel perfect webpage built from a mockup image",
        description: "It's action-packed with a pure CSS slideshow and all sorts of animations.",
        elab: "It's fully responsive too, so it looks great on all devices.",
        tech: [8, 6],
        technologies: ["HTML5", "CSS3", "Sass"],
        urls: ['/powell-peralta','https://github.com/mikefausz/powell-peralta'],
        color: 'rgba(180,41,46, .85)',
        font: "700 36px 'Open Sans'",
        cover: "../images/projects/powellperalta-header.png",
        box: '../images/projects/powellperalta-box.png',
        header: '../images/projects/powellperalta-header.png',
        images: ["../images/projects/powellperalta-full.png", "../images/projects/powellperalta-slider.png", "../images/projects/powellperalta-anim.png", "../images/projects/powellperalta-iphone.png", "../images/projects/powellperalta-ipad.png"]
      },
      {
        number: 6,
        name: "Todos",
        displayname: "todos",
        tagline: "A simple todo list app",
        summary: "Todos is a simple todo-list browser app",
        description: "You can add new items to your list, and check off the ones you've completed.",
        elab: "You can sort your list by active or completed, and clear completed items from the list.",
        tech: [3, 8],
        technologies: ['Underscore.js', 'Sass', 'Bower'],
        urls: ['/todos', 'https://github.com/mikefausz/todos'],
        color: 'rgba(90, 85, 85, .85)',
        font: "54px 'Yantramanav', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, sans-serif",
        cover: "../images/projects/todos-header.png",
        box: '../images/projects/todos-box.png',
        header: '../images/projects/todos-header.png',
        images: ['../images/projects/todos-full.png', '../images/projects/todos-new.png', '../images/projects/todos-complete.png', '../images/projects/todos-active.png', '../images/projects/todos-completed.png']
      },
      {
        number: 7,
        name: "Big Buck Hunter",
        displayname: "BIG BUCK HUNTER",
        tagline: "An Iron Yard Academy Project Est Fall 2013",
        summary: "Big Buck Hunter is a JavaScript rendition of a barroom favorite.",
        description: "You can choose from three different hunters, weapons, and locations.",
        elab: "The critters can be shy, so you can drink beer to pass the time. But drink too many and you might miss your shot.",
        tech: [4, 7],
        technologies: ["CSS3", "jQuery", "OOP"],
        urls: ['/big-buck-hunter', 'https://github.com/mikefausz/big-buck-hunter'],
        color: 'rgba(103,103,47,.85)',
        font: "normal 38px 'Permanent Marker'",
        // cover: "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=7b6f9191e6a631a54b2e09ba6a2f06e6",
        cover: "../images/projects/bigbuck-header.png",
        box: '../images/projects/bigbuck-box.png',
        header: '../images/projects/bigbuck-header.png',
        images: ['../images/projects/bigbuck-full.png', '../images/projects/bigbuck-hunter.png', '../images/projects/bigbuck-weapon.png', '../images/projects/bigbuck-buck.png', '../images/projects/bigbuck-goteem.png']
      },
      // {
      //   number: 8,
      //   name: "Surf & Paddle Co.",
      //   displayname: "SURF & PADDLE CO.",
      //   tagline: "An Iron Yard Academy Project Est Fall 2013",
      //   summary: "Surf & Paddle Co. is a pixel perfect webpage built from a mockup image",
      //   description: "It's loaded with CSS animations and Bill Murray filler photos.",
      //   elab: "It's fully responsive too, so it looks great on all devices.",
      //   tech: [8, 6],
      //   technologies: ["HTML5", "CSS3", "Sass", "fillmurray"],
      //   urls: ['/surf-and-paddle', 'https://github.com/mikefausz/surf-and-paddle'],
      //   color: 'rgba(20,111,179,.85)',
      //   font: "normal 38px 'Open Sans'",
      //   // cover: "https://wizardofspa.files.wordpress.com/2013/04/awesomely-ocean-waves.jpg",
      //   cover: "../images/projects/surfpaddle-header.png",
      //   box: '../images/projects/surfpaddle-box.png',
      //   header: '../images/projects/surfpaddle-header.png',
      //   images: ['../images/projects/surfpaddle-full.png', '../images/projects/surfpaddle-anim.png', '../images/projects/surfpaddle-bill.png', '../images/projects/surfpaddle-iphone.png', '../images/projects/surfpaddle-ipad.png']
      // },
      // {
      //   number: 9,
      //   name: "Be Mime",
      //   displayname: "be mime",
      //   tagline: "A dating site for quiet types",
      //   summary: "Be Mime is a dating site for quiet types.",
      //   description: "Users can create a dating profile and view other users' profiles.",
      //   elab: "They can follow the users they ad-mime-r and see who's admimering them.",
      //   tech: [1, 9],
      //   url: '',
      //   color: 'rgba(71, 1, 1, .85)',
      //   font: "50px 'Josefin Sans'",
      //   // cover: "http://gidbn.sites.caxton.co.za/wp-content/uploads/sites/96/2014/06/Sibo-Masondo-1.jpg",
      //   cover: "../images/projects/bemime-header.png",
      //   box: '../images/projects/bemime-box.png',
      //   header: '../images/projects/bemime-header.png',
      //   images: ['../images/projects/bemime-full.png']
      // },
      // {
      //   number: 10,
      //   name: "Butters",
      //   displayname: "butters",
      //   tagline: "Oh, Hamburgers!",
      //   summary: "Butters is a Twitter clone built specially for South Park's most lovable milquetoast.",
      //   description: "You can view all his past tweets or add new ones.",
      //   elab: "You can also edit or delete existing tweets.",
      //   tech: [1, 9],
      //   url: '',
      //   color: 'rgba(84,172,236, .85)',
      //   font: "50px 'Montserrat'",
      //   // cover: "https://thenpbhive.files.wordpress.com/2009/11/sp813_cartmans_incredible_gift.jpg",
      //   cover: "../images/projects/butters-header.png",
      //   box: '../images/projects/butters-box.png',
      //   header: '../images/projects/butters-header.png',
      //   images: ['../images/projects/butters-full.png']
      // },
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
