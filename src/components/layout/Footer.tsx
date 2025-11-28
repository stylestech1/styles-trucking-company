"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { footer } from "../data/db";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-[#0F172A] text-white relative">
      {/* Top CTA Section */}
      {pathname !== "/policy" && (
        <div className="bg-[hsl(var(--primary))] px-6 py-16 rounded-3xl hidden lg:block w-225 xl:w-300 absolute top-10 left-1/2 -translate-1/2">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl mb-6 text-[hsl(var(--secondary))]">
              Built Exclusively for Styles Trucking Drivers
            </h2>
            <p className="text-[hsl(var(--secondary))] text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Stay updated with real-time load tracking, manage deliveries,
              navigate routes with maps, check your paycheck, and update your
              profile. Fast, reliable, synced across all devices, and 100%
              secure.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-[hsl(var(--secondary))] text-[hsl(var(--primary))] font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Download Driver App
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div
        className={`container mx-auto px-6 pb-10 ${pathname !== "/policy" ? " pt-10 lg:pt-70 " : "pt-10"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/Logo2.svg"
                width={25}
                height={25}
                alt="styles-tracking-logo"
              />
              <h3 className="text-xl">Styles Trucking</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner in transportation and logistics.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                "Long Haul",
                "Route Optimization",
                "Time-Critical",
                "Full Truckload",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {footer.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 Styles Trucking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
