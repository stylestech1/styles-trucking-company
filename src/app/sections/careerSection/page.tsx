// import { careers } from "@/components/data/db";
import { ArrowRight, Check, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CareerSection = () => {
  return (
    <section className="container mx-auto px-5 gap-5 my-15 " id="careers">
      {/* Info */}
      <div className="flex flex-col gap-5">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-30 my-5">
          {careers.map((data, i) => (
            <ul key={i} className="space-y-3">
              <p className="text-2xl font-medium">{data.title}</p>
              {data.subtitle ? (
                <p className="text-lg text-[hsl(var(--text))]">{`"${data.subtitle}"`}</p>
              ) : (
                ""
              )}
              {data.data.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="rounded-full p-1 mt-1 bg-[hsl(var(--primary))] text-[hsl(var(--secondary))]">
                    <Check size={8} />
                  </span>
                  <li>{d}</li>
                </div>
              ))}
            </ul>
          ))}
        </div> */}
        <div className="w-full bg-[#f5f6f8] py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              {/* Careers Badge */}
              <div className="flex items-center gap-2 text-sm font-medium 
        text-white bg-[hsl(var(--primary))] 
        rounded-md px-4 py-2 w-fit mb-6">
                <Users size={18} />
                <span>Careers</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-2xl  text-gray-900 leading-snug mb-4">
                Join Our Team of Professional Drivers
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-2">
                At Styles Trucking, we believe our drivers are the heart of our company.
              </p>
              <p className="text-gray-600 mb-6">
                We are always looking for experienced, safety-focused drivers to join our growing team.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Competitive Pay & Benefits",
                    desc: "Industry-leading compensation with comprehensive health and retirement benefits.",
                  },
                  {
                    title: "Flexible Schedules",
                    desc: "Flexible schedules and routes designed to get you home when it matters.",
                  },
                  {
                    title: "Comprehensive Benefits",
                    desc: "Drive the latest trucks equipped with advanced safety and comfort features.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[hsl(var(--primary))] text-white rounded-full p-1 mt-1">
                      <Check size={16} />
                    </div>
                    <div>
                      <h4 className=" text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Apply Button */}
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 
        bg-[hsl(var(--primary))] text-white 
        px-6 py-3 rounded-lg font-medium 
        hover:opacity-90 transition-all shadow-md"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/Image.png"
                width={450}
                height={450}
                alt="careers"
                loading="eager"
                className="rounded-lg"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerSection;
