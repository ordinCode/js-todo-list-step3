import { MemberController } from "./controller/TodoMemberController.js";
import { $store } from "./store/index.js";

const memberController = new MemberController();
console.log($store.team.currentTeamId);
memberController.loadMembers($store.team.currentTeamId);
