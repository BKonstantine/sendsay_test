import { FC } from "react";
import style from "./canvas.module.css";
import Info from "./info/info";

const Canvas: FC = () => {
  return (
    <div className={style.canvas}>
      <Info />
    </div>
  );
};

export default Canvas;
