"use client";

import {
  Check,
  DollarSign,
  Gauge,
  House,
  Snowflake,
  Truck,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: DollarSign,
    title: "$1,920-$2,500+ Weekly",
    description: "Competitive pay",
  },
  {
    icon: Gauge,
    title: "2,800-3,200 Miles Weekly",
    description: "Steady miles",
  },
  {
    icon: Snowflake,
    title: "Reefer Freight",
    description: "Keep moving",
  },
  {
    icon: House,
    title: "Predictable Home Time",
    description: "Schedules that work",
  },
  {
    icon: Truck,
    title: "2022+ Freightliners",
    description: "Quality equipment",
  },
  {
    icon: Check,
    title: "Benefits After 90 Days",
    description: "Health, dental, vision",
  },
  {
    icon: House,
    title: "Rider & Pet Friendly",
    description: "Bring your companion",
  },
  {
    icon: Gauge,
    title: "Driver App",
    description: "Stay connected",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-[#f7f9fc] py-14 md:py-20" id="services">
      <div className="container mx-auto px-5">
        <h2 className="text-center text-2xl font-bold text-[hsl(var(--primary))] md:text-3xl">
          Why Drive With Styles?
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-500 md:text-base">
          We give professional CDL-A drivers the miles, equipment, pay, and
          support they need to build a rewarding career.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:p-5"
            >
              <span className="mb-3 inline-flex rounded-md bg-[hsl(var(--primary))] p-2 text-white">
                <Icon size={17} />
              </span>

              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                {title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-xl bg-white p-5 shadow-sm md:flex-row md:p-7"
          id="careers"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
              CDL-A Driver Jobs
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Join Our Team
            </h3>

            <p className="mt-2 max-w-xl text-sm text-slate-500">
              Earn $1,920-$2,500+ weekly with steady reefer miles, modern
              equipment, and a team that knows your name.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/cdl-driver-jobs"
              className="rounded-md bg-[hsl(var(--primary))] px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              View CDL Driver Jobs
            </Link>

            <Link
              href="/apply"
              className="rounded-md border border-[hsl(var(--primary))] px-5 py-3 text-center text-sm font-semibold text-[hsl(var(--primary))] transition hover:bg-slate-50"
            >
              Apply in 2 Minutes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;