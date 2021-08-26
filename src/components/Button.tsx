import { Component, JSX } from "solid-js";

type Props = JSX.IntrinsicElements["button"] & {
  variant?: "blue" | "red" | "yellow" | "green";
};

const Button: Component<Props> = ({ variant, ...props }) => {
  return (
    <button
      role="button"
      className="rounded-full text-white h-18 w-18 p-4 grid place-items-center hover:opacity-75 focus:(outline-none ring ring-offset-gray-800 ring-offset-2) disabled:(opacity-50 filter grayscale cursor-not-allowed)"
      classList={{
        "bg-blue-800": variant === "blue" || !variant,
        "bg-red-800": variant === "red",
        "bg-yellow-800": variant === "yellow",
        "bg-green-800": variant === "green",
      }}
      {...props}
    />
  );
};

export default Button;
