export class TeamController {
  constructor() {
    console.log("init");
    this.$todoApps = document.querySelector(".team-list-container");
    this.$todoApps.addEventListener("click", this.onClickTeamCreateButton);
  }

  onClickTeamCreateButton(event) {
    console.log(event.target);
    console.log("click");
  }
}
