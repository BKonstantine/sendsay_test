import { FC } from "react";
import style from "./app.module.css";
import CalculatorConstructor from "../calculator-constructor/calculator-constructor";

const App: FC = () => {
  return (
    <div className={style.app}>
      <CalculatorConstructor />
    </div>
  );
};

export default App;
