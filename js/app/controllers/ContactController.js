function ContactController(){
  var vm = this;

  this.name = 'PJ';
  this.email = 'me@jon.com';
  this.phone = '7202555555';
  this.changeName = function (){
    vm.name = 'PJ changed'
  };

}

angular
  .module('app')
  .controller('ContactController', ContactController)