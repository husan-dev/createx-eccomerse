import { IUser } from "@typess/auth";
import { makeAutoObservable } from "mobx";

class User {
  user: IUser | null = JSON.parse(localStorage.getItem("user") || "null");

  constructor() {
    makeAutoObservable(this);
  }
  updateUser(user: IUser) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }
  deleteUser() {
    this.user = null;
    localStorage.removeItem("user");
  }
}

const userStore = new User();
export default userStore;
