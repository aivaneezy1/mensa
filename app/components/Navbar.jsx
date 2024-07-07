"use client";
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex justify-start items-center bg-primary gap-5 p-4  shadow-md ">
      <div className="mr-auto">
        <Link href="/">
          <h2 className="text-white text-2xl font-bold">Logo</h2>
        </Link>
      </div>

      <div className="ml-auto sm:block hidden">
        <Link href="/sign">
          <h2 className="text-white font-semibold">Log in</h2>
        </Link>
      </div>

      <div className="sm:block hidden">
        <Link href="create-cv">
          <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white">
            Crea CV
          </button>
        </Link>
      </div>

      {/*Mobile Navigation */}
      <div className="sm:hidden ml-auto flex items-center">
        <button onClick={handleOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-20 right-0  bg-white shadow-lg flex flex-col items-center gap-5 p-5 sm:hidden">
          <div 
          onClick={handleOpen}>
            <Link href="/sign">
              <h2 className="text-black font-semibold">Log in</h2>
            </Link>
          </div>

          <div 
          onClick={handleOpen}>
            <Link href="create-cv">
              <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white">
                Crea CV
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
