import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const CtaSection = () => {
  return (
    <section>
      <MaxContentWidthWrapper className="py-40">
        <div className="space-y-[30px] text-center">
          <h2 className="text-text_color text-5xl text-center">
            Start your 14 days free trial
          </h2>
          <p className="text-second_text_color italic text-sm font-semibold lg:max-w-[419px] mx-auto">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <Button variant="primary" size="md" className="text-light font-bold">
            Try it free now
          </Button>
          <div>
            <ul className="inline-flex gap-[22px]">
              <li>
                <a href="#">
                  <FaFacebook className="text-primary" size={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className="text-primary" size={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="text-primary" size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default CtaSection;
