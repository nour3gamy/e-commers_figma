import Icons from "@/components/Icons";
export default function Footer() {
  return (
    <div className="min-h-80 bg-[#E6E1E1] text-black">
      {/* upper */}
      <div className="flex flex-wrap just gap-7 text-base mx-15 mb-10 mt-10">
        {/* Right */}
        <div className="-ms-2 my-7 w-50">
          <p className="font-black text-2xl">LOGO</p>
          <li>Lorem, ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </div>
        {/* Left */}
        <div className="flex flex-wrap justify-between gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xs">THE BRAND</p>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xs">QUICK LINKS</p>
            <li>Promotions</li>
            <li>Track my Order</li>
            <li>Size Guide</li>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xs">CATEGORIES</p>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xs">SUPPORT</p>
            <li>FAQ</li>
            <div>
              <div className="flex items-center gap-3">
                <Icons name="location" />
                <li>Lorem ipsum dolor sit amet</li>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <Icons name="phone" />
                <li>(+94)123456789</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lower */}
      <div className="text-[#777272] text-[11px] text-center mb-6 mx-8">
        Copyright © 2024 - All Rights Reserved. Concept, Design & Development by
        Adrix Digital
      </div>
    </div>
  );
}
