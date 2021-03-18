import { api } from "../index.js";

export const teamApi = {
  async saveTeam(name) {
    return await api.post("/api/teams", { name });
  },
};
