import { saveSession } from "./../utils/authKeyStorageService";
import { types } from "mobx-state-tree";
import { getAccountInfo, signup } from "../api/authApi";
import { getUserById } from "../api/mainApi";

const User = types.model("User", {
  id: types.string,
  name: types.string,
  email: types.string,
  age: types.integer,
});

export const UserStore = types
  .model("UserStore")
  .props({
    user: types.maybeNull(User),
    isLoading: types.boolean,
  })
  .actions((self: any) => ({
    afterCreate: () => {
      setTimeout(() => {
        (self as any).syncAccount();
      }, 1000);
    },
    syncAccount: () => {
        self.isLoading = true;
      getAccountInfo().then(({ data: user }) => {
        self.user = User.create(user);
        self.isLoading = false;
      });
    },
    signup: (name: string, pass: string) => {
        self.isLoading = true;
      signup(name, pass)
        .then((response) => {
          saveSession(name, pass);
          self.isLoading = false;
          (self as any).syncAccount();
        })
        .catch(alert);
    },
  }));

export const initialUserStoreState = {
  user: null,
  isLoading: false,
};
