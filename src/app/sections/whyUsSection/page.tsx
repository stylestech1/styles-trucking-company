'use client'
import { about, AboutImages } from "@/components/data/db";
import SubTitle from "@/components/ui/SubTitle";
import Titles from "@/components/ui/Titles";
import Image from "next/image";
// Importing Language Provider
import { useTheme } from "@/context/theme/ThemeProvider";

const WhyUsSection = () => {
    const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? 'bg-[#121d3e]' : 'bg-[#F8FAFC]'} py-10`} id="about">
      <div className="container mx-auto px-5 gap-5">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Images */}
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            {AboutImages.map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt={img.alt}
                width={750}
                height={750}
                loading="lazy"
                className={`${i === 1 || i === 3 ? "mt-3 md:mt-5" : "mt-0"}`}
              />
            ))}
          </div>

          {/* Texts */}
          <div className="flex flex-col">
            <Titles align="text-left">Why Choose Styles Trucking?</Titles>
            <SubTitle align="text-left">
              With over two decades of experience in the transportation and
              logistics industry, Styles Trucking has built a reputation for
              reliability, safety, and customer satisfaction. Our commitment to
              excellence drives everything we do.
            </SubTitle>

            {/* icons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {about.map((icon, i) => {
                const Icon = icon.icons;
                return (
                  <div key={i} className="flex items-start gap-5">
                    <span className="bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] rounded-xl p-3">
                      <Icon size={20} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <p>{icon.name}</p>
                      <p className="text-[hsl(var(--text))] text-sm">{icon.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
