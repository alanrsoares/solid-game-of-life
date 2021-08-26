import { Component } from "solid-js";

const GridContainer: Component = (props) => {
  return (
    <div className="flex m-auto ring-4 ring-dark bg-dark rounded-xl p-1 shadow-xl">
      <div className="border-2 rounded-lg border-dark">{props.children}</div>
    </div>
  );
};

export default GridContainer;
