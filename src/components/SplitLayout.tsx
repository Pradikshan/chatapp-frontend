import React, { ReactNode } from "react";

const SplitLayout = ({ children }: { children: ReactNode }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="flex flex-row">
      <div>{left}</div>
      <div className="grow">{right}</div>
    </div>
  );
};

export default SplitLayout;
