'use client'
import { Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Importing Language Provider
import { useTheme } from "@/context/theme/ThemeProvider";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="my-6 md:my-10">
      <div className="container">
        <div className="relative w-screen min-h-screen overflow-hidden">
          <Image
            src="/assets/images/truck image.webp"
            fill
            alt="styles-tracking"
            className="object-cover object-center md:object-center"
            priority
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex h-full min-h-[620px] md:min-h-[700px] lg:min-h-screen items-center justify-start lg:justify-end p-5 md:p-8 lg:p-16">
            <div className="w-full max-w-[320px] sm:max-w-md lg:max-w-xl text-white flex flex-col items-start lg:items-start gap-4 md:gap-6">
              <div className="hidden md:flex items-center gap-2 text-white bg-[#B8863B] rounded-sm py-2 px-5 w-fit">
                <Truck size={18} />
                <span>Transportation & Logistics Excellence</span>
              </div>

              <h1 className="text-[36px] sm:text-5xl lg:text-6xl font-bold leading-[1.15] break-words">
                Your{" "}
                <span className="text-[#B8863B]">Trusted Partner</span>{" "}
                in Freight Transportation
              </h1>

              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Styles Trucking delivers reliability and excellence across America.
                With our drivers, we ensure safe, timely delivery.
              </p>

              <Link
                href="tel:+14794803064"
                className="py-3 px-8 rounded-lg font-medium bg-[#B8863B] text-white shadow-lg"
              >
                Call Us Now
              </Link>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-5 w-full">
                <div>
                  <span className="text-[#B8863B] text-xl md:text-2xl font-bold">6+</span>
                  <p className="text-white/80 text-xs md:text-base">Years Experience</p>
                </div>

                <div>
                  <span className="text-[#B8863B] text-xl md:text-2xl font-bold">50+</span>
                  <p className="text-white/80 text-xs md:text-base">States Coverage</p>
                </div>

                <div>
                  <span className="text-[#B8863B] text-xl md:text-2xl font-bold">24/7</span>
                  <p className="text-white/80 text-xs md:text-base">Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 left-5 bg-white p-3 md:p-4 rounded-2xl shadow-2xl z-20">
            <Image
              src="/assets/images/NewLogo.png"
              width={80}
              height={80}
              alt="styles-tracking-logo"
              className="w-12 md:w-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
