(function() {
  'use strict';

  angular.module('exampleApp').controller('TeamsController', TeamsController);

  TeamsController.$inject = ['EliteApi'];

  function TeamsController(EliteApi) {
   var vm = this;

    var data = EliteApi.getLeagueData();
    vm.teams = data.teams;

  }
})();