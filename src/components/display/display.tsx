import { FC } from "react";
import style from "./display.module.css";

interface IDisplay {
  result: number;
}

const Display: FC<IDisplay> = ({ result }) => {
  return (
    <div className={style.display}>
      <div className={style.display__container}>
        <p className={style.result}>{result}</p>
      </div>
    </div>
  );
};

export default Display;
