import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "btn",
  {
    variants: {
      color: {
        default: "",
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
      },
      variant: {
        default: "",
        outline: "btn-outline",
        link: "btn-link",
      },
      shape: {
        default: "rounded-md",
        square: "btn-square",
        circle: "btn-circle",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      color: "default",
      variant: "default",
      shape: "default",
      size: "default",
    },
  }
);

type ButtonHTMLAttributesWithoutColor = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

export interface ButtonProps
  extends ButtonHTMLAttributesWithoutColor,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, variant, shape, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ color, variant, shape, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
