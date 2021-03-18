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
    console.log('onClickTeamCreateButton');
    this.addTeam();
  };

  async addTeam() {
    const teamName = prompt('팀 이름을 입력해주세요.');
    if (!teamName) return;
    await this.teamService.saveTeam(teamName);
    this.teamView.renderTeamsBtn($store.team.getTeams());
  }

  loadTeamList() {
    this.teamService.loadTeamList();
  }
}
