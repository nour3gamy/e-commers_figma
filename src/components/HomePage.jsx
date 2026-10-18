"use client";
import { useRouter } from "next/navigation";
// import { mens_shirts2 } from "@/data/data";
export default function HomePage() {
  // let mens_shirts;
  // try {
  //   const res = await fetch(
  //     "https://dummyjson.com/products/category/mens-shirts",
  //   );
  //   if (!res.ok) throw new Error("Bad response");
  //   mens_shirts = await res.json();
  // } catch (error) {
  //   mens_shirts = mens_shirts2;
  // }
  // const { products } = mens_shirts;
  const router = useRouter();
  return (
    <div>
      {/* Our collections section */}
      <div className="text-center font-bold text-3xl ">
        <h1>OUR COLLECTIONS</h1>
        {/* Collection Sorts */}
        <div className="flex  justify-center flex-wrap gap-5 mt-3">
          {/* Mens's Wear */}
          <div
            onClick={() => router.push("/Men")}
            className="flex flex-col items-center text-center p-2 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:-translate-y-1"
          >
            {/* image */}
            <div className="flex justify-center items-center m-3 size-50 outline-hidden">
              <img
                src="/menwear.png"
                alt="menwear"
                className="w-full object-cover object-center rounded-3xl"
              />
            </div>
            {/* text */}
            <div className="text-start px-5">
              <div className="font-bold text-base">Mens Wear</div>
              <div className="font-normal text-xs text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>
          {/* Women's Wear */}
          <div
            onClick={() => router.push("/Women")}
            className="flex flex-col items-center text-center p-2 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:-translate-y-1"
          >
            {/* image */}
            <div className="flex justify-center items-center m-3 size-50 outline-hidden">
              <img
                src="/womenwear.png"
                alt="womenwear"
                className="w-full object-cover object-center rounded-3xl"
              />
            </div>
            {/* text */}
            <div className="text-start px-5">
              <div className="font-bold text-base">Womens Wear</div>
              <div className="font-normal text-xs text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>
          {/* Kids Wear */}
          <div
            onClick={() => router.push("/Kids")}
            className="flex flex-col items-center text-center p-2 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:-translate-y-1"
          >
            {/* image */}
            <div className="flex justify-center items-center m-3 size-50 outline-hidden">
              <img
                src="/kidswear.png"
                alt="kidswear"
                className="w-full object-cover object-center rounded-3xl"
              />
            </div>
            {/* text */}
            <div className="text-start px-5">
              <div className="font-bold text-base">Kids Wear</div>
              <div className="font-normal text-xs text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
        {/* See More Button */}
        <div>
          <button className="bg-[#E4D9D9] text-[#353232] text-sm font-bold p-3 rounded-xl m-4 cursor-pointer">
            SEE MORE
          </button>
        </div>
        {/* What's Special? */}
        <div>
          <h1>WHAT'S SPECIAL?</h1>
          <div className="flex my-7 mx-auto justify-center gap-8 items-center">
            <div>
              <div className="relative flex justify-center items-center size-55 outline-hidden bg-[url('/womenwear2.jpg')] bg-cover bg-center rounded-3xl">
                <div className="absolute inset-0 bg-black/30 rounded-3xl" />
                <div className="relative text-white text-xl">PROMO</div>
              </div>
            </div>

            <div>
              <div className="relative flex justify-center items-center size-55 outline-hidden bg-[url('/menwear2.jpg')] bg-cover bg-center rounded-3xl">
                <div className="absolute inset-0 bg-black/30 rounded-3xl" />
                <div className="relative text-white text-2xl text-center ">
                  LATEST COLLECTION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
