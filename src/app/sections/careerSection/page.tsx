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
          <div className="max-w-6xl mx-auto px-6  gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              {/* Careers Badge */}
              <div className="flex items-center gap-2 text-lg font-meduim 
        text-white bg-[hsl(var(--primary))] 
        rounded-md px-22 py-4 w-fit mb-6">
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

              {/* Benefits Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {[
                  {
                    title: "Competitive Pay",
                    points: [
                      "Start at $0.70 CPM (Reefer)",
                      "Increase to $0.80 CPM after 3 months based on performance",
                      "$1,920 – $2,500/week",
                      "2,800 – 3,200 miles/week",
                      "Steady freight — no sitting",
                    ],
                  },
                  {
                    title: "Flexible Schedules",
                    points: [
                      "3 weeks out = 4 days home",
                      "4 weeks out = 1 week home",
                      "No NY or CA",
                      "Snow lanes avoided when possible",
                    ],
                  },
                  {
                    title: "Equipment",
                    points: [
                      "2021+ Freightliners",
                      "Microwave, fridge, inverter",
                      "PrePass & GPS",
                    ],
                  },
                  {
                    title: "Comprehensive Benefits",
                    subtitle: "Benefits (after 90 days)",
                    points: [
                      "Health, Dental, Vision",
                      "401(k)",
                      "Rider & pet policy",
                    ],
                  },
                  {
                    title: "Requirements",
                    points: [
                      "Clean record",
                      "Accidents free for the last 2 years",
                      "Valid CDL & medical card",
                    ],
                  },
                  {
                    title: "Our lanes",
                    points: [
                      " AR, OK, MO, KS, IL, OH, PA, MD, VA, NC, SC, GA, TN, MS, KY, AL, LA, and TX."
                    ]
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-[hsl(var(--primary))]/20 rounded-2xl p-5 
      shadow-sm hover:shadow-md hover:border-[hsl(var(--primary))] 
      transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[hsl(var(--primary))] text-white rounded-full p-1.5">
                        <Check size={16} />
                      </div>

                      <h4 className="text-gray-900 font-semibold text-lg">
                        {item.title}
                      </h4>
                    </div>

                    {item.subtitle && (
                      <p className="text-gray-700 font-medium mb-3">
                        {item.subtitle}
                      </p>
                    )}

                    <ul className="space-y-2">
                      {item.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Apply Button */}
              <div className="flex justify-center my-10">
                <Link
                  href="https://land.driverapponline.com/land-rover1?active_job_id=84501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2
      w-[320px] h-[56px]
      bg-[hsl(var(--primary))] text-white
      rounded-lg font-medium
      hover:opacity-90 transition-all shadow-md"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            {/* <div className="flex justify-center md:justify-end">
              <Image
                src="/Image.png"
                width={450}
                height={450}
                alt="careers"
                loading="eager"
                className="rounded-lg"
              />
            </div> */}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerSection;
