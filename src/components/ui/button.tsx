import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap gap-[5px] !text-light text-xsl rounded-[5px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-light",
        outline: "border border-input bg-transparent text-primary",
        store_light: "text-text_color py-[18px] px-7 bg-light_background",
        store_primary: "text-light bg-dark_background",
      },
      size: {
        sm: {
          default: "h-9 py-[10px] px-5 text-xsl",
        },
        md: "h-10 px-10 py-[15px] text-xsl gap-[15px]",
        lg: "h-11 px-10 py-[15px] text-lg",
        icon: "h-[49px] w-[49px] px-5 py-[17px]",
      },
      rounded: {
        default: "rounded-[5px]",
        sm: "rounded-[37px] gap-[10px]",
        md: "rounded-[37px] gap-[10px]",
        lg: "rounded-[40px] gap-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
