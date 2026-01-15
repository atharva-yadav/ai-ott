import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-50">
      <Header />
      <form className="bg-white p-10 rounded-2xl w-full max-w-md shadow-sm border border-gray-200">
        <h1 className="text-gray-900 font-semibold text-2xl mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <div className="space-y-5">
          {!isSignInForm && <div>
            <label className="text-gray-700 text-sm font-medium mb-2 block">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all placeholder:text-gray-400"
            />
          </div>}
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2 block">
              Email
            </label>
            <input
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
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-8 bg-red-400 hover:bg-red-500 text-white font-medium rounded-lg transition-colors duration-200"
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
