import MaxContentWidthWrapper from "@/components/MaxContentWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Cta from "./cta";

function Contact() {
  const contact = [
    {
      icon: (
        <svg
          width="73"
          height="72"
          viewBox="0 0 73 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2879_8053)">
            <path
              d="M56.929 38.9947C56.5775 38.6426 56.16 38.3632 55.7004 38.1726C55.2408 37.982 54.7482 37.8839 54.2506 37.8839C53.7531 37.8839 53.2604 37.982 52.8008 38.1726C52.3413 38.3632 51.9238 38.6426 51.5722 38.9947L45.5335 45.0334C42.7339 44.1999 37.5097 42.3057 34.1987 38.9947C30.8876 35.6836 28.9934 30.4594 28.16 27.6598L34.1987 21.6211C34.5508 21.2696 34.8301 20.8521 35.0207 20.3925C35.2113 19.9329 35.3094 19.4403 35.3094 18.9427C35.3094 18.4452 35.2113 17.9525 35.0207 17.4929C34.8301 17.0333 34.5508 16.6159 34.1987 16.2643L19.0451 1.11076C18.6936 0.758646 18.2761 0.479298 17.8165 0.288701C17.3569 0.0981045 16.8642 0 16.3667 0C15.8692 0 15.3765 0.0981045 14.9169 0.288701C14.4573 0.479298 14.0398 0.758646 13.6883 1.11076L3.41418 11.3849C1.97459 12.8245 1.16387 14.802 1.19418 16.8212C1.28131 22.2159 2.70954 40.9533 17.4767 55.7204C32.2439 70.4876 50.9813 71.912 56.3797 72.003H56.4858C58.4861 72.003 60.3765 71.215 61.8085 69.783L72.0826 59.5088C72.4347 59.1573 72.7141 58.7398 72.9047 58.2802C73.0953 57.8207 73.1934 57.328 73.1934 56.8304C73.1934 56.3329 73.0953 55.8402 72.9047 55.3807C72.7141 54.9211 72.4347 54.5036 72.0826 54.1521L56.929 38.9947ZM56.4479 64.4224C51.72 64.3428 35.5435 63.0737 22.8335 50.3599C10.0818 37.6081 8.84674 21.3749 8.77097 16.7417L16.3667 9.14594L26.1635 18.9427L21.2651 23.8411C20.8198 24.2861 20.4924 24.835 20.3125 25.4382C20.1326 26.0414 20.1058 26.68 20.2346 27.2961C20.3256 27.7318 22.5494 38.0627 28.8381 44.3515C35.1268 50.6402 45.4578 52.864 45.8934 52.9549C46.5092 53.0874 47.1484 53.0627 47.7522 52.8833C48.356 52.7039 48.9049 52.3755 49.3485 51.9283L54.2506 47.0299L64.0474 56.8267L56.4479 64.4224Z"
              fill="#23A6F0"
            />
          </g>
          <defs>
            <clipPath id="clip0_2879_8053">
              <rect
                width="72"
                height="72"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      c1: "georgia.young@example.com",
      c2: "georgia.young@ple.com",
      bg: "bg-white",
      color: "text-text_color",
    },
    {
      icon: (
        <svg
          width="51"
          height="67"
          viewBox="0 0 51 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 0C11.4168 0 0 11.3074 0 25.2559C0 29.9206 0.921868 34.7384 3.56734 38.2109L25.5 67L47.4327 38.2109C49.8356 35.0569 51 29.4811 51 25.2559C51.0001 11.3074 39.5833 0 25.5 0ZM25.5 14.6276C31.4257 14.6276 36.231 19.3869 36.231 25.2558C36.231 31.1248 31.4257 35.8841 25.5 35.8841C19.5743 35.8841 14.7691 31.1248 14.7691 25.2559C14.7691 19.3869 19.5743 14.6276 25.5 14.6276Z"
            fill="#23A6F0"
          />
        </svg>
      ),
      c1: "georgia.young@example.com",
      c2: "georgia.young@ple.com",
      bg: "bg-text_color",
      color: "text-white",
    },
    {
      icon: (
        <svg
          width="72"
          height="55"
          viewBox="0 0 72 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.225 7.12708C0.678682 5.10236 1.79395 3.29456 3.38815 1.99975C4.98235 0.704934 6.96098 -0.000139766 9 2.07815e-08H63C65.039 -0.000139766 67.0177 0.704934 68.6118 1.99975C70.206 3.29456 71.3213 5.10236 71.775 7.12708L36 29.3975L0.225 7.12708ZM0 12.3612V44.9212L26.1135 28.6137L0 12.3612ZM30.4245 31.3042L0.8595 49.7612C1.58997 51.3301 2.74287 52.6553 4.18402 53.5827C5.62516 54.5102 7.29529 55.0017 9 55H63C64.7044 55.0004 66.3739 54.5078 67.8143 53.5796C69.2546 52.6513 70.4065 51.3256 71.136 49.7567L41.571 31.2996L36 34.7692L30.4245 31.2996V31.3042ZM45.8865 28.6183L72 44.9212V12.3612L45.8865 28.6137V28.6183Z"
            fill="#23A6F0"
          />
        </svg>
      ),
      c1: "georgia.young@example.com",
      c2: "georgia.young@ple.com",
      bg: "bg-white",
      color: "text-text_color",
    },
  ];
  const ContactItem = ({ data }: { data: any }) => {
    return (
      <div
        className={`flex flex-col transition duration-300  rounded shadow-sm- hover:shadow- py-12 px-6 ${
          data.bg == "bg-white" ? "bg-white" : "bg-text_color"
        }`}
      >
        <div
          className={`flex flex-col justify-between flex-grow p-8 borde border-t-0 rounded-b `}
        >
          <div className="flex justify-center">{data?.icon}</div>
          <div
            className={`flex flex-col leading-54 text-sm font-semibold mt-5 text-center gap-4 ${data?.color}`}
          >
            <div className=""> {data?.c1} </div>
            <div className="">{data?.c2}</div>
            <div className=" mt-4 mx-auto">Get Support</div>

            <Button
              variant="outline"
              size="lg"
              rounded="lg"
              className="border- border-primary text-sm font-medium hover:text-white hover:bg-primary self-center"
            >
              Submit Request
            </Button>
          </div>
          {/* <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Buy Basic
          </a> */}
        </div>
      </div>
    );
  };
  return (
    <div className="">
      <MaxContentWidthWrapper className="flex box-border flex-wrap">
        <div className="flex bg-green-20 w-full md:w-1/2 lg:w-1/2">
          <div className="lg:pr-10 lg:pl-15 leading-6 flex flex-col gap-3 justify-center1 lg:pt-12 space-y-[35px]">
            <h5 className="p-4 md:p-0 lg:p-0 text-md font-semibold leading-none text-text_color text-center md:text-left">
              Contact us
            </h5>
            <h3 className="text-5xl md:text-6xl font-extrabold md:leading-12 text-text_color font-monserrat text-center mb:text-left lg:text-left">
              Get in touch <br className=" md:block" /> today!
            </h3>
            <p className="p-5 text-center mb:text-left lg:text-left text-second_text_color text-md mb:p-0 lg:p-0">
              We know how large objects will act,
              <br className="hidden md:block" />
              but things on a small scale
            </p>
            <p className="text-text_color flex flex-col gap-5 text-center md:text-left lg:text-left">
              <span className="font-bold text-lg">Phone : +451 215 215 </span>
              <span className="font-bold text-lg">Fax : +451 215 215 </span>
            </p>
            <ul className="inline-flex gap-[22px] max-w-[242px] max-md:mx-auto">
              <li>
                <a href="">
                  <FaTwitter className="text-text_color" size={24.5} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook className="text-text_color" size={24.5} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram className="text-text_color" size={24.5} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin className="text-text_color" size={24.5} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 lg:w-1/2 justify-end pt-12 md:p-0 lg:p-0">
          <Image
            src="/images/contact-1.svg"
            className="w-full"
            width={632}
            height={826}
            alt=""
          />
        </div>
      </MaxContentWidthWrapper>
      {/* <ContactBanner /> */}
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-text_color sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">VISIT OUR OFFICE</span>
              </span>
            </h2>
            <p className="text-center text-5xl text-text_color md:text-5xl- font-montserrat ">
              We help small businesses <br className="lg:block" /> with big
              ideas
            </p>
          </div>
          <div className="p-5 grid max-w-md gap-12 md:gap-0 lg:gap-0 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
            {contact?.map((item, index) => (
              <ContactItem key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
}

export default Contact;
