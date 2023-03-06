import { FC } from "react";
import style from "./calculator-constructor.module.css";
import Canvas from "../canvas/canvas";
import Builder from "../builder/builder";

const CalculatorConstructor: FC = () => {
  return (
    <div className={style.container}>
      <Builder />
      <Canvas />
    </div>
  );
};

export default CalculatorConstructor;
