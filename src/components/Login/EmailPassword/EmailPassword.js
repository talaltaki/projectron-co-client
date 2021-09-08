import React, { useState } from "react";
import firebase from "firebase/app";

const EmailPassword = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    photo: "",
    email: "",
    password: "",
    error: "",
    success: "",
  });

  const [newUser, setNewUser] = useState(false);

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
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
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
          console.log("Signed in User Info", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
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

  return (
    <section className="text-center">
      <input
        type="checkbox"
        onChange={() => setNewUser(!newUser)}
        name="newUser"
        id=""
      />
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {newUser && (
          <input
            onBlur={handleBlur}
            type="text"
            name="name"
            id=""
            required
            placeholder="Enter your name"
          />
        )}
        <br />
        <input
          onBlur={handleBlur}
          type="text"
          name="email"
          id=""
          required
          placeholder="Enter your email address"
        />
        <br />
        <input
          onBlur={handleBlur}
          type="password"
          name="password"
          id=""
          required
          placeholder="Enter your password"
        />
        <br />
        <input type="submit" value={newUser ? "Sign up" : "Sign in"} />
      </form>
      <p className="text-danger">{user.error}</p>
      {user.success && (
        <p className="text-success">
          User {newUser ? "created" : "logged in"} successfully
        </p>
      )}
    </section>
  );
};

export default EmailPassword;
