import { Component, JSX } from "solid-js";
import { VariantProps, cva } from "class-variance-authority";
import { omit } from "rambda";

import { cn } from "~/lib/utils";

const variance = cva(
  ` rounded-full text-white h-16 w-16 p-4 grid place-items-center 
    hover:opacity-75 
  
    focus:outline-none 
    focus:ring 
    focus:ring-offset-gray-800 
    focus:ring-offset-2

    disabled:opacity-50 
    disabled:filter 
    disabled:grayscale 
    disabled:cursor-not-allowed

    shadow-xl transition-all cursor-pointer `,
  {
    variants: {
      variant: {
        blue: "bg-blue-800 ring-blue-800/60",
        red: "bg-red-800 ring-red-800/60",
        teal: "bg-teal-800 ring-teal-800/60",
        cyan: "bg-cyan-800 ring-cyan-800/60",
        green: "bg-green-800 ring-green-800/60",
      },
    },
  }
);

type Props = JSX.IntrinsicElements["button"] & VariantProps<typeof variance>;

const Button: Component<Props> = ({ variant, ...props }) => (
  <button
    role="button"
    class={cn(props.class, variance({ variant }))}
    {...omit(["variant", "class"], props)}
  />
);

export default Button;
