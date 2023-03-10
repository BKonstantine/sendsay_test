import { FC, ReactNode } from "react";

interface IDragArea {
  children: ReactNode;
}

const DragArea: FC<IDragArea> = ({ children }) => {
  return <div>{children}</div>;
};
