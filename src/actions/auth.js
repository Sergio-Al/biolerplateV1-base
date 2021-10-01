import { googleAuthProvider } from "../firebase/firebase";
import { signInWithPopup, getAuth, signOut } from "firebase/auth";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  return () => {
    signInWithPopup(getAuth(), googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogout = () => {
  return () => {
    return signOut(getAuth());
  };
};
