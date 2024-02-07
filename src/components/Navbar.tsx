import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
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
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <MaxContentWidthWrapper>
      <nav className="flex gap-[41px] items-center mt-[16px]">
        <div className="min-w-[187px]">
          <Link href="#" className="text-lg text text_color font-monserrat">
            Bandage
          </Link>
        </div>
        <div className="lg:flex-1 flex justify-between items-center">
          <ul className="inline-flex gap-[21px] items-center">
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
    </MaxContentWidthWrapper>
  );
};

export default Navbar;
