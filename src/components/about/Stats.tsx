import MaxContentWidthWrapper from "../MaxContentWidthWrapper";

const Stats = () => {
  return (
    <MaxContentWidthWrapper className="lg:py-20 max-sm:py-[100px]">
      <div className="grid grid-cols-4 justify-between max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[100px] w-full lg:gap-[30px] max-sm:py-[45px]">
        <div className="flex flex-col items-center">
          <span className="text-6xl text-text_color">15K</span>
          <span className="text-second_text_color text-base font-bold">
            Happy Customers
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl text-text_color">150K</span>
          <span className="text-second_text_color text-base font-bold">
            Monthly Visitors
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl text-text_color">15</span>
          <span className="text-second_text_color text-base font-bold">
            Countries Worldwide
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl text-text_color">100+</span>
          <span className="text-second_text_color text-base font-bold">
            Top Partners
          </span>
        </div>
      </div>
    </MaxContentWidthWrapper>
  );
};

export default Stats;
