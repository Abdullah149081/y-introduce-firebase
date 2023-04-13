import { GoogleAuthProvider, getAuth } from "firebase/auth";
import React from "react";
import { app } from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handlerGoogleSingIn = () => {
    console.log("hi");
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
