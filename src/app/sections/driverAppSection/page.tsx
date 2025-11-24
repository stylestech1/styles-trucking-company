import SubTitle from "@/components/ui/SubTitle";
import Titles from "@/components/ui/Titles";
import { Gauge, Lock, RefreshCcw, Smartphone } from "lucide-react";
import Image from "next/image";

// icons
const icons = [
  {
    id: 1,
    icon: <Gauge size={25} />,
    name: "Real-Time Tracking",
    desc: "Track loads in real-time and plan your day efficiently.",
  },
  {
    id: 2,
    icon: <RefreshCcw size={25} />,
    name: "Multi-Device Sync",
    desc: "Access your data from any device, anywhere.",
  },
  {
    id: 3,
    icon: <Smartphone size={25} />,
    name: "All-in-One Platform",
    desc: "Manage loads, routes, paycheck, and profile in one app.",
  },
  {
    id: 4,
    icon: <Lock size={25} />,
    name: "Secure & Private",
    desc: "Your information is protected with enterprise-grade security.",
  },
];

const DriverApp = () => {
  return (
    <section className="py-5 md:py-15" id="driverApp">
      <div className="container mx-auto px-5 gap-5 md:my-20">
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

      <div className="flex flex-col lg:flex-row">
        <div className="relative">
          <Image
            src={"/assets/images/Ellipse 2.webp"}
            width={250}
            height={250}
            alt="bg"
            loading="lazy"
            className="hidden md:block w-200 lg:w-130 xl:w-200 -mt-25"
          />
          <Image
            src={"/assets/images/phone.webp"}
            width={350}
            height={350}
            alt="bg"
            loading="lazy"
            className="static mx-auto md:absolute w-50 md:w-100 md:top-50 md:left-100 lg:left-70 xl:left-110 md:-translate-1/2"
          />
        </div>

        <div className="flex flex-col gap-5 mt-15 px-5">
          {icons.map((icon) => (
            <div key={icon.id} className="flex items-start gap-5">
              <span className="bg-[#5390DF] p-4 rounded-xl text-white">
                {icon.icon}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-xl">{icon.name}</p>
                <p className="text-sm text-gray-700">{icon.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverApp;
