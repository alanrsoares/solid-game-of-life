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
    if (props.isPlaying || !props.hasHistory) {
      return (
        <Button variant="blue" disabled>
          <icons.Previous />
        </Button>
      );
    }
    return (
      <Button onclick={props.onPreviousState} variant="blue">
        <icons.Previous />
      </Button>
    );
  }

  function renderNextButton() {
    if (props.isPlaying) {
      return (
        <Button variant="blue" disabled>
          <icons.Next />
        </Button>
      );
    }
    return (
      <Button onclick={props.onNextState} variant="blue">
        <icons.Next />
      </Button>
    );
  }

  return (
    <div className="w-full flex justify-evenly">
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
