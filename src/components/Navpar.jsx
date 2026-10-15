"use client";
import Icons from "./Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <nav className="bg-[#e6e1e1] text-black flex justify-between items-center md:p-8 p-5 rounded-lg fixed right-0 left-0 z-1000">
        {/* LOGO */}
        <div className="font-black ">LOGO</div>
        {/* Link */}
        <div className="flex items-center justify-between gap-5">
          <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969]">
            <Link href="">WHAT'S NEW</Link>
          </div>
          <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969]">
            <Link href="">Men</Link>
          </div>
          <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969]">
            <Link href="">Women</Link>
          </div>
          <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969]">
            <Link href="">Kids</Link>
          </div>
          <div className="text-sm rounded-xl p-2 hover:text-white hover:bg-[#6F6969] ">
            <Link href="">SALE</Link>
          </div>
        </div>
        {/* Icons */}
        <div className="flex items-center justify-between gap-2.5">
          <div
            className="text-2xl"
            onClick={() => {
              router.push("/Login");
            }}
          >
            <Icons name="user" />
          </div>
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
