import { Check, Users } from "lucide-react";
import Image from "next/image";

// checks
const checks = [
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

const CareerSection = () => {
  return (
    <section className="container mx-auto px-5 gap-5 my-15">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Info */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 text-sm md:text-lg text-white bg-[#1E56A0] rounded-sm py-2 px-5 w-fit">
            <Users size={18} />
            <span>Careers</span>
          </div>

          <div className="my-5 flex flex-col gap-2">
            <h3 className="text-2xl">Join Our Team of Professional Drivers</h3>
            <p className="text-lg text-gray-700">
              At Styles Trucking, we believe our drivers are the heart of our
              company. {"We're"} always looking for experienced, safety-focused
              drivers to join our growing team.
            </p>
          </div>

          {checks.map((chk, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="rounded-full p-1 mt-1 bg-[#1E56A0] text-white">
                <Check size={16} />
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-xl">{chk.name}</p>
                <p className="text-gray-700">{chk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <Image
          src={"/assets/images/career.webp"}
          width={1000}
          height={1000}
          alt="careers"
          loading="lazy"
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default CareerSection;
