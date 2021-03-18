import { teamAddBtnTemplate, teamBtnTemplate } from "../utils/templates.js";

export class TeamView {
  constructor() {
    this.$teamListContainer = document.querySelector(".team-list-container");
  }

  renderTeams(teams) {
    this.$teamListContainer.innerHTML = teams
      .map((team) => teamBtnTemplate(team))
      .join("");
    this.$teamListContainer.insertAdjacentHTML("beforeend", teamAddBtnTemplate);
  }
}
