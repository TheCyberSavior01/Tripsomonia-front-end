import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  const setDisplayName = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      // setLoading(false);

    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {user,  signIn, createUser, logOut, setDisplayName };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
