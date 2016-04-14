
String.prototype.shuffle = function () {
var a = this.split(""),
  n = a.length;

for(var i = n - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}
return a.join("");
};


$(document).ready(function() {
  app.init();
});

var app = {

  first: 'mike',
  last: 'fausz',

  init: function() {
    app.initStyling();
    app.initEvents();
  },

  initStyling: function() {
    console.log('styling');
    app.setLogoName();
  },

  initEvents: function() {
    console.log('works here');
    var intervalID;
    $('#logo-name').hover(
      function(event) {
        event.preventDefault();
        intervalID = window.setInterval(function() {
          $('#logo-name').html(app.first.shuffle() + ' ' + app.last.shuffle());
        }, 500);
      },
      function(event) {
        event.preventDefault();
        console.log('DUDE');
        clearInterval(intervalID);
    });

    $('#logo-name').click(function(event) {
      event.preventDefault();
      app.setLogoName();
    });

  },

  setLogoName: function() {
    $('#first').html(app.first);
    $('#last').html(app.last);
  },

  shuffleName: function(first, last) {
    return first.shuffle() + ' ' + last.shuffle();
  }
};
