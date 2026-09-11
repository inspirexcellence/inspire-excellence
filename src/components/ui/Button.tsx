"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
}

export function Button({ 
  children, 
  variant, 
  href, 
  onClick, 
  className, 
  size = "md", 
  type = "button" 
}: ButtonProps) {
  
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base"
  };

  const primaryClasses = cn(
    "group inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300",
    "bg-navy text-white hover:-translate-y-0.5 hover:shadow-lg",
    sizeClasses[size],
    className
  );

  const ghostClasses = cn(
    "group inline-flex items-center font-sans font-medium text-navy transition-all duration-300",
    size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm",
    className
  );

  const isPrimary = variant === "primary";
  const buttonClasses = isPrimary ? primaryClasses : ghostClasses;

  const content = (
    <>
      {children}
      <Icon 
        name="arrow-right" 
        size={16} 
        className={cn(
          "ml-2 transition-transform duration-300",
          isPrimary ? "group-hover:translate-x-1" : "group-hover:translate-x-1"
        )} 
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
}
