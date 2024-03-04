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
  hasHistory: boolean;
};

const Controls: Component<Props> = (props) => {
  function renderPreviousButton() {
    return props.isPlaying || !props.hasHistory ? (
      <Button variant="blue" disabled>
        <icons.PreviousIcon />
      </Button>
    ) : (
      <Button onClick={props.onPreviousState} variant="blue">
        <icons.PreviousIcon />
      </Button>
    );
  }

  function renderNextButton() {
    return props.isPlaying ? (
      <Button variant="blue" disabled aria-label="Next Generation">
        <icons.NextIcon />
      </Button>
    ) : (
      <Button
        onClick={props.onNextState}
        variant="blue"
        aria-label="Next Generation"
      >
        <icons.NextIcon />
      </Button>
    );
  }

  return (
    <div class="w-full flex justify-evenly">
      <Button onClick={props.onRandom} variant="teal" aria-label="Randomize">
        <icons.ShuffleIcon />
      </Button>
      <Button onClick={props.onReset} variant="cyan" aria-label="Reset">
        <icons.ResetIcon />
      </Button>
      {renderPreviousButton()}
      {renderNextButton()}
      {props.isPlaying ? (
        <Button onClick={props.onTogglePlay} variant="red" aria-label="Pause">
          <icons.Pause />
        </Button>
      ) : (
        <Button onClick={props.onTogglePlay} variant="green" aria-label="Play">
          <icons.Play />
        </Button>
      )}
    </div>
  );
};

export default Controls;
