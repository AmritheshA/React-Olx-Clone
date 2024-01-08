import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { UserAuthConsumer } from "../../Global-Context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuthConsumer();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="flex  items-center p-2 ">
        <div className="flex items-center justify-around w-[20%] ml-16">
          <h1 className="font-extrabold text-3xl mr-3">O|x</h1>
          <select className="p-3 border-2 border-black rounded w-[75%] bg-white">
            <option>Kerala</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>
        </div>
        <div className="relative ml-3 w-[60%]">
          <input
            className="border-2 border-black w-full rounded p-2 my-2 pr-10"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <button className="absolute right-[1px] top-[10px] p-3 bg-black text-white ">
            <FaSearch />
          </button>
        </div>

        <div className="flex w-[20%] justify-around items-center">
          <select className="bg-slate-100 cursor-pointer">
            <option>ENGLISH</option>
            <option>Hindi</option>
          </select>
          {user?.email ? (
            <select
              className="bg-slate-100 cursor-pointer"
              onChange={handleLogout}
            >
              <option>{user.displayName || "UserName"}</option>
              <option>Logout</option>
            </select>
          ) : (
            <Link to="/login">
              <h1 className="text-lg font-bold ">Login</h1>
            </Link>
          )}

          <button className="bg-white py-2 px-5 rounded-full shadow uppercase font-bold flex items-center gap-2">
            + Sell
          </button>
        </div>
      </div>
      <div className="p2"></div>
    </div>
  );
}

export default Navbar;
