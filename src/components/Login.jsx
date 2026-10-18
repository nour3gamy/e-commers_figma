"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/lib/redux/usersSlice";
export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorMassege, seterrorMassege] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const sighin = () => {
    seterrorMassege("");
    if (!username || !password) {
      seterrorMassege("All Fields Are Required");
      return;
    }
    let usersData = [];
    if (localStorage.data) {
      usersData = JSON.parse(localStorage.data);
    }
    const user = usersData.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) {
      seterrorMassege("Invalid Username Or Password");
      return;
    }
    user.loggedin = true;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(login(user));
    router.push("/");
  };
  return (
    <div>
      {/* Login */}
      <div className="flex flex-col justify-center items-center text-center font-black text-xl ">
        <h1>LOGIN</h1>
        <div className="flex flex-col m-2 mt-8 w-60">
          <input
            type="text"
            placeholder="Username"
            suppressHydrationWarning
            onChange={(e) => {
              setusername(e.target.value);
            }}
            className="w-full text-sm font-extralight  px-2 py-1 border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light  "
          />
          <input
            type="password"
            placeholder="Password"
            suppressHydrationWarning
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="w-full text-sm font-extralight  px-2 py-1 border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light  "
          />
        </div>
        {/* Error massedge */}
        <div className="text-red-600">{errorMassege}</div>
      </div>
      {/* text */}
      <div className="flex  flex-col justify-center items-center text-center my-4 mx-auto">
        <div className="flex justify-between gap-7 m-1">
          <div className="text-xs">Forgot Password?</div>
          <Link
            href="#"
            // onClick={() => {
            //   setpassword("");
            // }}
            className="text-xs text-[#737171]"
          >
            Reset Possword
          </Link>
        </div>
        <div className="flex justify-between gap-7 m-1">
          <div className="text-xs">New Customer?</div>
          <Link href="/Signup" className="text-xs text-[#737171]">
            Sign up
          </Link>
        </div>
      </div>
      {/* Sign in Button */}
      <div className="flex justify-center items-center mt-2 mb-25">
        <button
          onClick={sighin}
          className="cursor-pointer font-black text-lg py-3 px-7 bg-[#777272] text-white rounded-2xl"
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
