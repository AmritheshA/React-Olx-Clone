import React, { useState, useEffect, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const GlobalAuthContext = createContext();

function AuthContext({ children }) {
  const [user, setuser] = useState({});

  async function signUp(email, password, displayName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: displayName });
      return userCredential;
    } catch (error) {
      throw error;
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const authentication = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });

    return () => {
      authentication();
    };
  });

  return (
    <GlobalAuthContext.Provider value={{ user, signUp, login, logOut }}>
      {children}
    </GlobalAuthContext.Provider>
  );
}

export default AuthContext;

export function UserAuthConsumer() {
  return useContext(GlobalAuthContext);
}
