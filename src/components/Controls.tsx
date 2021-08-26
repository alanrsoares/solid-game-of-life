import { Component } from "solid-js";

import Button from "./Button";

import * as icons from "./icons";

type Props = {
  onRandom: () => void;
  onReset: () => void;
  onNextState: () => void;
  onTogglePlay: () => void;
  isPlaying: boolean;
};

const Controls: Component<Props> = (props) => {
  return (
    <div className="w-full flex justify-evenly">
      <Button onclick={props.onRandom} variant="teal">
        {icons.shuffle}
      </Button>
      <Button onclick={props.onReset} variant="cyan">
        {icons.reset}
      </Button>
      {props.isPlaying ? (
        <Button onclick={props.onNextState} variant="blue" disabled>
          {icons.skip}
        </Button>
      ) : (
        <Button onclick={props.onNextState} variant="blue">
          {icons.skip}
        </Button>
      )}
      {props.isPlaying ? (
        <Button onclick={props.onTogglePlay} variant="red">
          {icons.pause}
        </Button>
      ) : (
        <Button onclick={props.onTogglePlay} variant="green">
          {icons.play}
        </Button>
      )}
    </div>
  );
};

export default Controls;
