'use strict';

import { $ } from '../utils/dom.js';
import {
  userButtonTemplate,
  addDeleteButtonTemplate,
  userTitleTemplate,
} from '../layout/templates.js';

export default class UserListView {
  constructor() {
    this.$userList = $('#user-list');
    this.$userTitle = $('#user-title');
  }

  renderUserBtns(users) {
    const buttons = users.map(userButtonTemplate);
    this.$userList.innerHTML = buttons.join('\n') + addDeleteButtonTemplate();
    const $firstUser = this.$userList.firstChild;
    const firstUserName = $firstUser.innerText;
    this.activeUserBtn($firstUser);
    this.renderUserTitle(firstUserName);
  }

  renderUserTitle(userName) {
    this.$userTitle.innerHTML = userTitleTemplate(userName);
  }

  activeUserBtn(target) {
    target.classList.add('active');
  }

  deactiveUserBt(target) {
    target.classList.remove('active');
  }
}
