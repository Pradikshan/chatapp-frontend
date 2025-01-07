import React, { ReactNode } from "react";

const SplitLayout = ({ children }: { children: ReactNode }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="flex flex-row">
      <div className="flex-grow">{left}</div>
      <div className="flex-grow">{right}</div>
    </div>
  );
};

export default SplitLayout;
