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
            id: 0,
            name: "AngularJS",
            icon: "images/icons/angular-icon.png",
            iconwidth: "150px",
            link: "#/project/6",
            color: "rgb(176,65,57)",
          },
          {
            id: 1,
            name: "Backbone.JS",
            icon: "images/icons/backbone-icon.png",
            iconwidth: "120px",
            link: "#/project/3",
            color: "rgb(4,115,179)",
          },
          {
            id: 2,
            name: "AJAX",
            icon: "images/icons/ajax-icon.png",
            iconwidth: "200px",
            link: "#/project/2",
            color: "rgb(4,132,204)",
          },
          {
            id: 3,
            name: "Underscore.js",
            icon: "images/icons/underscore-icon.png",
            iconwidth: "200px",
            link: "#/project/2",
            color: "rgb(4,60,92)"
          },
          {
            id: 4,
            name: "jQuery",
            icon: "images/icons/jquery-icon.png",
            iconwidth: "160px",
            link: "#/project/3",
            color: "rgb(28,163,203)"
          },
          {
            id: 5,
            name: "Ionic",
            icon: "images/icons/ionic-icon.png",
            iconwidth: "160px",
            link: "#/project/0",
            color: "rgb(76,140,252)"
          },
        ]
      },
      {
        number: 1,
        skillname: "Web Development",
        color: '#62DBFF',
        technologies: [
          {
            id: 6,
            name: "HTML5",
            icon: "images/icons/html5-icon.png",
            iconwidth: "130px",
            link: "#/project/4",
            color: "rgb(232,84,40)"
          },
          {
            id: 7,
            name: "CSS3",
            icon: "images/icons/css3-icon.png",
            iconwidth: "130px",
            link: "#/project/5",
            color: "rgb(15,125,197)"
          },
          {
            id: 8,
            name: "Sass",
            icon: "images/icons/sass-icon.png",
            iconwidth: "180px",
            link: "#/project/4",
            color: "rgb(204,100,156)"
          },
          {
            id: 1,
            name: "Bootstrap",
            icon: "images/icons/bootstrap-icon.png",
            iconwidth: "160px",
            link: "#/project/6",
            color: "rgb(89,59,127)"
          },
        ]
      },
      {
        number: 2,
        skillname: "Dev Tools",
        color: '#FF8882',
        technologies: [
          {
            id: 10,
            name: "Bower",
            icon: "images/icons/bower-icon.png",
            iconwidth: "180px",
            link: "#/project/1",
            color: "rgb(251,203,52)"
          },
          {
            id: 11,
            name: "npm",
            icon: "images/icons/npm-icon.png",
            iconwidth: "180px",
            link: "#/project/0",
            color: "rgb(204,60,52)"
          },
          {
            id: 12,
            name: "Gulp",
            icon: "images/icons/gulp-icon.png",
            iconwidth: "90px",
            link: "#/project/0",
            color: "rgb(235,75,83)"
          },
          {
            id: 13,
            name: "Browserify",
            icon: "images/icons/browserify-icon.png",
            iconwidth: "180px",
            link: "#/project/7",
            color: "rgb(61,108,147)"
          },
        ]
      },
      {
        number: 3,
        skillname: "Other",
        color: '#85FFC1',
        technologies: [
          {
            id: 14,
            name: "Java",
            icon: "images/icons/java-icon.png",
            iconwidth: "120px",
            link: "",
            color: "rgb(12,108,180)",
          },
          {
            id: 15,
            name: "GitHub",
            icon: "images/icons/github-icon.png",
            iconwidth: "140px",
            link: "https://github.com/mikefausz",
            color: "rgb(12,12,12)"
          },
          {
            id: 16,
            name: "Command Line",
            icon: "images/icons/command-icon.png",
            iconwidth: "120px",
            link: "",
            color: "rgb(12,12,12)"
          },
          {
            id: 17,
            name: "C",
            icon: "images/icons/c-icon.png",
            iconwidth: "110px",
            link: "",
            color: "rgb(104,142,234)"
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

    getTech = function(id) {
      console.log('selectid: ' + id);
      var selectedTech;

      angular.forEach(skills, function(skill) {
        console.log('skillId: ' + skill.number);

        angular.forEach(skill.technologies, function(tech) {
          console.log('techId: ' + tech.id);

          if(tech.id === id) {
            console.log('true');
            selectedTech = tech;
          }
        });
      });

      console.log(selectedTech);
      return selectedTech;
    };

    return {
      getSkills: getSkills,
      getSkill: getSkill,
      getTech: getTech
    };
  });
