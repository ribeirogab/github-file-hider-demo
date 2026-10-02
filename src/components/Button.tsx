import type { ButtonHTMLAttributes } from "react";
import { Spinner } from "./Spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  loading?: boolean;
};

export function Button({ variant = "primary", loading = false, children, ...props }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={loading || props.disabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? <Spinner size="small" /> : children}
    </button>
  );
}
