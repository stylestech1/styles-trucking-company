"use client";
import { Check, Truck } from "lucide-react";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <section className="bg-[#f7f9fc] py-14 md:py-20" id="about">
      <div className="container mx-auto px-5 gap-5">
        <div className="grid items-center gap-8 rounded-xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
          <div className="grid grid-cols-2 gap-3">
            {["1.jpg", "2.jpg", "3.jpg", "5.jpg"].map((image, index) => <Image key={image} src={`/assets/images/${image}`} width={500} height={360} alt={`Styles Trucking fleet ${index + 1}`} className={`h-36 w-full object-cover md:h-44 ${index % 2 ? "mt-5" : ""}`} />)}
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--primary))] px-4 py-2 text-sm font-semibold text-white"><Truck size={17} /> Your Truck. Your Miles. Your Future.</div>
            <h2 className="mt-5 text-3xl font-bold text-slate-900">Why Choose Styles Trucking?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">We are an 10-truck reefer fleet based in Northwest Arkansas. Our drivers get quality equipment, consistent freight, and direct support without feeling like a number.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["10-truck reefer fleet", "2022+ Freightliners", "53' reefer trailers", "Health, dental, vision & 401(k)"].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700"><span className="rounded-full bg-[hsl(var(--primary))] p-1 text-white"><Check size={12} /></span>{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
