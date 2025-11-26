import { careers } from "@/components/data/db";
import { ArrowRight, Check, Users } from "lucide-react";
import Link from "next/link";

const CareerSection = () => {
  return (
    <section className="container mx-auto px-5 gap-5 my-15 " id="careers">
      {/* Info */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 text-sm md:text-lg text-white bg-[#1E56A0] rounded-sm py-2 px-5 w-fit">
          <Users size={18} />
          <span>Come Join Our Family</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-5">
          {careers.map((data, i) => (
            <ul key={i} className="space-y-3">
              <p className="text-2xl font-medium">{data.title}</p>
              {data.subtitle ? (
                <p className="text-lg text-gray-600">{`"${data.subtitle}"`}</p>
              ) : (
                ""
              )}
              {data.data.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="rounded-full p-1 mt-1 bg-[#1E56A0] text-white">
                    <Check size={8} />
                  </span>
                  <li>{d}</li>
                </div>
              ))}
            </ul>
          ))}
        </div>

        <Link
          href={"https://intelliapp.driverapponline.com/c/3195503"}
          className={`flex items-center justify-center gap-2 py-2.5 px-20 md:px-6 rounded-lg font-medium transition-all bg-[#1E56A0] text-white shadow-lg md:w-fit mx-auto`}
        >
          <span>Apply Now</span>
          <span>
            <ArrowRight size={18} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CareerSection;
