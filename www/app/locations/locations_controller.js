(function() {
  'use strict';

  angular.module('exampleApp').controller('LocationController', LocationController);

  LocationController.$inject = ['EliteApi'];

  function LocationController(EliteApi) {
    var vm = this;

    var data = EliteApi.getLeagueData();
    vm.locations = data.locations;

  }

})();