import { Component, JSX } from "solid-js";
import { DEAD_CELL_COLOR, SIZES } from "~/lib/config";

type Props = JSX.IntrinsicElements["div"] & {
  isAlive: boolean;
  bgColor: string;
  sizeIndex: number;
};

const CellItem: Component<Props> = (props) => {
  const cellSize = SIZES[props.sizeIndex ?? 0].cell;
  return (
    <div
      role="button"
      class="rounded-full m-px"
      onclick={props.onClick}
      style={`background-color: ${
        props.bgColor ?? DEAD_CELL_COLOR
      }; height: ${cellSize}; width: ${cellSize}; transition: background-color 0.1s ease-out;`}
      {...props}
    ></div>
  );
};

export default CellItem;
