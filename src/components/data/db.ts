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
    name: "Competitive Pay & Benefits",
    desc: "Industry-leading compensation with comprehensive health and retirement benefits.",
  },
  {
    id: 2,
    name: "Flexible Schedules",
    desc: "Flexible schedules and routes designed to get you home when it matters.",
  },
  {
    id: 3,
    name: "Comprehensive benefits",
    desc: "Drive the latest trucks equipped with advanced safety and comfort features.",
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