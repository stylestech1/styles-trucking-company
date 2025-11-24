import { Clock4, MapPin, Package, Truck } from "lucide-react";
import SubTitle from "@/components/ui/SubTitle";
import Titles from "@/components/ui/Titles";

// cards
const cards = [
  {
    id: 1,
    name: "Long Haul Transportation",
    desc: "Reliable coast-to-coast freight delivery with our modern fleet and experienced drivers.",
    icon: <Truck size={25} />,
  },
  {
    id: 2,
    name: "Route Optimization",
    desc: "Smart routing technology ensures your cargo arrives on time, every time.",
    icon: <MapPin size={25} />,
  },
  {
    id: 3,
    name: "Time-Critical Delivery",
    desc: "Expedited shipping options for urgent freight with guaranteed delivery windows.",
    icon: <Clock4 size={25} />,
  },
  {
    id: 4,
    name: "Full Truckload (FTL)",
    desc: "Dedicated trucks for your shipments, offering maximum efficiency and security.",
    icon: <Package size={25} />,
  },
];

const ServiceSection = () => {
  return (
    <div className="container mx-auto px-5 gap-5 my-15">
      <Titles>Our Services</Titles>
      <SubTitle>
        Comprehensive transportation and logistics solutions tailored to your
        business needs.
      </SubTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center text-center p-10 gap-5 border border-[#E5E7EB] rounded-xl"
          >
            <span className="bg-[#1E56A0] text-white rounded-xl p-4">
              {card.icon}
            </span>
            <p>{card.name}</p>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
