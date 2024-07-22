"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ImageAvatars from "./Avatar";
import DropDownMenu from "./Dropdown";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { data: session, status } = useSession();
  const image = session?.user.image;

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".mobile-menu") &&
      !event.target.closest(".menu-button") &&
      !event.target.closest(".profile-dropdown")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen, dropdownOpen]);

  return (
    <div className="flex justify-start items-center bg-primary gap-4 p-4  shadow-md ">
      <div className="mr-auto">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8"><path fill="#ffffff" d="M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM176 136c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-80zm200-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
        
        </Link>
      </div>

      {/*If use is logged show the profile picture else show the login and create cv button */}
      {session && status == "authenticated" ? (
        <>
          <div className="sm:block hidden">
            <Link href="create-cv">
              <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white">
                Crea CV
              </button>
            </Link>
          </div>

          {/*DropDown menu */}
          <div className="sm:block hidden">
            <DropDownMenu image={image} userId={session?.user.id}/>
          </div>
        </>
      ) : (
        <>
          <div className=" ml-auto sm:block hidden">
            <Link href="create-cv">
              <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white">
                Crea CV
              </button>
            </Link>
          </div>

          <div className=" sm:block hidden">
            <Link href="/api/auth/signin">
              <h2 className="text-white font-semibold">Login</h2>
            </Link>
          </div>
        </>
      )}

      {/*Mobile Navigation */}
      <div className="sm:hidden ml-auto flex items-center">
        <button onClick={handleOpen} className="menu-button">
          {session && status == "authenticated" ? (
            <ImageAvatars image={image} />
          ) : (
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
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu absolute top-20 right-0  bg-white shadow-lg flex flex-col items-center gap-2 p-5 sm:hidden rounded-xl">
          <div onClick={handleOpen}>
            <Link href="create-cv">
              <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white hover:rounded-xl">
                Crea CV
              </button>
            </Link>
          </div>

          {session && status == "authenticated" && (
            <div onClick={handleOpen} className="hover:bg-gray-200 px-4 py-1">
              <Link href="profile">
                <h2 className="text-black font-semibold">Profilo</h2>
              </Link>
            </div>
          )}

          {session && status == "authenticated" ? (
            <div onClick={handleOpen} className="hover:bg-gray-200 px-4 py-1 ">
              <Link href="/api/auth/signout?callbackUrl=/">
                <h2 className="text-black font-semibold">Logout</h2>
              </Link>
            </div>
          ) : (
            <div onClick={handleOpen}>
              <Link href="/api/auth/signin">
                <h2 className="text-black font-semibold">Login</h2>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
