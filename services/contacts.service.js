angular
  .module('portfolio')
  .service('ContactsService', function() {
    var contacts = [
      {
        id: 0,
        name: "Gmail",
        icon: "images/icons/gmail-icon.png",
        iconwidth: "150px",
        link: "mailto:mcfausz@gmail.com?subject=You%27re%20Hired&body=Hey%20Mike!%0D%0DI%20just%20saw%20your%20website%20and%20I%27d%20like%20to%20meet%20you.",
        // link: "",
        color: "rgb(231,90,77)",
      },
      {
        id: 0,
        name: "Cell",
        icon: "images/icons/phone-icon.png",
        iconwidth: "90px",
        link: "tel:1-859-322-4082",
        // link: "",
        color: "rgb(12,12,12)",
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
        id: 0,
        name: "LinkedIn",
        icon: "images/icons/linkedin-icon.png",
        iconwidth: "130px",
        link: "https://www.linkedin.com/in/mikefausz",
        color: "rgb(4,100,156)",
      },
    ];

    getContacts = function() {
      return contacts;
    };

    return {
      getContacts: getContacts
    };
  });
