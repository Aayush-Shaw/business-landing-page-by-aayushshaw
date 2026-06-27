import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand text-brand-foreground font-medium text-sm md:text-base aspect-square p-6 md:p-8 text-center leading-tight shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
