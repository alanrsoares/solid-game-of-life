import { Component } from "solid-js";

import Button from "./Button";

type Props = {
  onRandom: () => void;
  onReset: () => void;
  onTogglePlay: () => void;
};

const Controls: Component<Props> = (props) => {
  return (
    <div className="w-full flex justify-between">
      <Button onclick={props.onRandom}>Random</Button>
      <Button onclick={props.onReset}>Reset</Button>
      <Button onclick={props.onTogglePlay}>Play</Button>
    </div>
  );
};

export default Controls;
