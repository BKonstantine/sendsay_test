import { FC, ReactNode } from "react";

interface IDragItem {
  children: ReactNode;
}

const DragItem: FC<IDragItem> = ({ children }) => {
  return <div>{children}</div>;
};

export default DragItem;
