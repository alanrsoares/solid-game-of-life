import { Component } from "solid-js";

const GridContainer: Component = (props) => {
  return (
    <div className="flex m-auto border-4 border-[#222] border-2 rounded-lg p-1">
      <div>{props.children}</div>
    </div>
  );
};

export default GridContainer;
