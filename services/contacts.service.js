angular
  .module('portfolio')
  .service('ContactsService', function() {
    var contacts = [
      {
        id: 0,
        name: "Gmail",
        icon: "images/icons/gmail-icon.png",
        iconwidth: "150px",
        // link: "mailto:mcfausz@gmail.com, subject=You're%20Hired&body=Hey-Mike",
        link: "",
        color: "rgb(231,90,77)",
      },
      {
        id: 0,
        name: "Phone",
        icon: "images/icons/phone-icon.png",
        iconwidth: "100px",
        // link: "tel:1-859-322-4082",
        link: "",
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
