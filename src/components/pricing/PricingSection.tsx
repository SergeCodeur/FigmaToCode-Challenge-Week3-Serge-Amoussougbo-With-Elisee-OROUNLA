import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";
import { PricingCard } from "../ui/card";
import { Switch } from "../ui/switch";

const PricingCardFree = [
  {
    offre: "free",
    offre_description: "Organize across all apps by hand",
    price: 0,
    currency: "$",
    price_type: "Monthly",
    features_list: [
      { name: "Unlimited product updates", available: true },
      { name: "Unlimited product updates", available: true },
      { name: "Unlimited product updates", available: true },
      { name: "1GB  Cloud storage", available: false },
      { name: "Email and community support", available: false },
    ],
    btn_text: "Try for free",
    backround_btn_primary: false,
  },
  {
    offre: "Standard",
    offre_description: "Organize across all apps by hand",
    price: 9.99,
    currency: "$",
    price_type: "Monthly",
    highLighted: true,
    features_list: [
      { name: "Unlimited product updates", available: true },
      { name: "Unlimited product updates", available: true },
      { name: "Unlimited product updates", available: true },
      { name: "1GB  Cloud storage", available: false },
      { name: "Email and community support", available: false },
    ],
    btn_text: "Try for free",
  },
  {
    offre: "Premium",
    offre_description: "Organize across all apps by hand",
    price: 19.99,
    currency: "$",
    price_type: "Monthly",
    features_list: [
      { name: "Unlimited product", available: true },
      { name: "Unlimited product updates", available: true },
      { name: "Unlimited product updates", available: true },
      { name: "1GB  Cloud storage", available: false },
      { name: "Email and community support", available: false },
    ],
    btn_text: "Try for free",
  },
];

const PricingSection = () => {
  return (
    <section className="bg-light_gray_1">
      <MaxContentWidthWrapper className="py-28 flex items-center flex-col gap-12">
        <div className="text-center">
          <h2 className="text-text_color text-5xl">Pricing</h2>
          <p className="text-second_text_color text-sm lg:max-w-[485px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-text_color text-base font-bold">Monthly</span>
            <Switch />
            <span className="text-text_color text-base font-bold">Yearly</span>
          </div>
          <Button
            rounded="sm"
            className="bg-faded_primary text-primary text-xl font-bold"
          >
            Save 25%
          </Button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:gap-[30px] lg:mt-[48px]">
          {PricingCardFree.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default PricingSection;
