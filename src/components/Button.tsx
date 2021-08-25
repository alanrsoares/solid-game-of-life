import { Component, JSX } from "solid-js";

type Props = JSX.IntrinsicElements["button"] & {};

const Button: Component<Props> = (props) => {
  return (
    <button
      role="button"
      className="rounded-full bg-blue-800 text-white h-24 w-24 grid place-items-center hover:opacity-75 focus:(outline-none ring ring-offset-gray-800 ring-offset-2)"
      {...props}
    />
  );
};

export default Button;
