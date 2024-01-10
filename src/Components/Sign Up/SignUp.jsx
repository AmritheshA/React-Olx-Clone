import React, { useState } from "react";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import { UserAuthConsumer } from "../../Global-Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userName, setUserName] = useState("");
  const { signUp } = UserAuthConsumer();
  const navigator = useNavigate();

  const handleUserName = (eve) => {
    setUserName(eve.target.value);
  };

  const handleEmail = (eve) => {
    setemail(eve.target.value);
  };

  const handlePassword = (eve) => {
    setpassword(eve.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signUp(email, password,userName);

      await addDoc(collection(database, "users"), {
        userName: userName,
        email: email,
      });

      navigator("/");
      
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
      console.log(error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(to right, #ffffff, #25d366)",
      }}
    >
      <div className="bg-gray-200 p-8 shadow-md rounded-lg w-96">
        <h2 className="text-3xl font-bold text-olx-blue mb-6">
          Welcome To Our Family
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-600"
            >
              UserName
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={handleUserName}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-olx-blue"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmail}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-olx-blue"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlePassword}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-olx-blue"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-olx-blue text-white py-3 px-6 rounded-md bg-[#0056b3] hover:bg-blue-500 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <ToastContainer />
        <p className="mt-4 text-sm text-gray-600">
          Already a member ?
          <Link to="/login" className="text-[#0056b3]">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
