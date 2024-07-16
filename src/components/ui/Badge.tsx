import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import './global.css';

export const badgeVariants = cva('badge rounded-sm', {
  variants: {
    color: {
      default: 'badge',
      primary: 'badge badge-primary',
      secondary: 'badge badge-secondary',
      error: 'badge badge-error text-red-200',
      warning: 'badge badge-warning',
      info: 'badge badge-info',
      success: 'badge badge-success',
    },
    variant: {
      default: '',
      outline: 'badge badge-outline',
      rounded: 'badge rounded-full',
    },
    size: {
      small: 'badge-sm',
      medium: 'badge-md',
      large: 'badge-lg',
    },
  },
  defaultVariants: {
    color: 'default',
    variant: 'default',
    size: 'medium',
  },
});

type BadgeProps = VariantProps<typeof badgeVariants> & {
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({ color, variant, size, children }) => {
  return <span className={badgeVariants({ color, variant, size })}>{children}</span>;
};

