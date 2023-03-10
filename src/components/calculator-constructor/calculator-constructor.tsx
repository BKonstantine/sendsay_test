import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import style from "./calculator-constructor.module.css";
import Canvas from "../canvas/canvas";
import Builder from "../builder/builder";

const CalculatorConstructor: FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={style.container}>
        <Builder />
        <Canvas />
      </div>
    </DndProvider>
  );
};

export default CalculatorConstructor;
