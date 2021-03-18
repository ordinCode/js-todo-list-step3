'use strict';

import { $ } from '../utils/dom.js';
import UserListView from '../view/userListView.js';
import UserModel from '../model/userModel.js';
import { ElementValidator } from '../utils/validator.js';
import {
  FILTER_TYPE,
  MINIMUM_USER_NAME_LENGTH,
} from '../constant/constants.js';
import {
  INPUT_USER_NAME,
  ALERT_USER_NAME,
  DELETE_USER,
} from '../constant/message.js';

export default class UserListController {
  constructor() {
    this.userListView = new UserListView();
    this.userModel = new UserModel();
    this.userListView.$userList.addEventListener('click', this.onClickUserList);
  }

  onClickUserList = ({ target }) => {
    if (ElementValidator.isNotRipple(target)) {
      return;
    }
    if (ElementValidator.isAddUserBtn(target)) {
      return this.addUser();
    }
    if (ElementValidator.isDeleteUserBtn(target)) {
      return this.deleteUser(target);
    }
    this.selectUserBtn(target);
  };

  loadUsers(userId) {
    this.userModel.loadUsers().then(users => {
      this.userListView.renderUserBtns(users);
    });
    // if (userId) {
    //   this.userListView.activeUserBtn(userId);
    // }
  }

  selectUserBtn() {}

  addUser() {
    const userName = prompt(INPUT_USER_NAME);
    if (!userName) return;
    if (userName.length < MINIMUM_USER_NAME_LENGTH) {
      return alert(ALERT_USER_NAME);
    }
    this.userModel.addUser(userName).then(user => {
      this.loadUsers(user._id);
      console.log(user);
    });
  }

  deleteUser(target) {
    if (!confirm(DELETE_USER)) return;
    const userId = $('.active', this.$userList).id;
    console.log(userId);
    // this.userModel.deleteUser(userId).then(user => {
    //   this.loadUsers();
    //   console.log(user);
    // });
  }

  init() {
    console.log('UserListController-init');
    this.loadUsers();
  }
}
