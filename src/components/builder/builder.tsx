import { FC } from "react";
import style from "./builder.module.css";
import Display from "../display/display";
import OperatorsBlock from "../operators-block/operators-block";

const Builder: FC = () => {
  return (
    <div className={style.builder}>
      <Display result={0} />
      <OperatorsBlock />
    </div>
  );
};

export default Builder;
