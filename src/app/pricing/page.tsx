import Banner from "@/components/pricing/Banner";
import CtaSection from "@/components/pricing/CtaSection";
import FaqSection from "@/components/pricing/FaqSection";
import PartnerSection from "@/components/pricing/PartnerSection";
import PricingSection from "@/components/pricing/PricingSection";

const Pricing = () => {
  return (
    <main>
      <Banner />
      <PricingSection />
      <PartnerSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
};

export default Pricing;
