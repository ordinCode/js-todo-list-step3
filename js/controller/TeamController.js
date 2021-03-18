import {TeamService} from "../service/TeamService.js";

export class TeamController {
  constructor() {
    console.log('init');
    this.$todoApps = document.querySelector('.team-list-container');
    this.$todoApps.addEventListener('click', this.onClickTeamCreateButton);
    this.teamService = new TeamService();
  }

  onClickTeamCreateButton = event => {
    console.log('onClickTeamCreateButton');
    this.addTeam();
  };

  addTeam() {
    const teamName = prompt('팀 이름을 입력해주세요.');
    if (!teamName) return;

    this.teamService.savaTeam(teamName);
  }
}
