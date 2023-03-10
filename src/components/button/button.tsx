import { FC, ReactNode } from "react";
import style from "./button.module.css";

interface IButton {
  id: string;
  value: string;
  children: ReactNode;
  disabled: boolean;
}

const Button: FC<IButton> = ({ id, value, children, disabled }) => {
  const styleButton =
    id === "equals" ? style.button_secondary : style.button_primary;

  return (
    <button
      disabled={disabled}
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
