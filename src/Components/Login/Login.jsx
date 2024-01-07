import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(to right, #ffffff, #25d366)",
      }}
    >
      <div className="bg-gray-200 p-8 shadow-md rounded-lg w-96">
        <h2 className="text-3xl font-bold text-olx-blue mb-6">Welcome back to OLX</h2>
        <form>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-olx-blue"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-olx-blue"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-olx-blue text-white py-3 px-6 rounded-md bg-[#0056b3] hover:bg-blue-500 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account? <Link to="/signUp" className="text-[#0056b3]">Sign up here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
