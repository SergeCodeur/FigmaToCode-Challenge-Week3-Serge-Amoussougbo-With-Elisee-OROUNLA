"use client"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MaxContentWidthWrapper from "./MaxContentWidthWrapper";
import { Button } from "./ui/button";
import {useState} from "react"

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
    name: "Team",
    path: "/team",
  },
  {
    name: "Pricing",
    path: "#",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    // <MaxContentWidthWrapper className="p-0 w-full">
    <div className="">
    <div className="hidden md:block lg:block max-lg:px-5 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <nav className="flex gap-[41px] items-center mt-[16px]">
        <div className="min-w-[187px]">
          <Link href="#" className="text-lg text text_color font-monserrat">
            Bandage
          </Link>
        </div>
        <div className="flex lg:hidden md:hidden flex-1 justify-end p-3 text-3xl font-bold items-center gap-5">
          <i className="bi bi-search text-second_text_color"></i>
          <i className="bi bi-cart text-second_text_color"></i>
          <i className="bi bi-list-nested text-second_text_color"></i>
        </div>
        <div className="hidden  lg:flex md:flex lg:flex-1 md:flex-1 justify-between items-center">
          <ul className="inline-flex gap-[21px] items-center mx-auto-">
            {Routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.path}
                  className="text-second_text_color text-xl font-monserrat"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-end gap-[45px] items-center">
            <Link href="" className="text-xsl text-primary font-monserrat">
              Login
            </Link>
            <Button className="px-[25px] py-[15px] gap-[15px] font-monserrat">
              <span>Become a member</span>
              <FaArrowRight />
            </Button>
          </div>
        </div>
 
      </nav>
      
      </div>

      <div className="flex lg:hidden md:hidden flex-1 p-2 text-3xl font-bold items-center text-second_text_color bg-[#F6F6F6] h-screen- backdrop-blur-sm flex-col pt-0 relative">
      <nav className="flex gap-[41px] items-center mt-[16px]  w-full">
        <div className="min-w-[187px]">
          <Link href="#" className="text-lg text text_color font-monserrat">
            Bandage
          </Link>
        </div>
        <div className="flex lg:hidden md:hidden flex-1 justify-end p-3 px-6 text-3xl font-bold items-center gap-5">
          <i className="bi bi-search text-second_text_color"></i>
          <i className="bi bi-cart text-second_text_color"></i>
          <i onClick={()=> setOpen(!open)} className="bi bi-list-nested text-second_text_color"></i>
        </div>
        </nav>
      <ul className={` ${open ? 'flex': 'hidden'} gap-[21px] items-center mx-auto p-5 flex-col w-full  space-y-5 justify-center- h-screen`}>
            {Routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.path}
                  className="text-second_text_color text-xl font-monserrat"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
  );
};

export default Navbar;
