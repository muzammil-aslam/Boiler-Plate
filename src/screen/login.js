import { Paper } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "../config/route/firebaseconfig";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginDa } from "../redux/action";
import { create } from "@mui/material/styles/createTransitions";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmition = (e) => {
    e.preventDefault();

    let dataObj = {
      email,
      password,
    };
    if (!dataObj.email || !dataObj.password) {
      setError(true);
    } else {
      signInWithEmailAndPassword(auth, dataObj.email, dataObj.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage, errorCode);
        });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress sx={{ margin: "50%" }} />
      ) : (
        <>
          <div className="khan">
            <div className="body">
              <Paper
                elevation={5}
                style={{
                  textAlign: "center",
                  width: "3sa0%",
                  marginLeft: "10px",
                  padding: "40px",
                  background: "black",
                }}
              >
                <form onSubmit={handleSubmition}>
                  <div className="change">
                    <h1 className="">LOGIN</h1>

                    <div className="styling">
                      <input
                        className="main"
                        onChange={(e) => setEmail(e.target.value)}
                        type="Email"
                        placeholder="UserEmail"
                      />
                    </div>
                    <div className="styling">
                      <input
                        className="main"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="UserPassword"
                      />
                    </div>
                    <div className="stylinge">
                      <button className="main-bat">login</button>
                    </div>

                    {error ? (
                      <div>
                        <p style={{ color: "red" }}>fill the fields!</p>
                      </div>
                    ) : null}
                  </div>
                </form>

                <Link to="/signin">
                  <div className="stylinge">
                    <button className="main-bat">Sign Up</button>
                  </div>
                </Link>
              </Paper>
            </div>
          </div>
        </>
      )}
    </>
  );
}
