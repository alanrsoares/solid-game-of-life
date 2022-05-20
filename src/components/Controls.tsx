import { Component, createEffect } from "solid-js";

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
        <icons.Previous />
      </Button>
    ) : (
      <Button onclick={props.onPreviousState} variant="blue">
        <icons.Previous />
      </Button>
    );
  }

  function renderNextButton() {
    return props.isPlaying ? (
      <Button variant="blue" disabled>
        <icons.Next />
      </Button>
    ) : (
      <Button onclick={props.onNextState} variant="blue">
        <icons.Next />
      </Button>
    );
  }

  return (
    <div class="w-full flex justify-evenly">
      <Button onclick={props.onRandom} variant="teal">
        <icons.Shuffle />
      </Button>
      <Button onclick={props.onReset} variant="cyan">
        <icons.Reset />
      </Button>
      {renderPreviousButton()}
      {renderNextButton()}
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
