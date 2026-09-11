import CareerSection from "./sections/careerSection/page";
import DriverApp from "./sections/driverAppSection/page";
import HeroSection from "./sections/heroSection/page";
import ServiceSection from "./sections/serviceSections/page";
import Testination from "./sections/testination/Page";
import WhyUsSection from "./sections/whyUsSection/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <CareerSection />
      <Testination/>
      <WhyUsSection />
      <DriverApp />
    </main>
  );
}
