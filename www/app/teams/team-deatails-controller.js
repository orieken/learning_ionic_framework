

(function () {
  'use strict';

  angular.module('exampleApp').controller('TeamDetailController', TeamDetailController);

  TeamDetailController.$inject = ['$stateParams', 'EliteApi'];

  function TeamDetailController($stateParams, EliteApi) {
    var vm = this;

    vm.teamId = Number($stateParams.id);
    var data = EliteApi.getLeagueData();

    console.log(data.teams)
    console.log(data.teams[0].divisionTeams)

    var team = _.chain(data.teams)
      .flatten("divisionTeams")
      //.find({ "id": vm.teamId }).value();

    console.log(_.findWhere(team, { "id": vm.teamId}, 'name' ));



    //vm.teamName = team.name;
    vm.games = _.chain(data.games).filter(isTeamInGame).map(function(item){
      var isTeam1 = (item.team1Id === vm.teamId);
      var opponentName = isTeam1 ? item.team2 : item.team1;
      var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score);
      return {
        gameId: item.id,
        opponent: opponentName,
        time: item.time,
        location: item.location,
        locationUrl: item.locationUrl,
        scoreDisplay: scoreDisplay,
        homeAway: (isTeam1 ? "vs " : "at")
      };

    }).value()

    function isTeamInGame(item) {
      return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
    }

    function getScoreDisplay(isTeam1, team1Score, team2Score) {
      if (team1Score && team2Score) {
        var teamScore = (isTeam1 ? team1Score : team2Score);
        var opponentScore = (isTeam1 ? team2Score : team1Score);
        var winIndicator = teamScore > opponentScore ? "W: " : "L ";

        return winIndicator + teamScore + "-" + opponentScore;
      }
      else {
        return "";
      }
    }


  }

})();