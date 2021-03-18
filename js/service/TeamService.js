import {teamApi} from "../api/modules/team.js";

export class TeamService {
  constructor() {
  }

  async savaTeam(name) {
    const team = await teamApi.saveTeam(name);
    console.log(team);
  }

}
