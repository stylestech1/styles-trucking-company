'use client'
import { ArrowRight, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="my-6 md:my-10">
      <div className="container">
        <div className="relative w-screen min-h-screen overflow-hidden">
          <Image
            src="/assets/images/truck image.webp"
            fill
            alt="Styles Trucking reefer truck"
            className="object-cover object-center md:object-center"
            priority
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex h-full min-h-[620px] md:min-h-[700px] lg:min-h-screen lg:justify-end items-center justify-start p-5 md:p-8 lg:p-16">
            <div className="w-full max-w-[320px] sm:max-w-lg text-white flex  flex-col items-start gap-4 md:gap-6">
              {/* <div className="flex items-center gap-2 text-white bg-[hsl(var(--primary))] rounded-sm py-2 px-4 w-fit text-xs md:text-sm font-semibold tracking-wide">
                <Truck size={18} />
                <span>CDL-A COMPANY DRIVERS</span>
              </div> */}

              <h1 className="text-[36px] sm:text-3xl lg:text-5xl font-bold leading-[1.05] break-words uppercase">
                Drive With Styles Trucking
              </h1>
              <span className="text-[36px] sm:text-3xl lg:text-5xl font-bold leading-[1.05] break-words uppercase">
                start at .70 CPM</span>
              <h1 className="text-[36px] sm:text-xl lg:text-2xl font-bold leading-[1.05] break-words uppercase">

                up to 80 CPM after 90 days
              </h1>

              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Earn $1,920–$2,500+ per week as a reefer CDL-A company driver with steady miles and quality equipment.
              </p>

              <p className="text-white font-medium text-sm md:text-base">
                Based in Northwest Arkansas • 2,800–3,200 miles per week
              </p>

              <Link
                href="/apply"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-lg font-semibold bg-[hsl(var(--primary))] text-white shadow-lg transition-colors"
              >
                APPLY IN 2 MINUTES
                <ArrowRight size={18} />
              </Link>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-3 w-full">
                <div>
                  <span className="text-white/80 text-xl md:text-2xl font-bold">$0.70</span>
                  <p className="text-white/80 text-xs md:text-sm">Starting CPM</p>
                </div>

                <div>
                  <span className="text-white/80 text-xl md:text-2xl font-bold">2022+</span>
                  <p className="text-white/80 text-xs md:text-sm">Freightliners</p>
                </div>

                <div>
                  <span className="text-white/80 text-xl md:text-2xl font-bold">90 days</span>
                  <p className="text-white/80 text-xs md:text-sm">Benefits eligible</p>
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
