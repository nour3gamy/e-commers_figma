"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [image, setimage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorMassege, seterrorMassege] = useState("");
  const router = useRouter();
  const signup = () => {
    seterrorMassege("");
    if (!firstname || !lastname || !username || !image || !email || !password) {
      seterrorMassege("All Fields Are Required");
      return;
    }
    if (password.length < 8) {
      seterrorMassege("Password Should Be At Least 8 Characters");
      return;
    }
    let usersData = JSON.parse(localStorage.data);
    usersData.push({
      firstname,
      lastname,
      username,
      image,
      email,
      password,
      errorMassege,
    });
    localStorage.setItem("data", JSON.stringify(usersData));
    router.push("/Login");
  };
  return (
    <div>
      {/* Sign up */}
      <div className="flex flex-col justify-center items-center text-center font-black text-xl ">
        <h1>SIGN UP</h1>
        <div className="flex flex-col m-2 mt-8 w-60">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
            className="w-full text-sm font-extralight  px-2 py-1 border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light  "
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setlastname(e.target.value);
            }}
            className="w-full text-sm font-extralight  px-2 py-1 border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light  "
          />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            className="w-full text-sm font-extralight  px-2 py-1 border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light  "
          />
          <input
            type="text"
            placeholder="Yuor Photo"
            onChange={(e) => {
              setimage(e.target.value);
            }}
            className="w-full text-sm font-extralight  px-2 py-1 border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light  "
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="w-full text-sm font-extralight  px-2 py-1 border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light  "
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="w-full text-sm font-extralight  px-2 py-1 border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light  "
          />
        </div>
        {/* Error Massege */}
        <div className="text-red-600">{errorMassege}</div>
      </div>
      {/* text */}
      <div className="flex  flex-col justify-center items-center text-center my-1 mx-auto">
        <div className="flex justify-between gap-7 m-1">
          <div className="text-xs">Already have an account?</div>
          <Link href="/Login" className="text-xs text-[#737171]">
            Login
          </Link>
        </div>
      </div>
      {/* Sign in Button */}
      <div className="flex justify-center items-center mt-2 mb-15">
        <button
          onClick={signup}
          className="cursor-pointer font-black text-lg py-3 px-7 bg-[#777272] text-white rounded-2xl"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}
