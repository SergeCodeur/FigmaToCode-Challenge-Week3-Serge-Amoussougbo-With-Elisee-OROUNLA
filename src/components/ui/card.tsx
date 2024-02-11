import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdOutlineCheck } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import { Button } from "./button";

interface TeamCardProps {
  className?: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  user_name: string;
  profession: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
}

export const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(
  (
    {
      className,
      image,
      imageWidth,
      imageHeight,
      user_name,
      profession,
      facebookLink,
      twitterLink,
      instagramLink,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-[18px]", className)}
      {...props}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt=""
          width={imageWidth}
          height={imageHeight}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-[30px] flex flex-col space-y-[10px] items-center">
        <h5 className="text-base font-bold text-text_color">{user_name}</h5>
        <h6 className="text-xl text-second_text_color">{profession}</h6>
        <ul className="inline-flex gap-[22px]">
          <li>
            <a href={facebookLink}>
              <FaFacebook className="text-primary" size={24} />
            </a>
          </li>
          <li>
            <a href={instagramLink}>
              <FaInstagram className="text-primary" size={24} />
            </a>
          </li>
          <li>
            <a href={twitterLink}>
              <FaTwitter className="text-primary" size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
);
TeamCard.displayName = "TeamCard";

export interface PricingCardProps {
  className?: string;
  offre: string;
  offre_description: string;
  price: number;
  currency?: string;
  price_type?: string;
  features_list: {
    name: string;
    available: boolean;
  }[];
  highLighted?: boolean;
  btn_text: string;
  backround_btn_primary?: boolean;
}

export const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      offre,
      offre_description,
      price,
      currency,
      price_type,
      features_list = [],
      highLighted = false,
      btn_text,
      backround_btn_primary = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-[35px] py-[50px] px-[40px] border border-primary max-w-[329px] rounded-[10px]",
        className,
        highLighted
          ? "bg-dark_background text-white py-[70px] lg:mt-[-40px]"
          : "bg-light_background"
      )}
      {...props}
    >
      <div className="flex flex-col gap-[35px] items-center">
        <h3 className="text-lg text-inherit text-center uppercase">{offre}</h3>
        <h5 className="text-inherit text-base font-bold text-center max-w-[168px] mx-auto">
          {offre_description}
        </h5>
        <div className="h-14 flex gap-2.5">
          <span className="text-5xl text-primary">{price}</span>
          <div className="text-primary flex flex-col">
            <span className="text-lg">{currency}</span>
            <span className="text-xl">{`Per ${price_type}`}</span>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-[15px]">
        {features_list.map((feature, index) => (
          <li key={index} className="flex gap-2.5 items-center ">
            <span
              className={`text-light !w-8 !h-8 rounded-full flex justify-center items-center ${
                feature.available ? "bg-success" : "bg-muted"
              }`}
            >
              <MdOutlineCheck />
            </span>
            <span className="text-inherit text-xl text-text_color">
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <div>
        <Button
          className={`w-full h-[52px] font-bold ${
            backround_btn_primary ? "bg-primary" : " bg-dark_background"
          }`}
        >
          {btn_text}
        </Button>
      </div>
    </div>
  )
);
PricingCard.displayName = "PricingCard";

interface FaqCardProps {
  className?: string;
  title: string;
  description: string;
}

export const FaqCard = React.forwardRef<HTMLDivElement, FaqCardProps>(
  ({ className, title, description, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex gap-[30px] p-[25px]", className)}
      {...props}
    >
      <div className="lg:flex items-start hidden">
        <SlArrowRight className="text-primary" size={16} />
      </div>
      <div className="space-y-[5px]">
        <h5 className="text-text_color text-base font-bold">{title}</h5>
        <p className="text-second_text_color text-sm italic font-semibold lg:max-w-[416px] mx-auto">
          {description}
        </p>
      </div>
    </div>
  )
);
FaqCard.displayName = "FaqCard";
