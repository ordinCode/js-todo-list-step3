export class TeamStore {
  constructor() {
    this.teams = [];
    this.currentTeamId = '';
  }

  addTeam(team) {
    this.teams.push(team);
  }

  addAllTeams(teamList) {
    this.teams = teamList;
  }

  getTeams() {
    return this.teams;
  }

  deleteTeam(teamId) {
    this.teams = this.teams.filter(({ _id }) => _id !== teamId);
  }
}
