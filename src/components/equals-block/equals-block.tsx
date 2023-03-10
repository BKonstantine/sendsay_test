import { FC, memo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import style from "./equals-block.module.css";
import Button from "../button/button";
import { IOperators } from "../../utils/consts";

interface IEqualsBlock {
  operators: Array<IOperators>;
}

const EqualsBlock: FC<IEqualsBlock> = memo(({ operators }) => {
  return (
    <div className={style.equals}>
      {operators.map((operator) => {
        if (operator.id === "equals") {
          return (
            <Button key={nanoid()} id={operator.id} value={operator.value} disabled={true}>
              {operator.value}
            </Button>
          );
        }
      })}
    </div>
  );
});

export default EqualsBlock;
