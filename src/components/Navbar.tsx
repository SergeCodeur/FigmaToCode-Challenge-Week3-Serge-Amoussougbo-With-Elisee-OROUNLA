"use client";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import MaxContentWidthWrapper from "./MaxContentWidthWrapper";
import { Button } from "./ui/button";

const Routes = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Product",
    path: "#",
  },
  {
    name: "Pricing",
    path: "#",
  },
  {
    name: "Contact",
    path: "#",
  },
];

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleClick = () => {
    setToggleNav(!toggleNav);
    // disable body overflow auto if navbar is open
    toggleNav
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };
  return (
    <MaxContentWidthWrapper className="py-[16px]">
      <nav className="flex gap-[41px] items-center relative h-[58px]">
        <div className="lg:min-w-[187px]">
          <Link
            href="#"
            className="text-lg text text_color font-monserrat z-[15] max-md:relative"
          >
            Bandage
          </Link>
        </div>
        <div className="flex-1 flex justify-between items-center max-md:justify-end">
          <ul
            className={`z-10 inline-flex gap-[21px] items-center max-md:fixed max-md:right-2/4 max-md:translate-x-2/4 max-md:top-0 max-md:w-full max-md:h-full max-md:bg-[#F6F6F6] max-md:justify-center max-md:flex-col max-md:-translate-y-[100%] max-md:transition-transform max-md:ease-in-out ${
              toggleNav ? "!translate-y-0" : ""
            }
            `}
          >
            {Routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.path}
                  className="text-second_text_color text-xl font-monserrat max-md:text-2xl "
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-end gap-[45px] items-center max-md:hidden">
            <Link href="" className="text-xsl text-primary font-monserrat">
              Login
            </Link>
            <Button className="px-[25px] py-[15px] gap-[15px] font-monserrat ">
              <span className="text-xsl">Become a member</span>
              <FaArrowRight />
            </Button>
          </div>
          <div className="max-md:flex hidden gap-4 relative z-[15]">
            <GrSearch
              size={24}
              className="cursor-pointer text-second_text_color"
            />
            <RiShoppingCart2Line
              size={24}
              className="cursor-pointer text-second_text_color"
            />
            <BiMenuAltRight
              size={24}
              className="cursor-pointer text-second_text_color"
              onClick={handleClick}
            />
          </div>
        </div>
      </nav>
    </MaxContentWidthWrapper>
  );
};

export default Navbar;
