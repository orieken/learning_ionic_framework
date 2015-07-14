(function () {
  'use strict';

  angular.module('exampleApp').controller('TeamDetailController', TeamDetailController);

  TeamDetailController.$inject = ['$stateParams'];

  function TeamDetailController($stateParams) {
    var vm = this;


    console.log('state params = ', $stateParams)
  }

})();