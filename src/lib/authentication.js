import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./firebaseConfig";
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loadStorageAuth = () => {
      const sessionToken = sessionStorage.getItem("@Authfirebase: token");
      const sessionUser = sessionStorage.getItem("@Authfirebase: user");
      if (sessionToken && sessionUser) {
        setUser(sessionUser);
      }
      loadStorageAuth();
    };
  }, []);

  const userGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@Authfirebase: token", token);
        sessionStorage.setItem("@Authfirebase: user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //   const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  function singOut() {
    sessionStorage.clear();
    setUser(null);
    return <Navigate to="./Login" />;
  }

  return (
    <AuthGoogleContext.Provider
      value={{ userGoogle, singned: !!user, user, singOut }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
