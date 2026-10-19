import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoCloseSharp, IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { HiMiniBars3 } from "react-icons/hi2";
export default function Icons({ name, color = "black" }) {
  switch (name) {
    case "search":
      return <FaMagnifyingGlass color={color} />;
    case "love":
      return <CiHeart color={color} />;
    case "user":
      return <BiUser color={color} />;
    case "close":
      return <IoCloseSharp color={color} />;
    case "cart":
      return <IoCartOutline color={color} />;
    case "location":
      return <GrLocation color={color} />;
    case "phone":
      return <FiPhoneCall color={color} />;
    case "bars":
      return <HiMiniBars3 color={color} />;
    default:
      "";
  }
}
