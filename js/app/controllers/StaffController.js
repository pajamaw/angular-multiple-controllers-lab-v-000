function StaffController(){
  this.name = 'staff';
  this.email = 'info@staff.com';
  this.phone = '2020202222'
}

angular
  .module('app')
  .controller('StaffController', StaffController)