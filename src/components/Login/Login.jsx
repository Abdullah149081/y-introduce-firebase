import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const [userGet, setUserGet] = useState(null);
  console.log(userGet);
  const provider = new GoogleAuthProvider();
  const handlerGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserGet(user);
      })
      .catch((err) => {
        console.log("error", err?.message);
      });
  };

  const handlerSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUserGet(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-center">
      <div>
        {!userGet ? (
          <button className="btn" onClick={handlerGoogleSingIn}>
            Google Login
          </button>
        ) : (
          <button onClick={handlerSignOut} className="btn">
            Sign Out
          </button>
        )}
      </div>
      <div className="mt-6 text-2xl font-bold">
        <h1>{userGet?.displayName}</h1>
      </div>
    </div>
  );
};

export default Login;
