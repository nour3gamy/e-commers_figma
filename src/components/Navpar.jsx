"use client";
import { logout } from "@/lib/redux/usersSlice";
import Icons from "./Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
export default function Navbar() {
  const [showAccountMenu, setshowAccountMenu] = useState(false);
  const [showSideNavpar, setshowSideNavpar] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return {
      firstname: state.usersSlice.firstname,
      lastname: state.usersSlice.lastname,
      username: state.usersSlice.username,
      image: state.usersSlice.image,
      loggedin: state.usersSlice.loggedin,
    };
  }, shallowEqual);
  return (
    <nav className="bg-[#e6e1e1] text-black flex justify-between items-center p-[clamp(1.25rem,3vw,1rem)] rounded-b-lg fixed right-0 left-0 z-1000">
      <div
        onClick={() => {
          setshowSideNavpar(true);
        }}
        className="text-2xl cursor-pointer sm:hidden"
      >
        <Icons name="bars" />
      </div>
      {/* Menu */}
      {showSideNavpar && (
        <div className="fixed inset-0 bg-gray-500/60 sm:hidden">
          <div className="fixed top-0 left-0 bg-[#e6e1e1] h-screen p-5">
            <div className="flex justify-end">
              <div
                className="cursor-pointer flex justify-center items-center p-2 hover:bg-gray-300 rounded-full w-8 h-8 "
                onClick={() => {
                  setshowSideNavpar(false);
                }}
              >
                <Icons name="close" color="red" />
              </div>
            </div>
            <div className="flex flex-col">
              <Link
                className="p-3 hover:text-white hover:bg-[#6F6969] rounded-2xl"
                onClick={() => setshowSideNavpar(false)}
                href="/"
              >
                WHAT'S NEW
              </Link>
              <Link
                className="p-3 hover:text-white hover:bg-[#6F6969] rounded-2xl"
                onClick={() => setshowSideNavpar(false)}
                href="/Men"
              >
                Men Collection
              </Link>
              <Link
                className="p-3 hover:text-white hover:bg-[#6F6969] rounded-2xl"
                onClick={() => setshowSideNavpar(false)}
                href="/Women"
              >
                Women Collection
              </Link>
              <Link
                className="p-3 hover:text-white hover:bg-[#6F6969] rounded-2xl"
                onClick={() => setshowSideNavpar(false)}
                href="/Kids"
              >
                Kids Collection
              </Link>
              <Link
                className="p-3 hover:text-white hover:bg-[#6F6969] rounded-2xl"
                onClick={() => setshowSideNavpar(false)}
                href=""
              >
                SALE
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* LOGO */}
      <div className="font-black ">LOGO</div>
      {/* Link */}
      <div className="items-center justify-between gap-5 hidden sm:flex">
        <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969]">
          <Link href="/">WHAT'S NEW</Link>
        </div>
        <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969]">
          <Link href="/Men">Men</Link>
        </div>
        <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969]">
          <Link href="/Women">Women</Link>
        </div>
        <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969]">
          <Link href="/Kids">Kids</Link>
        </div>
        <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969] ">
          <Link href="">SALE</Link>
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center justify-between gap-2.5">
        {user.loggedin ? (
          <>
            <div
              className="text-2xl"
              onClick={() => {
                setshowAccountMenu(!showAccountMenu);
              }}
            >
              <img
                className="w-5 h-5 object-cover rounded-full object-center"
                src={user.image}
              />
            </div>
            {/* AccountMenu */}
            {showAccountMenu && (
              <div className=" fixed top-4 right-4 bg-white w-60 flex flex-col justify-center items-center text-center rounded-2xl ">
                <div className="bg-[#d9d9d98b] m-2 p-2 rounded-2xl">
                  <div
                    className="cursor-pointer flex justify-center items-center p-2 hover:bg-gray-300 rounded-full w-8 h-8 "
                    onClick={() => {
                      setshowAccountMenu(false);
                    }}
                  >
                    <Icons name="close" color="red" />
                  </div>
                  <div className="flex justify-center items-center mb-5">
                    <img
                      className="w-15 h-15 object-cover rounded-full object-center"
                      src={user.image}
                      alt=""
                    />
                  </div>
                  <div>{`${user.firstname} ${user.lastname}`}</div>
                  <hr className="w-75% m-5" />
                  <button
                    className="bg-red-600 w-50 h-10 text-white rounded-2xl cursor-pointer"
                    onClick={() => {
                      dispatch(logout());
                      localStorage.removeItem("user");
                      setshowAccountMenu(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div
            className="text-2xl"
            onClick={() => {
              router.push("/Login");
            }}
          >
            <Icons name="user" />
          </div>
        )}

        <div className="text-2xl">
          <Icons name="cart" />
        </div>
        <div className="text-xl">
          <Icons name="search" />
        </div>
      </div>
    </nav>
  );
}
