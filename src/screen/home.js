import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "../config/route/firebaseconfig";
import { CircularProgress } from "@mui/material";
import { signOut } from "@firebase/auth";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
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
          <div>
            <h1>this is home page</h1>
            <button onClick={() => signOut(auth)}>LogOut</button>
          </div>
        </>
      )}
    </>
  );
}
