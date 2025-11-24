import { Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-25 lg:py-50">
      <div className="container mx-auto px-5 flex flex-col-reverse lg:flex-row justify-between items-start gap-5 2xl:gap-50">
        {/* Text-Info */}
        <div className="flex flex-col items-center lg:items-start lg:gap-5 mx-auto text-center lg:text-left">
          <div className="flex items-center gap-2 text-sm md:text-lg text-white bg-[#1E56A0] rounded-sm py-2 px-5 w-fit">
            <span>
              <Truck size={18} />
            </span>
            <span>Transportation & Logistics Excellence</span>
          </div>

          {/* text */}
          <div className="my-10 lg:my-5 flex flex-col items-center lg:items-start w-full gap-5">
            <h1 className="text-3xl">
              Your <span className="text-[#1E56A0]">Trusted Partner</span> in
              Freight Transportation
            </h1>

            <p className="text-gray-600">
              Styles Trucking delivers reliability and excellence across
              America. With our drivers, We ensure safe, timely delivery
            </p>

            <Link 
              href={""}
              className={`py-2.5 px-6 rounded-lg font-medium transition-all bg-[#1E56A0] text-white shadow-lg w-fit`}
            >
              Contact Now
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20">
            <div>
              <span className="text-[#1E56A0] text-2xl">6+</span>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <span className="text-[#1E56A0] text-2xl">50+</span>
              <p className="text-gray-600">States Coverage</p>
            </div>
            <div>
              <span className="text-[#1E56A0] text-2xl">24/7</span>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>

        {/* Main Images */}
        <div className="relative rounded-2xl shadow-lg">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/Container.webp"
              width={1000}
              height={1000}
              alt="styles-tracking"
              className="rounded-2xl object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#1e56a08f] to-transparent"></div>
          </div>

          {/* Logo Box */}
          <div className="hidden lg:block absolute md:-bottom-5 md:-left-5 bg-[#1E56A0] p-5 rounded-2xl shadow-xl">
            <Image
              src="/assets/images/Logo-white.webp"
              width={80}
              height={80}
              alt="styles-tracking-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
