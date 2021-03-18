import { teamApi } from '../api/modules/team.js';
import { $store } from '../store/index.js';

export class TeamService {
  constructor() {}

  async saveTeam(name) {
    const team = await teamApi.saveTeam(name);
    console.log(team);
  }

  async loadTeamList() {
    const teamList = await teamApi.loadTeamList();
    $store.team.addTeams(teamList);
  }
}
