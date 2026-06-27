import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function SectionTitle({
  children,
  subtitle,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn("mb-3 md:mb-5", className)}>
      <h2
        className="font-heading text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-foreground"
        {...props}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
