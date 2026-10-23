import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./config";

export const auth = getAuth(app);

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};