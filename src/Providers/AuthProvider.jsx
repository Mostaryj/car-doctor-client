import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
// import axios from "axios";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const axiosSecure = useAxiosSecure();

  //sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //for logOut token
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);

      //if user exists then issue a token
      if (currentUser) {
        axios
          .post(
            "https://car-doctor-server-eta-lovat.vercel.app/jwt",
            loggedUser,
            { withCredentials: true }
          )
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post(
            "https://car-doctor-server-eta-lovat.vercel.app/logout",
            loggedUser,
            { withCredentials: true }
          )
          .then((res) => {
            console.log("token response from logOut", res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
//qiqajiq@mailinator.com
