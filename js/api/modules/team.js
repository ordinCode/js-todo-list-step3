import { api } from '../index.js';
import { Team } from '../../core/Team.js';

export const teamApi = {
  async saveTeam(name) {
    return await api.post('/api/teams', { name });
  },

  async loadTeamList() {
    const teamList = await api.get('/api/teams');
    return teamList.map(team => new Team(team));
  },
};
