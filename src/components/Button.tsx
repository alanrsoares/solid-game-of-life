import { Component, JSX } from "solid-js";

type Props = JSX.IntrinsicElements["button"] & {
  variant?: "blue" | "red" | "cyan" | "green" | "teal";
};

const Button: Component<Props> = ({ variant, ...props }) => {
  return (
    <button
      role="button"
      className="rounded-full text-white h-16 w-16 p-4 grid place-items-center hover:opacity-75 focus:(outline-none ring ring-offset-gray-800 ring-offset-2) disabled:(opacity-50 filter grayscale cursor-not-allowed) shadow-xl"
      classList={{
        "bg-blue-800 ring-blue-800/60": variant === "blue" || !variant,
        "bg-red-800 ring-red-800/60": variant === "red",
        "bg-teal-800 ring-teal-800/60": variant === "teal",
        "bg-cyan-800 ring-cyan-800/60": variant === "cyan",
        "bg-green-800 ring-green-800/60": variant === "green",
      }}
      {...props}
    />
  );
};

export default Button;
