import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";
import logoutImage from "../assets/logout.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const logoutHandler = () => {
    console.info("User logging out...");
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error occured: ", error)
      });
  };
  return (
    <header className="fixed top-0 left-0 p-5 border-b border-gray-200 flex justify-between items-center w-full bg-white z-50">
      <img
        src={logoImage}
        alt="header-logo-cinegpt"
        className="h-15 w-auto px-8"
      />
      {user && (<img
        src={logoutImage}
        alt="user-icon"
        className="h-8 w-auto px-8 cursor-pointer"
        onClick={logoutHandler}
      />)}
    </header>
  );
};

export default Header;
