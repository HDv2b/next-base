import type { ComponentProps } from "react";

export function Button({ className = "", ...props }: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={`rounded-full bg-foreground px-4 py-2 text-background ${className}`}
      {...props}
    />
  );
}
