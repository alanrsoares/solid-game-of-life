import { Component } from "solid-js";

import Button from "./Button";

type Props = {
  onRandom: () => void;
};

const Controls: Component<Props> = (props) => {
  return (
    <div className="w-full flex justify-between">
      <Button onclick={props.onRandom}>Random</Button>
      <Button>Reset</Button>
      <Button>Play</Button>
    </div>
  );
};

export default Controls;
