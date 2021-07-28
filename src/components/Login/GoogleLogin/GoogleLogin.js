import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { firebaseConfig } from "../firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";

const GoogleLogin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <section className="container">
      <button
        onClick={handleGoogleSignIn}
        className="btn rounded-0 shadow mt-4 py-2"
        style={{ width: "350px", borderBottom: "5px solid #536dfe" }}
      >
        <FcGoogle className="mb-1 me-2 fs-4" /> Login with Google
      </button>
    </section>
  );
};

export default GoogleLogin;
