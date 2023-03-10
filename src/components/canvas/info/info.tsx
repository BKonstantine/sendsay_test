import { FC } from "react";
import style from "./info.module.css";
import info from "../../../image/icon-canvas.svg";

const Info: FC = () => {
  return (
    <div className={style.info}>
      <img
        src={info}
        alt="Иконка абстрактного рисунка"
        className={style.image}
      />
      <p className={style.title}>Перетащите сюда</p>
      <p className={style.subtitle}>любой элемент из&nbsp;левой панели</p>
    </div>
  );
};

export default Info;
