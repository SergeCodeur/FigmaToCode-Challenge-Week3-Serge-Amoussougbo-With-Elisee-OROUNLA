import BannerImage from "@/assets/images/hero-image.png";
import Image from "next/image";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <div>
      <MaxContentWidthWrapper className="flex gap-[30px] justify-center items-center max-md:flex-col">
        <div className="lg:w-[599px] py-28 space-y-[35px] w-full max-md:text-center">
          <h5 className="uppercase text-base font-bold lg:block hidden">
            About company
          </h5>
          <h1 className="uppercase lg:text-6xl text-5xl">About us</h1>
          <p className="text-secondary_text_2 text-md">
            We know how large objects will act, <br /> but things on a small
            scale
          </p>
          <Button variant="primary" size="md" className="h-[52px]">
            Get Quote Now
          </Button>
        </div>
        <div className="relative">
          <Image
            src={BannerImage}
            alt=""
            width={571}
            height={668}
            className="w-full"
          />
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default HeroBanner;
