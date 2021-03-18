export class TeamStore {
  constructor() {
    this.teams = [];
    this.currentTeamId = '';
  }

  addTeams(teamList) {
    this.teams = teamList;
  }

  getTeams() {
    return this.teams;
  }
}
