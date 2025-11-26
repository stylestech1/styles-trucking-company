import { services } from "@/components/data/db";
import SubTitle from "@/components/ui/SubTitle";
import Titles from "@/components/ui/Titles";

const ServiceSection = () => {
  return (
    <section className="container mx-auto px-5 gap-5 " id="services">
      <Titles>Our Services</Titles>
      <SubTitle>
        Comprehensive transportation and logistics solutions tailored to your
        business needs.
      </SubTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {services.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center text-center p-10 gap-5 border border-[#E5E7EB] rounded-xl"
            >
              <span className="bg-[#1E56A0] text-white rounded-xl p-4">
                <Icon size={25} />
              </span>
              <p>{card.name}</p>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
