import store from "./store/store";

export const requireAuth = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
  } else {
    next({ name: "login" });
  }
};
