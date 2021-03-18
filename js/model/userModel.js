'use strict';

import { userApi } from '../api/userApi.js';

export default class UserMode {
  constructor() {
    this.userList = [];
    this.currentUserId = '';
  }

  loadUsers() {
    this.userList = userApi.getUsers();
    return this.userList;
  }

  getUserList() {
    return this.userList;
  }

  getCurrentUserId() {
    return this.currentUserId;
  }

  addUser(userName) {
    return userApi.addUser(userName);
  }

  deleteUser(userId) {
    return userApi.deleteUser(userId);
  }
}
