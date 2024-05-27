import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-stone-400 hover:border-stone-500 transition-colors bg-white px-3 py-2 text-sm  placeholder:text-stone-500 focus-visible:outline-none ring-offset-0 focus-visible:ring focus-visible:ring-stone-700/25 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
