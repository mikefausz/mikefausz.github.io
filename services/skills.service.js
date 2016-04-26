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
            icon: "images/angular-icon.png",
            iconwidth: "150px",
            link: "#/project/6",
            color: "rgb(176,65,57)",
          },
          {
            name: "Backbone.JS",
            icon: "images/backbone-icon.png",
            iconwidth: "120px",
            link: "#/project/3",
            color: "rgb(4,115,179)",
          },
          {
            name: "AJAX",
            icon: "images/ajax-icon.png",
            iconwidth: "200px",
            link: "#/project/2",
            color: "rgb(4,132,204)",
          },
          {
            name: "Underscore.js",
            icon: "images/underscore-icon.png",
            iconwidth: "200px",
            link: "#/project/",
            color: "rgb(4,60,92)"
          },
          {
            name: "jQuery",
            icon: "images/jquery-icon.png",
            iconwidth: "160px",
            link: "#/project/1",
            color: "rgb(28,163,203)"
          },
          {
            name: "Ionic",
            icon: "images/ionic-icon.png",
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
            name: "HTML5",
            icon: "images/html5-icon.png",
            iconwidth: "130px",
            link: "#/project/4",
            color: "rgb(232,84,40)"
          },
          {
            name: "CSS3",
            icon: "images/css3-icon.png",
            iconwidth: "130px",
            link: "#/project/5",
            color: "rgb(15,125,197)"
          },
          {
            name: "Sass",
            icon: "images/sass-icon.png",
            iconwidth: "180px",
            link: "#/project/4",
            color: "rgb(204,100,156)"
          },
          {
            name: "Bootstrap",
            icon: "images/bootstrap-icon.png",
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
            name: "Bower",
            icon: "images/bower-icon.png",
            iconwidth: "180px",
            link: "#/project/",
            color: "rgb(251,203,52)"
          },
          {
            name: "npm",
            icon: "images/npm-icon.png",
            iconwidth: "180px",
            link: "#/project/",
            color: "rgb(204,60,52)"
          },
          {
            name: "Gulp",
            icon: "images/gulp-icon.png",
            iconwidth: "90px",
            link: "#/project/0",
            color: "rgb(235,75,83)"
          },
          {
            name: "Browserify",
            icon: "images/browserify-icon.png",
            iconwidth: "180px",
            link: "#/project/",
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
            name: "Java",
            icon: "images/java-icon.png",
            iconwidth: "120px",
            link: "",
            color: "rgb(12,108,180)",
          },
          {
            name: "C",
            icon: "images/c-icon.png",
            iconwidth: "110px",
            link: "",
            color: "rgb(104,142,234)"
          },
          {
            name: "Command Line",
            icon: "images/command-icon.png",
            iconwidth: "120px",
            link: "",
            color: "rgb(12,12,12)"
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
