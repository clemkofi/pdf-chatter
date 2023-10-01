import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

// this is going to be a component that we would wrap around all other components in
// order to keep the width consistent on all other pages
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
