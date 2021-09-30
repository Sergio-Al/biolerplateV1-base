import { googleAuthProvider } from "../firebase/firebase";
import { signInWithPopup, getAuth } from "firebase/auth";

export const startLogin = () => {
  return () => {
    console.log("Accessing to startLoginAction");
    signInWithPopup(getAuth(), googleAuthProvider);
  };
};
