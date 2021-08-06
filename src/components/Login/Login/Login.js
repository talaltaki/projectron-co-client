import React, { useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { firebaseConfig } from "../firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  document.title = "Login to continue";

  const [setLoggedInUser] = useContext(UserContext);
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
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photo: photoURL };
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
    <div className="container">
      <div className="text-center" style={{ marginTop: "80px" }}>
        <Link to="/" className="text-decoration-none">
          <div className="font-logo fs-1 text-dark">
            projectron<span className="main-text">.co</span>
          </div>
        </Link>
        <div
          className="fs-3 fw-bold text-secondary"
          style={{ marginTop: "120px" }}
        >
          To Continue
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="btn rounded-0 shadow mt-4 py-2"
          style={{ width: "350px", borderBottom: "5px solid #536dfe" }}
        >
          <FcGoogle className="mb-1 me-2 fs-4" /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
