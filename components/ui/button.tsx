"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { forwardRef } from "react";

type ButtonVariant = "accent" | "glass" | "primary";
type ButtonSize = "sm" | "md";

interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: LucideIcon | null;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  accent: "bg-accent text-bg hover:brightness-110",
  glass: "glass-card text-bg hover:brightness-110",
  primary: "bg-primary text-bg hover:brightness-110",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-3 text-xs",
  md: "px-5 md:px-7 py-3.5 text-xs md:text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      icon: Icon = ArrowRight,
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const content = (
      <motion.span
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        animate="rest"
        className={`focus-ring inline-flex items-center gap-2 rounded-2xl font-body font-semibold transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      >
        <span>{children}</span>

        {Icon && (
          <motion.span
            aria-hidden
            variants={{ rest: { x: 0 }, hover: { x: 3 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center"
          >
            <Icon size={16} strokeWidth={2.25} />
          </motion.span>
        )}
      </motion.span>
    );

    if (href) {
      return (
        <Link href={href} className="inline-block">
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} {...props} className="inline-block">
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
