import TestimonialsImage from "@/assets/images/testimonials-image.png";
import Image from "next/image";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const TestimonialSection = () => {
  return (
    <div className="bg-hover min-h-[636px]">
      <MaxContentWidthWrapper className="flex lg:justify-start justify-center items-center min-h-[636px] relative">
        <div className="max-w-[438px] w-full space-y-6 max-lg:text-center">
          <h5 className="text-base font-bold text-white uppercase">
            Work with us
          </h5>
          <h2 className="text-5xl text-white max-md:max-w-[274px] max-md:mx-auto">
            Now Let&apos;s grow Yours
          </h2>
          <p className="text-white text-sm max-md:max-w-[257px] max-md:mx-auto tracking-[0.2px]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <Button variant="outline" size="md" className="text-light font-bold">
            Button
          </Button>
        </div>
        <Image
          className="absolute -right-[34px] top-0 lg:block hidden"
          src={TestimonialsImage.src}
          alt=""
          width={590}
          height={636}
        />
      </MaxContentWidthWrapper>
    </div>
  );
};

export default TestimonialSection;
