import { Component } from "solid-js";

import Button from "./Button";

import * as icons from "./icons";

type Props = {
  onRandom: () => void;
  onReset: () => void;
  onPreviousState: () => void;
  onNextState: () => void;
  onTogglePlay: () => void;
  isPlaying: boolean;
};

const Controls: Component<Props> = (props) => {
  return (
    <div className="w-full flex justify-evenly">
      <Button onclick={props.onRandom} variant="teal">
        <icons.Shuffle />
      </Button>
      <Button onclick={props.onReset} variant="cyan">
        <icons.Reset />
      </Button>
      {props.isPlaying ? (
        <>
          <Button variant="blue" disabled>
            <icons.Previous />
          </Button>
          <Button variant="blue" disabled>
            <icons.Skip />
          </Button>
        </>
      ) : (
        <>
          <Button onclick={props.onPreviousState} variant="blue">
            <icons.Previous />
          </Button>
          <Button onclick={props.onNextState} variant="blue">
            <icons.Skip />
          </Button>
        </>
      )}
      {props.isPlaying ? (
        <Button onclick={props.onTogglePlay} variant="red">
          <icons.Pause />
        </Button>
      ) : (
        <Button onclick={props.onTogglePlay} variant="green">
          <icons.Play />
        </Button>
      )}
    </div>
  );
};

export default Controls;
