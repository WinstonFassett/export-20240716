import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Define input variants using cva
const inputVariants = cva(
  "input",
  {
    variants: {
      border: {
        default: "",
        bordered: "input-bordered",
      },
      color: {
        default: "",
        primary: "input-primary",
        accent: "input-accent",
        info: "input-info",
        success: "input-success",
        warning: "input-warning",
        error: "input-error",
      },
      size: {
        default: "",
        xs: "input-xs",
        sm: "input-sm",
        md: "input-md",
        lg: "input-lg",
      },
      disabled: {
        true: "input-disabled",
        false: "",
      },
    },
    defaultVariants: {
      border: "default",
      color: "default",
      size: "default",
      disabled: false,
    },
  }
);

// Define a type that extends InputHTMLAttributes and VariantProps
type InputHTMLAttributesWithoutType = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'color' | 'disabled'>;

export interface InputProps
  extends InputHTMLAttributesWithoutType,
    VariantProps<typeof inputVariants> {
  type?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, border, color, size, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ border, color, size, disabled, className }))}
        ref={ref}
        disabled={disabled===true}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
