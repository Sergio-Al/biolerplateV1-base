import { googleAuthProvider } from "../firebase/firebase";
import { signInWithPopup, getAuth, signOut } from "firebase/auth";

export const startLogin = () => {
  return () => {
    console.log("Accessing to startLoginAction");
    signInWithPopup(getAuth(), googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return signOut(getAuth());
  };
};
