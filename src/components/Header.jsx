import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";
import logoutImage from "../assets/logout.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubsribe when component unmounts
    return unsubscribe;
  }, []);

  const user = useSelector((store) => store.user);
  const logoutHandler = () => {
    console.info("User logging out...");
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log("Error occured: ", error);
      });
  };
  return (
    <header className="fixed top-0 left-0 p-5 border-b border-gray-200 flex justify-between items-center w-full bg-white z-50">
      <img
        src={logoImage}
        alt="header-logo-cinegpt"
        className="h-15 w-auto px-8"
      />
      {user && (
        <img
          src={logoutImage}
          alt="user-icon"
          className="h-8 w-auto px-8 cursor-pointer"
          onClick={logoutHandler}
        />
      )}
    </header>
  );
};

export default Header;
