import Link from "next/link";

export default function Login() {
  return (
    <div>
      {/* The Big Image */}
      <div className="relative m-6.5 bg-[url('/timsclothing.png')] bg-center bg-cover h-96  flex flex-col justify-center items-center text-center rounded-3xl">
        <div className="absolute inset-0 bg-black/40 rounded-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-semibold">Lorem Ipsum</h1>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      {/* Login */}
      <div className="flex flex-col justify-center items-center text-center font-black text-xl ">
        <h1>LOGIN</h1>
        <div className="flex flex-col m-2 mt-8">
          <input
            type="text"
            placeholder="Username"
            className="border-[#E6E1E1] border-2 bg-[#d9d9d98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light placeholder:p-2  "
          />
          <input
            type="password"
            placeholder="Password"
            className="border-[#E6E1E1] border-2 bg-[#D9D9D98b] rounded-sm m-2
              outline-none focus:border-[#5a5a5a] placeholder:text-xs placeholder:font-light placeholder:p-2  "
          />
        </div>
      </div>
      {/* text */}
      <div className="flex  flex-col justify-center items-center text-center my-4 mx-auto">
        <div className="flex justify-between gap-7 m-1">
          <div className="text-xs">Forgot Password?</div>
          <Link href="#" className="text-xs text-[#737171]">
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
        <button className="cursor-pointer font-black text-lg py-3 px-7 bg-[#777272] text-white rounded-2xl">
          SIGN IN
        </button>
      </div>
    </div>
  );
}
