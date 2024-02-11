import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { PartnerSectionImage } from "../about/PartnerSection";

const PartnerSection = () => {
  return (
    <section className="bg-light_gray_1">
      <MaxContentWidthWrapper className="py-[30px]">
        <h2 className="text-md text-text_color text-center">
          Trusted By Over 4000 Big Companies
        </h2>
        <PartnerSectionImage />
      </MaxContentWidthWrapper>
    </section>
  );
};

export default PartnerSection;
