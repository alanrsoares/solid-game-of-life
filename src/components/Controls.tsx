import { Component, createSignal, createEffect, on } from "solid-js";

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
    <div className="w-full flex justify-between">
      <Button onclick={props.onRandom} variant="yellow">
        {icons.shuffle}
      </Button>
      <Button onclick={props.onReset} variant="red">
        {icons.reset}
      </Button>
      {props.isPlaying ? (
        <Button onclick={props.onNextState} variant="green" disabled>
          {icons.skip}
        </Button>
      ) : (
        <Button onclick={props.onNextState} variant="green">
          {icons.skip}
        </Button>
      )}
      {props.isPlaying ? (
        <Button onclick={props.onTogglePlay} variant="blue">
          {icons.pause}
        </Button>
      ) : (
        <Button onclick={props.onTogglePlay} variant="blue">
          {icons.play}
        </Button>
      )}
    </div>
  );
};

export default Controls;
