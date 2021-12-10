import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import { useState } from "react";
// import { handleBreakpointse } from "@mui/system";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  database,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
} from "../config/route/firebaseconfig";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      email,
      password,
    };

    if (!obj.email || !obj.password) {
      setError(true);
    } else {
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((success) => {
          console.log(success);
          let uid = success.user.uid;
          dis;

          set(ref(database, `users/${uid}`), obj);

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;

          console.log("Error", error.message);
          // alert('Error',error.message)
          // ..
        });
    }
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="khan">
        <div className="body">
          <Paper
            elevation={5}
            style={{
              textAlign: "center",
              width: "30%",
              marginLeft: "10px",
              padding: "40px",
              background: "black",
            }}
          >
            <div className="change">
              <h1 className="">SigUp</h1>

              <div className="input">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="mains"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="input">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="mains"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="inpute">
                <button className="component">SigUp</button>
              </div>
              {error ? (
                <div>
                  <p style={{ color: "red" }}>Fill the Text!</p>
                </div>
              ) : null}
            </div>
          </Paper>
        </div>
      </div>
    </form>
  );
}
