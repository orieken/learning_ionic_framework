(function() {
  'use strict';

  angular.module('exampleApp').controller('StandingsController', StandingsController);

  StandingsController.$inject = ['EliteApi'];

  function StandingsController(EliteApi) {
    var vm = this;

    var data = EliteApi.getLeagueData();
    vm.standings = data.standings;

  }


})();