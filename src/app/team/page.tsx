import Image1 from "@/assets/images/1.png";
import Image2 from "@/assets/images/2.png";
import Image3 from "@/assets/images/3.png";
import Image4 from "@/assets/images/4.png";
import Image5 from "@/assets/images/5.png";
import Team1 from "@/assets/images/t1.png";
import Team2 from "@/assets/images/t2.png";
import Team3 from "@/assets/images/t3.png";
import Team4 from "@/assets/images/t4.png";
import Team5 from "@/assets/images/t5.png";
import Team6 from "@/assets/images/t6.png";
import Team7 from "@/assets/images/t7.png";
import Team8 from "@/assets/images/t8.png";
import Team9 from "@/assets/images/t9.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function Page() {
  const team = [
    {
      img: Team1,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
    {
      img: Team2,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
    {
      img: Team3,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
    {
      img: Team4,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
    {
      img: Team5,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
    {
      img: Team6,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
    {
      img: Team7,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
    {
      img: Team8,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
    {
      img: Team9,
      imgWidth: 316,
      imgHeight: 231,
      title: "Username",
      desc: "Username",
    },
  ];
  return (
    <>
      <div className="container my-12">
        <div className="flex flex-col my-5 text-center space-y-8">
          <h3 className="text-second_text_color font-medium"> WHAT WE DO </h3>
          <h2 className="text-5xl font-bold text-text_color">
            Innovation <br className="lg:hidden md:hidden" /> tailored for you
          </h2>
          <div className="flex gap-3 m-auto ">
            <span className="font-semibold text-text_color">Home</span>
            <i className="bi bi-chevron-right"></i>
            <span className="text-second_text_color">Team</span>
          </div>
        </div>
      </div>
      <div className="p-0 flex flex-col md:flex-row lg:flex-row gap-2 mx-0 box-border">
        <div className="flex-1">
          <Image
            src={Image1}
            width={700}
            height={530}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 box-border p-0 ">
          <Image
            src={Image2}
            alt=""
            width={361}
            height={260}
            className="w-full"
          />
          <Image
            src={Image3}
            alt=""
            width={361}
            height={260}
            className="w-full"
          />
          <Image
            src={Image4}
            width={361}
            height={260}
            alt=""
            className="w-full"
          />
          <Image
            src={Image5}
            width={361}
            height={260}
            alt=""
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full flex flex-col  justify-center">
        <h3 className="text-text_color font-bold text-2xl mx-auto p-5 md:m-8 flex text-center md:p-8 justify-center">
          Meet Our <br className="md:hidden" /> Team
        </h3>

        <div className="flex  box-border sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto w-full flex-wrap ">
          {team?.map((item, index) => (
            <div
              key={index}
              className="flex w-full md:w-1/3 lg:w-1/3 p-8 mb:p-4 lg:p-4 flex-col"
            >
              <Image
                src={item?.img}
                alt=""
                width={item.imgWidth}
                height={item.imgHeight}
                className="w-full"
              />
              <div className="py-4 flex flex-col gap-2 justify-center text-center">
                <div className="font-bold text-lg text-text_color">
                  {item?.title}
                </div>
                <div className="font-semibolf text-base text-second_text_color">
                  {item?.desc}
                </div>
                <div className="font-semibolf text-2xl text-primary gap-3 flex justify-center">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 my-5">
        <div className="">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="md:mx-auto sm:text-center flex flex-col items-center justify-center w-full">
              <h2 className="justify-center font-montserrat text-5xl font-bold tracking-tight text-text_color text-center  md:mx-auto flex w-full">
                Start your <br className="md:hidden lg:hidden" /> 14 days free
                trial
              </h2>
              <p className="text-s text-center text-second_text_color my-5 m-auto font-medium p-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor{" "}
                <br className="hidden md:flex lg:flex" /> do met sent. RELIT
                official consequent.
              </p>
            </div>

            <div className="flex justify-center">
              <Button className="px-[25px] py-[15px] gap-[15px] font-monserrat font-bold-">
                <span>Try it free now</span>
              </Button>
            </div>
            <ul className="inline-flex gap-[22px] max-w-[242px] max-md:mx-auto">
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
            <div className="font-semibolf text-2xl  gap-4 flex justify-center mt-5">
              <FaTwitter className="text-primary" size={24.5} />
              <FaFacebook className="text-primary" size={24.5} />
              <FaInstagram className="text-primary" size={24.5} />
              <FaLinkedin className="text-primary" size={24.5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
