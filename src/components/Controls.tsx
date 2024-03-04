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
      <Button variant="primary" disabled>
        <icons.PreviousIcon />
      </Button>
    ) : (
      <Button onClick={props.onPreviousState} variant="primary">
        <icons.PreviousIcon />
      </Button>
    );
  }

  function renderNextButton() {
    return props.isPlaying ? (
      <Button variant="primary" disabled aria-label="Next Generation">
        <icons.NextIcon />
      </Button>
    ) : (
      <Button
        onClick={props.onNextState}
        variant="primary"
        aria-label="Next Generation"
      >
        <icons.NextIcon />
      </Button>
    );
  }

  return (
    <div class="flex w-full justify-evenly">
      <Button
        onClick={props.onRandom}
        variant="secondary"
        aria-label="Randomize"
      >
        <icons.ShuffleIcon />
      </Button>
      <Button onClick={props.onReset} variant="accent" aria-label="Reset">
        <icons.ResetIcon />
      </Button>
      {renderPreviousButton()}
      {renderNextButton()}
      {props.isPlaying ? (
        <Button
          onClick={props.onTogglePlay}
          variant="destructive"
          aria-label="Pause"
        >
          <icons.Pause />
        </Button>
      ) : (
        <Button
          onClick={props.onTogglePlay}
          variant="positive"
          aria-label="Play"
        >
          <icons.Play />
        </Button>
      )}
    </div>
  );
};

export default Controls;
