export class TeamController {
  constructor() {
    console.log('init');
    this.$todoApps = document.querySelector('.team-list-container');
    this.$todoApps.addEventListener('click', this.onClickTeamCreateButton);
  }

  onClickTeamCreateButton = event => {
    console.log('onClickTeamCreateButton');
    this.addTeam();
  };

  addTeam() {
    const teamName = prompt('팀 이름을 입력해주세요.');
    if (!teamName) return;
  }
}
