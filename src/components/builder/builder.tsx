import { FC } from "react";
import style from "./builder.module.css";
import Display from "../display/display";
import OperatorsBlock from "../operators-block/operators-block";
import NumBlock from "../num-block/num-block";
import EqualsBlock from "../equals-block/equals-block";
import { operatorsList, numberList } from "../../utils/consts";

const Builder: FC = () => {
  return (
    <div className={style.builder}>
      <Display result={0} />
      <OperatorsBlock operators={operatorsList} />
      <NumBlock numbers={numberList} />
      <EqualsBlock operators={operatorsList}/>
    </div>
  );
};

export default Builder;
