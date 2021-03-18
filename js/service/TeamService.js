import { teamApi } from '../api/modules/team.js';
import { $store } from '../store/index.js';

export class TeamService {
  constructor() {}

  async saveTeam(name) {
    const team = await teamApi.saveTeam(name);
    $store.team.addTeam(team);
  }

  async loadTeamList() {
    const teamList = await teamApi.loadTeamList();
    $store.team.addAllTeams(teamList);
  }

  async deleteTeam(teamId) {
    await teamApi.deleteTeam(teamId);
    $store.team.deleteTeam(teamId);
  }
}
