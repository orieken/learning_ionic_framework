(function() {
  'use strict';

  angular.module('exampleApp').controller('LeaguesController', LeaguesController);

  LeaguesController.$inject = ['EliteApi', '$state'];

  function LeaguesController(EliteApi, $state) {
    var vm = this;

    vm.leagues = EliteApi.getLeague();

    vm.selectLeague= function(leagueId) {
      // get correct league
      $state.go("app.teams");
    };

  }
})();