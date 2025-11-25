import { driverApp } from "@/components/data/db";
import SubTitle from "@/components/ui/SubTitle";
import Titles from "@/components/ui/Titles";
import { Smartphone } from "lucide-react";
import Image from "next/image";

const DriverApp = () => {
  return (
    <section className="py-5 md:py-15" id="driverApp">
      <div className="container mx-auto px-5">
        {/* Titles */}
        <div className="flex items-center mx-auto gap-2 text-sm md:text-lg text-white bg-[#1E56A0] rounded-sm py-2 px-5 w-fit">
          <Smartphone size={18} />
          <span>For Our Drivers</span>
        </div>
        <Titles>Styles Trucking Driver App</Titles>
        <SubTitle>
          Your smart companion on the road. Designed specifically for Styles
          Trucking drivers, this app keeps you connected with your loads,
          routes, and earnings, all in one place.
        </SubTitle>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mb-10">
        <div className="relative">
          <Image
            src={"/assets/images/app.webp"}
            width={700}
            height={700}
            alt="bg"
            loading="lazy"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-5 px-5">
          {driverApp.map((icon) => {
            const Icon = icon.icon;
            return (
              <div key={icon.id} className="flex items-start gap-5">
                <span className="bg-[#5390DF] p-4 rounded-xl text-white">
                  <Icon size={25} />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xl">{icon.name}</p>
                  <p className="text-sm text-gray-700">{icon.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DriverApp;
