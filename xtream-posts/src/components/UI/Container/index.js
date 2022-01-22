import style from "./index.module.css";

export default function Container({ children }) {
  return <div className={style["main-container"]}>{children}</div>;
}
