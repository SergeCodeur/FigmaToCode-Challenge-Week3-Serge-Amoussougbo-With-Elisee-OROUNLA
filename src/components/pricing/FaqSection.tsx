import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { FaqCard } from "../ui/card";

const Faqs = [
  {
    title: "the quick fox jumps over the lazy dog",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    title: "the quick fox jumps over the lazy dog",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-light_background">
      <MaxContentWidthWrapper className="py-20 lg:space-y-[50px] space-y-20">
        <div className="space-y-2.5 lg:max-w-[552px] mx-auto text-center">
          <h2 className="text-text_color text-5xl text-center">Pricing FAQs</h2>
          <p className="text-second_text_color text-md">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-[30px]">
          {Faqs.map((faq, index) => (
            <FaqCard key={index} {...faq} />
          ))}
        </div>
        <p className="text-md text-second_text_color text-center">
          Haven&apos;t got your answer? Contact our support
        </p>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default FaqSection;
