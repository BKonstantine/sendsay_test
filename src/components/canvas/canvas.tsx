import { FC } from "react";
import style from "./canvas.module.css";
import info from "../../image/icon-canvas.svg";

const Canvas: FC = () => {
  return (
    <div className={style.canvas}>
      <div className={style.info}>
        <img
          src={info}
          alt="Иконка абстрактного рисунка"
          className={style.image}
        />
        <p className={style.title}>Перетащите сюда</p>
        <p className={style.subtitle}>любой элемент из&nbsp;левой панели</p>
      </div>
    </div>
  );
};

export default Canvas;
