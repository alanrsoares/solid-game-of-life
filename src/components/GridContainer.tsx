import { ParentComponent } from "solid-js";

const GridContainer: ParentComponent = (props) => {
  return (
    <div class="flex m-auto ring-4 ring-dark bg-dark rounded-xl p-1 shadow-xl">
      <div class="border-2 rounded-lg border-dark">{props.children}</div>
    </div>
  );
};

export default GridContainer;
