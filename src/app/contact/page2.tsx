/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

function SubmitButton() {
}
export default function Contact() {
  return (
    <div className="lg:max-w-7xl md:max-w-4xl max-w-sm mx-auto">
      <div className="flex md:flex-row items-center justify-between flex-col lg:mx-0 md:mx-6">
        <div className="flex flex-col space-y-10">
          <p className="text-xl font-bold">CONTACT US</p>
          <h1 className="md:text-7xl font-semibold">Get in touch today!</h1>
          <p className="text-secondary text-xl">
            We know how large objects will act, <br /> but things on a small
            scale
          </p>
          <div className="text-xl font-bold flex flex-col space-y-4">
            <div>Phone ; +451 215 215 </div>
            <div>Fax : +451 215 215</div>
          </div>
          <div className="flex items-center space-x-7">
            <Image src="/icons/facebook.svg" width={24} height={24} alt="" />
            <Image src="/icons/instagram.svg" width={24} height={24} alt="" />
            <Image src="/icons/twitter.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <img src="/images/contact-1.svg" className="lg:w-96 w-64" alt="" />
      </div>
      <section className="py-10">
        <div className="text-center mb-20">
          <span className="mb-5">VISIT OUR OFFICE</span>
          <h1 className="font-bold text-3xl">
            We help small businesses <br /> with big ideas
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center md:space-x-10 lg:space-y-0 md:space-y-10 space-y-10">
          <div className="flex flex-col justify-center items-center">
            <Image src="/icons/phone_icon.svg" width={80} height={80} alt="" />
            <h3 className="text-xl font-bold mb-2 pt-5">
              georgia.young@example.com
            </h3>
            <h3 className="text-xl font-bold mb-5">georgia.young@ple.com</h3>
            <h4 className="text-xl font-bold mb-5">Get Support</h4>
            <SubmitButton />
          </div>
          <div className="flex flex-col justify-center items-center bg-[#252B42] py-20 md:px-12 px-8">
            <Image src="/icons/map_icon.svg" width={80} height={80} alt="" />
            <h3 className="text-xl font-bold mb-2 pt-5 text-white">
              georgia.young@example.com
            </h3>
            <h3 className="text-xl font-bold mb-5 text-white">
              georgia.young@ple.com
            </h3>
            <h4 className="text-xl font-bold mb-5 text-white">Get Support</h4>
            <SubmitButton />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/icons/email.svg" width={80} height={80} alt="" />
            <h3 className="text-xl font-bold mb-2 pt-5">
              georgia.young@example.com
            </h3>
            <h3 className="text-xl font-bold mb-5">georgia.young@ple.com</h3>
            <h4 className="text-xl font-bold mb-5">Get Support</h4>
            <SubmitButton />
          </div>
        </div>
        <div className="py-10">
          <div className="flex flex-col justify-center items-center">
            <img src="/icons/arrow.svg" alt="" />
            <h2 className="font-bold text-xl mb-10">WE Can't WAIT TO MEET YOU</h2>
            <h1 className="font-bold text-3xl mb-10">Let’s Talk</h1>
            <button className="text-white font-bold rounded-xl bg-[#23A6F0] py-3 px-4">
              Submit Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}