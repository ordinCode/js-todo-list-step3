import { $store } from "/js/store/index.js";

export class MemberController {
  constructor() {}

  loadMembers(teamId) {
    const membersByTeamId = $store.team.findMembersByTeamId(teamId);
    console.log(membersByTeamId);
  }
}
