angular
  .module('portfolio')
  .service('HomeService', function() {
    var mikes = ["Bike", "Dyke", "Hike", "Ike", "Like", "Pike", "Spike", "Strike", "Tike", "Trike"];
    var fauszs = ["Blouse", "Dowse", "Gauss", "Grouse", "Klaus", "Laos", "Louse", "Mouse", "Spouse", "Strauss"];

    getMikes = function() {
      return mikes;
    };

    getFauszs = function() {
      return fauszs;
    };

    return {
      getMikes: getMikes,
      getFauszs: getFauszs
    };
  });
