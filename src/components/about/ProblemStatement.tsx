import MaxContentWidthWrapper from "../MaxContentWidthWrapper";

const ProblemStatement = () => {
  return (
    <MaxContentWidthWrapper className="py-12 flex items-center gap-[60px] max-md:flex-col max-md:justify-center">
      <div className="space-y-6 max-md:text-center">
        <h4 className="text-sm font-semibold text-danger_text italic">
          Problems trying
        </h4>
        <h2 className="text-text_color text-lg w-full lg:max-w-[394px] max-w-[269px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h2>
      </div>
      <div>
        <p className="text-second_text_color italic text-sm font-semibold lg:max-w-[545px] w-full max-w-[352px]">
          Problems trying to resolve the conflict between the two major realms
          of classical physics: Newtonian mechanics
        </p>
      </div>
    </MaxContentWidthWrapper>
  );
};

export default ProblemStatement;
