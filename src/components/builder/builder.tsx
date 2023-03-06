import { FC } from "react";
import style from "./builder.module.css";
import Display from "../display/display";

const Builder: FC = () => {
  return (
    <div className={style.builder}>
      <Display result={0}/>
    </div>
  );
};

export default Builder;
