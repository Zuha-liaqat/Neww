import * as React from "react";
import { EyeIcon } from "./ui-icons"
import { cn } from "@/lib/utils";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  error?: boolean | string | any;
  labelClassName?: string;
  fullwidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      labelClassName,
      type,
      label,
      required,
      icon,
      placeholder,
      error,
      fullwidth,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className={fullwidth ? 'grow' : ''}>
        {label && (
          <label
            className={cn("mb-1 text-[13px] text-primary-80", labelClassName)}
          >
            {label}
            {required && <span className="text-error">*</span>}
          </label>
        )}
        <div className="relative w-full text-primary-90">
          <input
            type={showPassword ? "text" : type}
            className={cn(
              "flex h-[40px] w-full rounded-[7px] border border-[#D3D3D3] bg-transparent py-1 pr-3 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-black disabled:cursor-not-allowed disabled:opacity-50",
              icon ? "pl-[2.7rem]" : "pl-3",
              type === "password" && "pr-9",
              error
                ? "border-error"
                : "border-input",
              className
            )}
            placeholder={placeholder || label}
            ref={ref}
            {...props}
          />
          {icon && (
            <div className="absolute inset-y-0 left-[15px] flex items-center">
              {icon}
            </div>
          )}
          {type === "password" && (
            <div
              className="absolute inset-y-0 right-[10px] flex items-center"
              onMouseDown={(e) => e.preventDefault()} // Prevent focus loss on icon click
            >
              <div
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOpenIcon className="w-4 text-gray-500" />
                ) : (
                  <EyeClosedIcon className="w-4"/>
                )}
              </div>
            </div>
          )}
        </div>
        {typeof error === "string" && (
          <span className="text-xs text-[#ef4444]">{error}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
