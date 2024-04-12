import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { db } from "../firebase-config";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// initialize context
const userAuthContext = createContext();

// create a provider

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function signUp(email, password, userDetails) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: userDetails.name,
      authProvider: "local",
      role: userDetails.role,
      email,
    });
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  // fetch the user name from the database
  //   and adding it to the user object before setting it in the state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = collection(db, "users");
        const q = query(userRef, where("uid", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          setUser({ ...currentUser, name: userData.name, role: userData.role });
        });
      } else {
        setUser(currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

// to reuse for context consumption
export function useUserAuth() {
  return useContext(userAuthContext);
}
