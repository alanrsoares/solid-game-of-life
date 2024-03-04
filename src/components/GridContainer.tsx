import { ParentComponent } from "solid-js";

const GridContainer: ParentComponent = (props) => {
  return (
    <div class="m-auto flex rounded-xl bg-dark p-1 shadow-xl ring-4 ring-dark">
      <div class="rounded-lg border-2 border-dark">{props.children}</div>
    </div>
  );
};

export default GridContainer;
