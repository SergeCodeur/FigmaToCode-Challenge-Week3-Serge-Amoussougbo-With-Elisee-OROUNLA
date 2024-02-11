import Partner1 from "@/assets/images/brands-1.png";
import Partner2 from "@/assets/images/brands-2.png";
import Partner3 from "@/assets/images/brands-3.png";
import Partner4 from "@/assets/images/brands-4.png";
import Partner5 from "@/assets/images/brands-5.png";
import Partner6 from "@/assets/images/brands-6.png";
import Image from "next/image";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";

const partners = [
  {
    image: Partner1.src,
    imageWidth: 103,
    imageHeight: 35,
  },
  {
    image: Partner2.src,
    imageWidth: 84,
    imageHeight: 59,
  },
  {
    image: Partner3.src,
    imageWidth: 102,
    imageHeight: 75,
  },
  {
    image: Partner4.src,
    imageWidth: 103,
    imageHeight: 43,
  },
  {
    image: Partner5.src,
    imageWidth: 105,
    imageHeight: 63,
  },
  {
    image: Partner6.src,
    imageWidth: 77,
    imageHeight: 73,
  },
];

const PartnerSectionHead = () => {
  return (
    <>
      <h2 className="text-5xl text-text_color text-center mb-[30px] max-md:max-w-[287px] max-md:mx-auto">
        Big Companies Are Here
      </h2>
      <p className="text-second_text_color text-sm font-normal mx-auto text-center italic max-sm:max-w-[328px] mb-6">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
    </>
  );
};

export const PartnerSectionImage = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 items-center justify-items-center gap-[30px] w-full py-[50px]">
      {partners.map((partner, index) => (
        <Image
          key={index}
          src={partner.image}
          alt=""
          width={partner.imageWidth}
          height={partner.imageHeight}
        />
      ))}
    </div>
  );
};

const PartnerSection = () => {
  return (
    <div className="w-full bg-light_gray_1">
      <MaxContentWidthWrapper className="py-20">
        <PartnerSectionHead />
        <PartnerSectionImage />
      </MaxContentWidthWrapper>
    </div>
  );
};
export default PartnerSection;
