import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import MaxContentWidthWrapper from "./MaxContentWidthWrapper";
import { Subcribe } from "./ui/subcribe";

const CompanyInfosLinks = [
  {
    name: "About Us",
    path: "#",
  },
  {
    name: "Carrier",
    path: "#",
  },
  {
    name: "We are hiring",
    path: "#",
  },
  {
    name: "Blog",
    path: "#",
  },
];
const LegalLinks = [
  {
    name: "About Us",
    path: "#",
  },
  {
    name: "Carrier",
    path: "#",
  },
  {
    name: "We are hiring",
    path: "#",
  },
  {
    name: "Blog",
    path: "#",
  },
];
const FeaturesLinks = [
  {
    name: "Business Marketing",
    path: "#",
  },
  {
    name: "User Analytic",
    path: "#",
  },
  {
    name: "Live Chat",
    path: "#",
  },
  {
    name: "Unlimited Support",
    path: "#",
  },
];
const ResourcesLinks = [
  {
    name: "IOS & Android",
    path: "#",
  },
  {
    name: "Watch a Demo",
    path: "#",
  },
  {
    name: "Customers",
    path: "#",
  },
  {
    name: "API",
    path: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-light">
      <MaxContentWidthWrapper>
        <div className="py-10 flex w-full justify-between max-md:flex-col max-md:items-start border-b border-b-muted_text max-md:gap-3">
          <div className="lg:min-w-[236px]">
            <Link
              href="/"
              className="text-lg text-text_color z-[15] max-md:relative"
            >
              Bandage
            </Link>
          </div>
          <ul className="inline-flex gap-[22px] max-w-[236px] w-full lg:justify-center">
            <li>
              <a href="">
                <FaFacebook className="text-primary" size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram className="text-primary" size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter className="text-primary" size={24} />
              </a>
            </li>
          </ul>
        </div>
        <div className="py-[50px] flex gap-[30px] max-md:flex-col">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[30px]">
            <div>
              <h5 className="text-base text-text_color font-bold mb-5">
                Company Info
              </h5>
              <ul className="inline-flex flex-col gap-[10px]">
                {CompanyInfosLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-second_text_color text-xl"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-base text-text_color font-bold mb-5">
                Legal
              </h5>
              <ul className="inline-flex flex-col gap-[10px]">
                {LegalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-second_text_color text-xl"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-base text-text_color font-bold mb-5">
                Features
              </h5>
              <ul className="inline-flex flex-col gap-[10px]">
                {FeaturesLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-second_text_color text-xl"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-base text-text_color font-bold mb-5">
                Resources
              </h5>
              <ul className="inline-flex flex-col gap-[10px]">
                {ResourcesLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-second_text_color text-xl"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:max-w-[343px] w-full">
            <h5 className="text-base text-text_color font-bold mb-5">
              Get In Touch
            </h5>
            <form action="">
              <Subcribe />
              <p className="text-second_text_color text-[12px] leading-7 tracking-[0.2px]">
                Lore imp sum dolor Amit
              </p>
            </form>
          </div>
        </div>
      </MaxContentWidthWrapper>
      <div className="bg-light_gray_1 w-full h-[74px] flex items-center">
        <MaxContentWidthWrapper>
          <p className="text-xl text-second_text_color max-md:text-center max-md:max-w-[196px] max-md:mx-auto">
            Made With Love By Finland All Right Reserved
          </p>
        </MaxContentWidthWrapper>
      </div>
    </div>
  );
};

export default Footer;
