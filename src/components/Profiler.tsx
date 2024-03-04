import { Component, createSignal, onCleanup, onMount } from "solid-js";

type Props = {
  frames: number;
  startedPlayingAt?: Date;
};

const Profiler: Component<Props> = (props) => {
  const [fps, setFps] = createSignal(0);

  let timeoutId = 0;

  function tick(initial: number) {
    const current = props.frames;
    setFps(current - initial);

    timeoutId = window.setTimeout(() => tick(current), 1000);
  }

  onMount(() => {
    tick(props.frames);
  });

  onCleanup(() => {
    clearTimeout(timeoutId);
  });

  return (
    <div
      class="rounded-full bg-dark p-2 px-4 font-bold text-accent"
      classList={{ "opacity-0 border": fps() <= 0 }}
    >
      {fps()} fps
    </div>
  );
};

export default Profiler;
