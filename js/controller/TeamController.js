import { TeamService } from '../service/TeamService.js';
import { TeamView } from '../view/TeamView.js';
import { $store } from '../store/index.js';

export class TeamController {
  constructor() {
    console.log('init');
    this.$todoApps = document.querySelector('.team-list-container');
    this.$todoApps.addEventListener('click', this.onClickTeamCreateButton);
    this.teamService = new TeamService();
    this.teamView = new TeamView();
  }

  onClickTeamCreateButton = event => {
    const target = event.target;
    if (target.matches('.ripple')) {
      this.addTeam();
    }
    if (target.matches('.delete')) {
      this.deleteTeam(target);
    }
  };

  async addTeam() {
    const teamName = prompt('팀 이름을 입력해주세요.');
    if (!teamName) return;
    await this.teamService.saveTeam(teamName);
    this.teamView.renderTeams($store.team.getTeams());
  }

  async deleteTeam(target) {
    const teamId = target.closest('.team-card-container').dataset.id;
    await this.teamService.deleteTeam(teamId);
    this.teamView.renderTeams($store.team.getTeams());
  }

  async loadTeamList() {
    await this.teamService.loadTeamList();
  }
}
