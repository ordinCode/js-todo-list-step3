import { Member } from "/js/store/modules/member.js";
import { TodoItem } from "/js/store/modules/todoItem.js";
import { TeamStore } from "./modules/team.js";

class Store {
  constructor() {
    this.member = new Member();
    this.todoItem = new TodoItem();
    this.team = new TeamStore();
  }
}

export const $store = new Store();
