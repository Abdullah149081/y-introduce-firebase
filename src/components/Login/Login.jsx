import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { app } from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handlerGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log("error", err?.message);
      });
  };

  return (
    <div className="text-center">
      <button className="btn" onClick={handlerGoogleSingIn}>
        Google Login
      </button>
    </div>
  );
};

export default Login;
