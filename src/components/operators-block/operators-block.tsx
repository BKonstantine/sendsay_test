import { FC, memo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import style from "./operators-block.module.css";
import Button from "../button/button";
import { IOperators } from "../../utils/consts";

interface IOperatorsBlock {
  operators: Array<IOperators>;
}

const OperatorsBlock: FC<IOperatorsBlock> = memo(({ operators }) => {
  return (
    <div className={style.operators}>
      {operators.map((operator) => {
        if (operator.id !== "equals") {
          return (
            <Button key={nanoid()} id={operator.id} value={operator.value} disabled={false}>
              {operator.value}
            </Button>
          );
        }
      })}
    </div>
  );
});

export default OperatorsBlock;
