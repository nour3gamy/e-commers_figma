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
    <div className="bg-white">
      <nav className="bg-[#e6e1e1] text-black flex justify-between items-center md:p-8 p-5 rounded-lg fixed right-0 left-0 z-1000">
        {/* LOGO */}
        <div className="font-black ">LOGO</div>
        {/* Link */}
        <div className="flex items-center justify-between gap-5">
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
                      className="bg-red-600 w-50 h-10 text-white rounded-2xl "
                      onClick={() => {
                        dispatch(logout());
                        localStorage.removeItem(user);
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
          <div className="text-2xl">
            <Icons name="search" />
          </div>
        </div>
      </nav>
    </div>
  );
}
