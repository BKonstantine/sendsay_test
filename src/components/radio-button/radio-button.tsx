import { FC } from "react";
import style from "./button.module.css";

const RadioButton: FC = () => {
  return <input type="radio" className={style.radio}/>;
};

export default RadioButton;
