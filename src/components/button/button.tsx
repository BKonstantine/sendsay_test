import { FC, ReactNode } from "react";
import style from "./button.module.css";

interface IButton {
  id: string;
  value: string;
  type?: string;
  children: ReactNode;
}

const Button: FC<IButton> = ({ id, value, children }) => {
  const styleButton =
    id === "equals" ? style.button_secondary : style.button_primary;

  return (
    <button
      style={{ gridArea: id }}
      type="button"
      id={id}
      value={value}
      className={`${style.button} ${styleButton}`}
    >
      {children}
    </button>
  );
};

export default Button;
