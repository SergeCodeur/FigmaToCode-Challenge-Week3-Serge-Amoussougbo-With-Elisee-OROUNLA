import * as React from "react";

import { cn } from "@/lib/utils";

export interface SubcribeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Subcribe = React.forwardRef<HTMLInputElement, SubcribeProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex justify-center">
        <input
          type={type}
          placeholder="Your Email"
          className={cn(
            "flex h-[58px] w-full rounded-l-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3 py-2 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <button className="w-[117px] bg-primary text-[14px] leading-7 text-light rounded-r-[5px]">
          Subscribe
        </button>
      </div>
    );
  }
);
Subcribe.displayName = "Subcribe";

export { Subcribe };
