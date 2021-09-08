import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { firebaseConfig } from "../firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = () => {
  document.title = "Login to continue";

  const classes = useStyles();

  const [loggedInUser, setLoggedInUser, user, setUser, newUser, setNewUser] =
    useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleBlur = (event) => {
    let isFieldValid = true;
    // Validation of Email and Password
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserName(user.name);
          if (res) {
            alert("User resgisterd successfully");
          }
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log("Signed in User Info", res.user);
          storeAuthToken();
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }
    event.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        // Update successful
        console.log("Username updated successfully");
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      });
  };

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
      <div className="text-center mt-2">
        <Link to="/" className="text-decoration-none">
          <div className="font-logo fs-1 text-dark">
            projectron<span className="main-text">.co</span>
          </div>
        </Link>
        <hr />
        <div className="fs-3 fw-bold text-secondary mt-2">To Continue</div>

        <section
          className="card mx-auto rounded-0 shadow mt-2 py-2"
          style={{
            width: "350px",
            borderBottom: "5px solid #536dfe",
            borderTop: "5px solid #536dfe",
          }}
        >
          <form className={classes.root}>
            {newUser ? (
              <>
                <div className="fs-5 fw-bold text-center text-primary mt-2">
                  Sign Up
                </div>
                <TextField
                  required
                  id="standard-required"
                  label="Your Email Address"
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                />
                <TextField
                  required
                  id="standard-password-input"
                  label="Your Password"
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Your Name"
                  onBlur={handleBlur}
                  type="text"
                  name="name"
                />
                <div class="d-grid gap-2 col-9 mx-auto mt-3">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="fs-6 mt-3">
                  Already registered?{" "}
                  <a
                    className="text-primary fw-bold"
                    href="#"
                    onClick={() => setNewUser(!newUser)}
                  >
                    Sign in
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="fs-5 fw-bold text-center text-primary mt-2">
                  Sign In
                </div>
                <TextField
                  required
                  id="standard-required"
                  label="Your Email Address"
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                />
                <br />
                <TextField
                  required
                  id="standard-password-input"
                  label="Your Password"
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                />
                <br />
                <div class="d-grid gap-2 col-9 mx-auto mt-3">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <div className="fs-6 mt-3">
                  Not registered yet?{" "}
                  <a
                    className="fw-bold"
                    href="#"
                    onClick={() => setNewUser(!newUser)}
                  >
                    Sign Up
                  </a>
                </div>
              </>
            )}
            <p className="text-danger">{user.error}</p>
            {user.success && (
              <p className="text-success fw-bold">
                User {newUser && "created"} successfully
              </p>
            )}
          </form>
        </section>
        <div className="fs-5 fw-bold mt-2">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn rounded-0 shadow mt-2 py-2"
          style={{
            width: "350px",
            borderBottom: "5px solid #536dfe",
            borderTop: "5px solid #536dfe",
          }}
        >
          <FcGoogle className="mb-1 me-2 fs-4" /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
