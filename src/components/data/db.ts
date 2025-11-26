import { LucideIcon } from "lucide-react";
import {
  Gauge,
  Lock,
  RefreshCcw,
  Smartphone,
  Clock4,
  MapPin,
  Package,
  Truck,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

// careers
export const careers = [
  {
    id: 1,
    title: "Pay",
    data: [
      "0.70 CPM for reefer work",
      "Weekly pay Direct Deposit",
      "1099 or w-2",
      "Safety bonus for clean inspections $100",
      "Minimum 2 years experience required",
      "$2000 annual bonus for professional drivers",
      "$100 Layovers",
      "$25 extra stop",
      "Minimum 2400 miles a week",
    ],
  },
  {
    id: 2,
    title: "Equipment",
    data: [
      "Electronic log books",
      "Microwave",
      "Fridge",
      "GPS",
      "Inverter",
      "Pet Friendly",
      "Passenger Allowed",
      "Tansportation is Paid",
      "Dispatch 24/7",
      "Automatic trucks",
      "Freightliners and peterbilt",
      "Pre-pass for tools and weight stations",
    ],
  },
  {
    id: 3,
    title: "Regional Work",
    subtitle: "We only run between",
    data: [
      "AR, OK, MO, KS, IL, OH, PA, MD, VA, NC, SC, GA, TN, MS, KY, AL, LA, PA and TX.",
    ],
  },
  {
    id: 4,
    title: "Owner Operators",
    data: [
      "Our owner operators make between $6,000 to $9,000 a week.",
      "we charge 20% all expenses included",
      "Weekly direct deposit",
      "Company fuel card (you get the discount)",
      "tire discount within our network",
      "discounted Truck maintenance at our shop (comming soon)",
      "flexible home time",
      "Health insurance perovided after 90 days",
      "occupational insurance provided the day of hire",
    ],
  },
];

// driverApp
export type DriverAppFeature = {
  id: number;
  icon: LucideIcon;
  name: string;
  desc: string;
};
export const driverApp: DriverAppFeature[] = [
  {
    id: 1,
    icon: Gauge,
    name: "Real-Time Tracking",
    desc: "Track loads in real-time and plan your day efficiently.",
  },
  {
    id: 2,
    icon: RefreshCcw,
    name: "Multi-Device Sync",
    desc: "Access your data from any device, anywhere.",
  },
  {
    id: 3,
    icon: Smartphone,
    name: "All-in-One Platform",
    desc: "Manage loads, routes, paycheck, and profile in one app.",
  },
  {
    id: 4,
    icon: Lock,
    name: "Secure & Private",
    desc: "Your information is protected with enterprise-grade security.",
  },
];

// services
export type ServicesFeature = {
  id: number;
  icon: LucideIcon;
  name: string;
  desc: string;
};
export const services: ServicesFeature[] = [
  {
    id: 1,
    name: "Long Haul Transportation",
    desc: "Reliable coast-to-coast freight delivery with our modern fleet and experienced drivers.",
    icon: Truck,
  },
  {
    id: 2,
    name: "Route Optimization",
    desc: "Smart routing technology ensures your cargo arrives on time, every time.",
    icon: MapPin,
  },
  {
    id: 3,
    name: "Time-Critical Delivery",
    desc: "Expedited shipping options for urgent freight with guaranteed delivery windows.",
    icon: Clock4,
  },
  {
    id: 4,
    name: "Full Truckload (FTL)",
    desc: "Dedicated trucks for your shipments, offering maximum efficiency and security.",
    icon: Package,
  },
];

// About
export const AboutImages = [
  {
    id: 1,
    src: "/assets/images/1.webp",
    alt: "truck-1",
  },
  {
    id: 2,
    src: "/assets/images/2.webp",
    alt: "truck-2",
  },
  {
    id: 3,
    src: "/assets/images/3.webp",
    alt: "truck-3",
  },
  {
    id: 4,
    src: "/assets/images/4.webp",
    alt: "truck-4",
  },
];

export type AboutFeature = {
  id: number;
  icons: LucideIcon;
  name: string;
  desc: string;
};
export const about: AboutFeature[] = [
  {
    id: 1,
    icons: Shield,
    name: "Safety First",
    desc: "Our drivers are highly trained and our fleet is maintained to the highest standards.",
  },
  {
    id: 2,
    icons: Users,
    name: "Professional Team",
    desc: "Experienced logistics professionals dedicated to your success.",
  },
  {
    id: 3,
    icons: TrendingUp,
    name: "Industry Leading",
    desc: "20+ years of excellence in transportation and logistics services.",
  },
  {
    id: 4,
    icons: Package,
    name: "Nationwide Coverage",
    desc: "Comprehensive coverage across all 50 states with reliable service.",
  },
];

// Footer
export const footer = [
  {
    id: 1,
    name: "About Us",
    href: "#about",
  },
  {
    id: 2,
    name: "Driver App",
    href: "#driverApp",
  },
  {
    id: 3,
    name: "Contact",
    href: "#contact",
  },
];
