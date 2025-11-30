import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-10 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      {/* <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
        onClick={() => navigate("/")}
      /> */}


      <h1
        className="
          text-xl sm:text-2xl font-bold tracking-wide cursor-pointer
          bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
          drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]
          hover:scale-105 transition-transform duration-200
        "
        onClick={() => navigate("/")}
      >
        CreonixAI
      </h1>






      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5 hover:bg-primary/80 transition-all duration-200"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;


