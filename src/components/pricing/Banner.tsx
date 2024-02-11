import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";

const Banner = () => {
  return (
    <div className="bg-light_background">
      <MaxContentWidthWrapper className="py-[50px] flex items-center h-[280px] flex-col gap-4">
        <h5 className="uppercase text-second_text_color text-base font-bold">
          Pricing
        </h5>
        <h1 className="text-text_color lg:text-6xl text-5xl">Simple Pricing</h1>
        <div className="py-2.5 flex gap-[15px] items-center">
          <Link className="text-text_color text-xl" href="/">
            Home
          </Link>
          <SlArrowRight className="text-muted" />
          <Link className="text-second_text_color text-xl" href="/pricing">
            Pricing
          </Link>
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default Banner;
