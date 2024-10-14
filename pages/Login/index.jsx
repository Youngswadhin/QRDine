import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../utils/firebase";
// import { addUser, removeUser } from "../../utils/userSlice";
import SignUp from "../SignUp/index.jsx";
import LoginForm from "./LoginForm";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //     } else {
  //       dispatch(removeUser());
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [dispatch]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // navigate("/home");
  //     } else {
  //       // navigate("/login");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [navigate]);

  return (
    <div className={`L-container ${isSignUp ? "sign-up-mode" : ""} `}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUp ? <SignUp /> : <LoginForm />}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Welcome Back to QRDine !</h3>
            <p>
            Log in to access personalized menus, check table availability and enjoy a seamless, contactless dining experience.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={toggleSignUp}
            >
              Sign up
            </button>
          </div>
          <img
            src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Join QRDine and Elevate Your Dining Experience!</h3>
            <p>
            Sign up to explore top restaurants, view digital menus, and reserve tables with ease. Experience seamless, contactless dining tailored just for you.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={toggleSignUp}
            >
              Sign in
            </button>
          </div>
          <img
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
