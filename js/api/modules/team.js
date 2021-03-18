import { api } from '../index.js';
import { Team } from '../../core/Team.js';

export const teamApi = {
  async saveTeam(name) {
    let team = await api.post('/api/teams', { name });
    return new Team(team);
  },

  async loadTeamList() {
    const teamList = await api.get('/api/teams');
    return teamList.map(team => new Team(team));
  },

  async deleteTeam(teamId) {
    await api.delete(`/api/teams/${teamId}`);
  },
};
