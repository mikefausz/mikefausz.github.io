angular
  .module('portfolio')
  .service('SkillsService', function($http, $q) {
    var skills = [
      {
        number: 0,
        skillname: "JavaScript",
        color: '#FFFA6C',
        technologies: [
          {
            name: "AngularJS",
            icon: "https://lh3.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w1012-h1072/AngularJS-Shield-large.png",
            link: "",
          },
          {
            name: "Backbone.JS",
            icon: "http://www.codeforest.net/wp-content/uploads/2013/05/backbone.png",
            link: "",
          },
          {
            name: "AJAX",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/2000px-AJAX_logo_by_gengns.svg.png",
            link: "",
          },
          {
            name: "Underscore.js",
            icon: "http://brandonquintanaconsulting.com/img/services/underscore.png",
            link: "",
          },
          {
            name: "jQuery",
            icon: "https://pbs.twimg.com/profile_images/2192925422/jquery_logo_400x400.png",
            link: "",
          },
          {
            name: "Ionic",
            icon: "http://ionicframework.com/img/ionic-logo-blog.png",
            link: "",
          },
        ]
      },
      {
        number: 1,
        skillname: "Web Development",
        color: '#62DBFF',
        technologies: [
          {
            name: "HTML5",
            icon: "https://image.freepik.com/free-icon/html-5-logo_318-53222.png",
            link: "",
          },
          {
            name: "CSS3",
            icon: "https://www.webreflection.co.uk/img/css3.svg",
            link: "",
          },
          {
            name: "Sass",
            icon: "http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
            link: "",
          },
          {
            name: "Bootstrap",
            icon: "https://worldvectorlogo.com/logos/bootstrap-4.svg",
            link: "",
          },
        ]
      },
      {
        number: 2,
        skillname: "Dev Tools",
        color: '#FF8882',
        technologies: [
          {
            name: "Bower",
            icon: "http://plainicon.com/dboard/userprod/2800_a1826/prod_thumb/plainicon.com-50189-512px-616.png",
            link: "",
          },
          {
            name: "npm",
            icon: "https://www.npmjs.com/static/images/npm-logo.svg",
            link: "",
          },
          {
            name: "Gulp",
            icon: "https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png",
            link: "",
          },
          {
            name: "Browserify",
            icon: "http://adamcolejenkins.com/images/browserify.png",
            link: "",
          },
        ]
      },
      {
        number: 3,
        skillname: "Other",
        color: '#85FFC1',
        technologies: [
          {
            name: "Java",
            icon: "http://icons.iconarchive.com/icons/icons8/windows-8/128/Programming-Java-Coffee-Cup-Logo-icon.png",
            link: "",
          },
          {
            name: "C",
            icon: "http://www.batracomputercentre.com/images/2222.png",
            link: "",
          },
          {
            name: "Command Line",
            icon: "https://cdn0.iconfinder.com/data/icons/octicons/1024/terminal-128.png",
            link: "",
          },
        ]
      },
    ];

    getSkills = function() {
      return skills;
    };

    getSkill = function(id) {
      console.log('id: ' + id);
      var selectedSkill;
      skills.forEach(function(skill) {
        console.log('skillId: ' + skill.number);
        if(skill.number === parseInt(id)) {
          console.log('true');
          selectedSkill = skill;
        }
      });
      console.log(selectedSkill);
      return selectedSkill;
    };

    return {
      getSkills: getSkills,
      getSkill: getSkill
    };
  });
