import SubTitle from "@/components/ui/SubTitle";
import Titles from "@/components/ui/Titles";
import { Package, Shield, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const WhyUsSection = () => {
  // Images
  const images = [
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

  // icons
  const icons = [
    {
      id: 1,
      icons: <Shield size={18} />,
      name: "Safety First",
      desc: "Our drivers are highly trained and our fleet is maintained to the highest standards.",
    },
    {
      id: 2,
      icons: <Users size={18} />,
      name: "Professional Team",
      desc: "Experienced logistics professionals dedicated to your success.",
    },
    {
      id: 3,
      icons: <TrendingUp size={18} />,
      name: "Industry Leading",
      desc: "20+ years of excellence in transportation and logistics services.",
    },
    {
      id: 4,
      icons: <Package size={18} />,
      name: "Nationwide Coverage",
      desc: "Comprehensive coverage across all 50 states with reliable service.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-15" id="about">
      <div className="container mx-auto px-5 gap-5 my-15">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt={img.alt}
                width={750}
                height={750}
                loading="lazy"
                className={i === 1 || i === 3 ? "lg:mt-5" : "mt-0"}
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
              {icons.map((icon, i) => (
                <div key={i} className="flex items-start gap-5">
                  <span className="bg-[#1E56A0] text-white rounded-xl p-4">
                    {icon.icons}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p>{icon.name}</p>
                    <p className="text-gray-600 text-sm">{icon.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
