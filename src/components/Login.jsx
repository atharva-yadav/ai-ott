import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const [validationErrorMessage, setvalidationErrorMessage] = useState(null);
  const handleBtnClick = () => {
    const msg = validate(email.current.value, password.current.value);
    setvalidationErrorMessage(msg);

    if (msg) return;

    // Create user if Email & Password is valid
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.info("User: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalidationErrorMessage(
            `${errorMessage} Error code: ${errorMessage}`,
          );
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.info("User: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalidationErrorMessage(
            `${errorMessage} Error code: ${errorMessage}`,
          );
        });
    }
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-50">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white p-10 rounded-2xl w-full max-w-md shadow-sm border border-gray-200"
      >
        <h1 className="text-gray-900 font-semibold text-2xl mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <div className="space-y-5">
          {!isSignInForm && (
            <div>
              <label className="text-gray-700 text-sm font-medium mb-2 block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          )}
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2 block">
              Email
            </label>
            <input
              ref={email}
              type="text"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2 block">
              Password
            </label>
            <input
              ref={password}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <p className="py-2 text-red-600">{validationErrorMessage}</p>
        <button
          type="submit"
          className="cursor-pointer w-full p-3 mt-8 bg-red-400 hover:bg-red-500 text-white font-medium rounded-lg transition-colors duration-200"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="pt-4 mt-3">
          {isSignInForm ? "New to CineGPT? " : "Already Registered? "}
          <span
            className="cursor-pointer text-red-500"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
