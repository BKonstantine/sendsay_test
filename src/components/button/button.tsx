import { FC, ReactNode } from "react";
import style from "./button.module.css";

interface IButton {
  id: string;
  value: string;
  type?: string;
  children: ReactNode;
}

const Button: FC<IButton> = ({ id, value, children }) => { 
  return (
    <button
      style={{ gridArea: id }}
      type="button"
      id={id}
      value={value}
      className={style.button}
    >
      {children}
    </button>
  );
};

export default Button;
