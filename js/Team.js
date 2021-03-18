import { TeamController } from "./controller/TeamController.js";
import { TeamView } from "./view/TeamView.js";
import { $store } from "./store/index.js";

const teamController = new TeamController();
await teamController.loadTeamList();

const teamView = new TeamView();
teamView.renderTeams($store.team.getTeams());
