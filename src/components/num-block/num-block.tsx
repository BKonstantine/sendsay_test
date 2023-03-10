import { FC, memo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import style from "./num-block.module.css";
import Button from "../button/button";
import { IOperators } from "../../utils/consts";

interface INumBlock {
  numbers: Array<IOperators>;
}

const NumBlock: FC<INumBlock> = memo(({ numbers }) => {
    return (
      <div className={style.num}>
        {numbers.map((number) => {
          return (
            <Button key={nanoid()} id={number.id} value={number.value} disabled={false}>
              {number.value}
            </Button>
          );
        })}
      </div>
    );
  })

export default NumBlock;
