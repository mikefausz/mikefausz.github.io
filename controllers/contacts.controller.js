angular
  .module('portfolio')
  .controller('ContactsController', function($scope, ContactsService) {
    $scope.contacts = ContactsService.getContacts();
    window.contacts = $scope.contacts;
    console.log("Contacts CONTROLLER");

});
